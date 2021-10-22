import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SIZE, images, icons, COLORS } from '../Theme'
import MainButton from '../Component/MainBouton';

const { width, height } = Dimensions.get('screen')

const Register = ({ navigation }) => {
    return (
        <ImageBackground source={images.LoginRegister} style={styles.constainer}>

            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} resizeMode='contain' source={images.LoginLogo} />
            </View>

            <View style={styles.formContainer}>

            <View style={styles.input}>
                    <Image source={icons.inputName} resizeMode={'contain'} style={styles.icon} />
                    <TextInput keyboardType='default' placeholder='Name' placeholderTextColor='white' style={styles.textinput} />
                </View>

                <View style={styles.input}>
                    <Image source={icons.inputMail} resizeMode={'contain'} style={styles.icon} />
                    <TextInput keyboardType='email-address' placeholder='Email' placeholderTextColor='white' style={styles.textinput} />
                </View>
                <View style={styles.input}>
                    <Image source={icons.inputPasword} resizeMode={'contain'} style={styles.icon} />
                    <TextInput placeholder='Password' secureTextEntry placeholderTextColor='white' style={styles.textinput} />
                </View>
                <View style={styles.input}>
                    <Image source={icons.inputPasword} resizeMode={'contain'} style={styles.icon} />
                    <TextInput placeholder='Confirm password' secureTextEntry placeholderTextColor='white' style={styles.textinput} />
                </View>
                <MainButton onPress={()=>console.log('login')} title="S'inscrire"/>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.newAcc}>Déja inscrit? se connecter</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default Register


const styles = StyleSheet.create({
    constainer: {
        width,
        height
    },
    logoContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: width / 2,
        marginTop: 40

    },
    formContainer: {
        paddingHorizontal: SIZE.padding,
        marginTop: "auto",
        marginBottom: "auto"

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
    },
    forget: {
        color: COLORS.white
    },
    newAcc: {
        color: COLORS.white,
        textAlign: 'center',
        marginTop:80,
        textDecorationLine: 'underline'
    }
})