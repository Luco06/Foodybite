import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';

const Tabs = createStackNavigator();

const MainNav = () => {

    return (
       <Tabs.Navigator>
           <Tabs.Screen name='Home' component={Home}/>
       </Tabs.Navigator>
    )
}

export default MainNav
