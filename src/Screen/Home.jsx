import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Restaurant } from '../../data'
import MainBouton from '../Component/MainBouton'
import { AuthProvider } from '../context/AuthContext'
import { COLORS, icons, SIZE } from '../Theme'

const Home = ({ navigation }) => {
    const { setIsLoging } = useContext(AuthProvider)
    function RenderSearchBar() {
        return (
            <View style={styles.Searchcontainer}>
                <Image source={icons.searchIcon} style={styles.SearchImg} />
                <TextInput placeholder='Trouver un restaurant' style={styles.Searchinput} />
                <TouchableOpacity onPress={() => console.log('OpenFilter')}>
                    <Image source={icons.filterIcon} style={styles.SearchImg} />
                </TouchableOpacity>
            </View>
        )
    }
    function RenderRestaurant() {
        return (
            <FlatList
                data={Restaurant}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestoDetails', { resto: item })} style={styles.Divbtnresto}>
                            <Image source={{ uri: item.img }} style={{ flex: 1 }} />
                            <View style={styles.divLocalisation}>
                                <Text style={styles.nameLocalisation}>{item.name}</Text>
                                <Text>{item.address}</Text>
                            </View>
                            <View style={styles.divbtninfo}>
                                <View style={styles.vOpen}>
                                    <Text style={{ fontSize: 12, color: item.isOpen ? COLORS.green : 'red' }}>{item.isOpen ? 'Open' : 'Close'}</Text>
                                </View>
                                <View style={styles.vRating}>
                                    <Image style={{ width: 20, height: 20, marginRight: 3 }} source={icons.badgeStar} />
                                    <Text style={{ fontSize: 12 }}>{item.rating}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}

            />
        )
    }
    //MainReturn
    return (
        <View style={styles.Maincontainer}>
            <FlatList
                data={Restaurant}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* SearchBar */}
                        {RenderSearchBar()}
                        <View style={{ flexDirection: 'row', width: '100%', paddingVertical: SIZE.padding, justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: SIZE.h2, fontWeight: 'bold' }}>Nos nouveautées</Text>
                            <Text>Voir tous (5)</Text>
                        </View>
                        {/* Restaurant */}
                        {RenderRestaurant()}
                    </View>
                }
                ListFooterComponent={
                    <View style={{ width: '100%', paddingVertical: 20 }} />
                }
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        paddingHorizontal: SIZE.padding,
    },
    Searchcontainer: {
        height: 50,
        backgroundColor: COLORS.grayTransparent,
        width: '100%',
        marginTop: 50,
        marginBottom: 20,
        borderWidth: .2,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: SIZE.padding
    },
    SearchImg: {
        height: 20,
        width: 20,
        tintColor: COLORS.lightGray
    },
    Searchinput: {
        flex: 1,
        height: '100%',
        paddingLeft: 15,
        fontSize: 18
    },
    Divbtnresto: {
        width: 300,
        height: 250,
        marginRight: SIZE.padding
    },
    divLocalisation: {
        backgroundColor: COLORS.white,
        padding: SIZE.padding
    },
    nameLocalisation: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    divbtninfo: {
        width: '100%',
        position: 'absolute',
        top: 0,
        paddingHorizontal: SIZE.padding,
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    vOpen: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vRating: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})