import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Register = ({navigation}) => {
    return (
        <View>
            <Text>Register</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{
                padding:20,
                backgroundColor: "red"
            }}>
                <Text style={{color:"white"}}>Go to login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register
