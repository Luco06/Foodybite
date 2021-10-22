import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './src/Navigation/AuthNav';
import Nav from './src/Navigation/Nav';
import AuthContext, { AuthProvider } from './src/context/AuthContext'


export default function App() {
  return (
    <NavigationContainer>
      <AuthContext>
        <Nav/>
      </AuthContext>
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
