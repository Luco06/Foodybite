import React from 'react'
import { View, Text, Dimensions, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { SIZE, images, icons, COLORS } from '../Theme'
import MainButton from '../Component/MainBouton';

const { width, height } = Dimensions.get('screen')

const ForgetPassword = ({ navigation }) => {
    return (
        <ImageBackground source={images.LoginBkg} style={styles.constainer}>
            <View style={styles.divBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode='contain' style={styles.imgBack} source={icons.backArrow} />
                </TouchableOpacity>
                <Text style={styles.txtBack}>Mot de passe oublier</Text>
            </View>
            <View style={styles.divText}>
                <Text style={styles.text}>Entrer votre e-mail pour recevoir les instructions</Text>
            </View>

            <View style={styles.input}>
                <Image source={icons.inputMail} resizeMode={'contain'} style={styles.icon} />
                <TextInput keyboardType='email-address' placeholder='Email' placeholderTextColor='white' style={styles.textinput} />
            </View>
            <MainButton title='Envoyer' onPress={() => console.log('envoyer')} />
        </ImageBackground>
    )
}

export default ForgetPassword;

const styles = StyleSheet.create({
    constainer: {
        width,
        height,
        paddingHorizontal: SIZE.padding
    },
    divBack: {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'center'
    },
    imgBack: {
        width: 30,
        tintColor: COLORS.white

    },
    txtBack: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: COLORS.white

    },
    divText: {
        width: '100%',
    },
    text: {
        color: 'rgba(255, 255, 255, .7)',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 60,
        marginBottom: 50
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, .3)',
        borderRadius: 15,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,

    },
    textinput: {
        height: '100%',
        color: 'white'
    },
    icon: {
        width: 20,
        marginRight: 10
    },
})