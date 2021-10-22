import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../Theme'

const MainBouton = ({title,  onPress}) => {
    return (
       <TouchableOpacity onPress={onPress} style={{
           width:'70%',
           height: 62,
           alignSelf:'center',
           justifyContent:'center',
           alignItems:'center',
           backgroundColor: COLORS.primary,
           borderRadius: 15,
           marginTop: 50,
       }}>
           <Text style={{color:COLORS.white, fontWeight:'bold'}}>{title}</Text>
       </TouchableOpacity >
    )
}

export default MainBouton
