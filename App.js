
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Index.js'
import { LoginProvider, LoginContext } from './LoginContext';


export default function App() {

  return (

    <LoginProvider>
      <Index />
    </LoginProvider>
  );
}
