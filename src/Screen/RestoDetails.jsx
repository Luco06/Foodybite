import React,{useEffect, useState} from 'react'
import { View, Text } from 'react-native'

const RestoDetails = ({route}) => {
    const [resto, setResto]= useState('')
    useEffect(()=>{
        let {resto}= route.params
        setResto(resto)
        console.log(resto)
    },[resto])
    
    return (
        <View>
            <Text>{resto.name}</Text>
        </View>
    )
}

export default RestoDetails
