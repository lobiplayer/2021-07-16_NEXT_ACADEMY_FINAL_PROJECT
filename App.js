import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';

export default function App() {
  return (
    <NavigationContainer >
      <Navigation />
    </NavigationContainer>
    // <Signup />
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

