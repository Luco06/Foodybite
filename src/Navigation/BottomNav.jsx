import React from 'react'
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screen/Home'
import Favoris from '../Screen/Favoris'
import Notifs from '../Screen/Notifs'
import Profile from '../Screen/Profile'
import HomeStack from './HomeStack'

const Tabs = createBottomTabNavigator()

const BottomNav = () => {
    return (
     <Tabs.Navigator>
         <Tabs.Screen name ='HomeStack' component={HomeStack}/>
         <Tabs.Screen name ='Favoris' component={Favoris}/>
         <Tabs.Screen name ='Notifs' component={Notifs}/>
         <Tabs.Screen name ='Profile' component={Profile}/>
     </Tabs.Navigator>
    )
}

export default BottomNav
