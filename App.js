import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginProvider, LoginContext } from './LoginContext';


export default function App() {

  const Stack = createStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false)
  const [token, setToken] = useContext(LoginContext)

  console.log('token')
  console.log(token)


  return (
    <LoginProvider>
      <NavigationContainer >

        {token == "" ?
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
          </Stack.Navigator>
          :
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Main" component={Navigation} />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </LoginProvider>

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




// const MainNavigator = () => (

//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Feed" component={FeedScreen} />
//     <Tab.Screen name="Catalog" component={CatalogScreen} />
//     <Tab.Screen name="Account" component={AccountScreen} />
//   </Tab.Navigator>

// )

// const AppNavigator = () => (
//   <Stack.Navigator headerMode='none'>
//     <Stack.Screen name="SignIn" component={SignInScreen} />
//     <Stack.Screen name="SignUp" component={SignUpScreen} />
//     <Stack.Screen name="Main" component={MainNavigator} />
//   </Stack.Navigator>



