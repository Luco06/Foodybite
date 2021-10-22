import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './src/Navigation/AuthNav';
import Nav from './src/Navigation/Nav';


export default function App() {
  const [isLoging, setIsLoging] = useState(false)
  return (
    <NavigationContainer>
      {isLoging? (<Nav/>) : (<AuthNav/>)}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
