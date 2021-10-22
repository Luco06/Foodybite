import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../Theme'

const MainBouton = () => {
    return (
       <TouchableOpacity style={{
           width:'100%',
           height: 62,
           justifyContent:'center',
           alignItems:'center',
           backgroundColor: COLORS.primary,
           borderRadius: 15
       }}>
           <Text>Hello</Text>
       </TouchableOpacity>
    )
}

export default MainBouton
