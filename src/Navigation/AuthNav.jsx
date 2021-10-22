import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/Login';
import ForgetPassword from '../Screen/ForgetPassword';
import Register from '../Screen/Register';

const Tabs = createStackNavigator();

const AuthNav = () => {
    return (
        <Tabs.Navigator 
        initialRouteName ='Login'
        screenOptions ={{
            headerShown :  false
        }}
        >
            <Tabs.Screen name='Login' component={Login}/>
            <Tabs.Screen name='Register' component={Register}/>
            <Tabs.Screen name='ForgetPassword' component={ForgetPassword}/>
        </Tabs.Navigator>
    )
}

export default AuthNav
