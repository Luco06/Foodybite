import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SIZE, images, icons, COLORS } from '../Theme'
import MainButton from '../Component/MainBouton';

const { width, height } = Dimensions.get('screen')

const Login = ({ navigation }) => {
    return (
        <ImageBackground source={images.LoginBkg} style={styles.constainer}>

            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} resizeMode='contain' source={images.LoginLogo} />
            </View>

            <View style={styles.formContainer}>
                <View style={styles.input}>
                    <Image source={icons.inputMail} resizeMode={'contain'} style={styles.icon} />
                    <TextInput keyboardType='email-address' placeholder='Email' placeholderTextColor='white' style={styles.textinput} />
                </View>

                <View style={styles.input}>
                    <Image source={icons.inputPasword} resizeMode={'contain'} style={styles.icon} />
                    <TextInput placeholder='Password' secureTextEntry placeholderTextColor='white' style={styles.textinput} />
                </View>

                <View style={{alignItems:"flex-end"}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')}>
                        <Text style={{color: COLORS.white}}>Forget password ?</Text>
                    </TouchableOpacity>
                </View>
                <MainButton/>
            </View>

        </ImageBackground>
    )
}

export default Login


const styles = StyleSheet.create({
    constainer: {
        width,
        height
    },
    logoContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    logoImage: {
        width: width / 2,

    },
    formContainer: {
        paddingHorizontal: SIZE.padding

    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, .3)',
        height: 62,
        borderRadius: 15,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    icon: {
        width: 20,
        marginRight: 10
    },
    textinput: {
        flex: 1,
        height: '100%',
        color: 'white',
    }

})