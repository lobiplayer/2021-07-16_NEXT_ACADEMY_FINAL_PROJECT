import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Homepagekeytask from '../components/Homepagekeytask';
import Homepagekeydates from '../components/Homepagekeydates';
import Homepagerewards from '../components/Homepagerewards';
import Homepageheader from '../components/Homepageheader';
import { LoginContext } from '../LoginContext';

const Homepage = () => {


    const [token, setToken] = useContext(LoginContext)

    const logout = (e) => {
        e.preventDefault();
        setToken("")
        console.log(token)
        console.log("token")
    }


    return (
        <ScrollView contentContainerStyle={styles.layout}>
            <Homepageheader />
            <Button title="Log Out" onPress={(e) => logout(e)}/>
            <Text>The current user is {token}</Text>
            <Homepagekeytask />
            <Homepagekeydates />
            <Homepagerewards />

        </ScrollView>
    );
}

export default Homepage;


const styles = StyleSheet.create({
    layout: {
            flexGrow: 3,
            marginTop: "15%",
            margin: "5%",
    },

    homepageheader: {
        color: 'white',
        fontWeight: "800",
        fontSize: 35,
        marginLeft: '5%',

    },

    homepageheaderbox: {
        justifyContent: 'center',
        backgroundColor: '#fdb913',
        padding: 15,
        paddingTop: 60,

    }

});
