import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'
import Home from '../Screen/Home';
import RestoDetails from '../Screen/RestoDetails';

const Tabs= createStackNavigator();




const HomeStack = () => {
    return (
       <Tabs.Navigator>
           <Tabs.Screen name='Home' component={Home}/>
           <Tabs.Screen name='RestoDetails' component={RestoDetails}/>
       </Tabs.Navigator>
    )
}

export default HomeStack
