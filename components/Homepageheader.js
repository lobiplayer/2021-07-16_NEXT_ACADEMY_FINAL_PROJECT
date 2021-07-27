
import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import { LoginContext } from '../LoginContext';

const Homepageheader = () => {


    const [token, setToken] = useContext(LoginContext)
    const [username, setUsername] = useState("")

    

    fetch('http://192.168.1.120:5000/user_info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: token,
                
            })
        }).then(response => response.json().then(data => {
            console.log(data.user_info)
            setUsername(data.user_info[0]);
        }))




    return (
        <View style={styles.layout}>
            <Text style={styles.title}>WELCOME TO YOUR GARDONE,</Text>
            <Text style={styles.name}>{username}</Text>

        </View>

    )
};



export default Homepageheader;


// #fdb913
// #0000c8


// Styles

const styles = StyleSheet.create({

    layout: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        backgroundColor: '#fdb913',
        height: 100,
        width: '100%',
        borderRadius: 15,
        padding: 20,
        marginBottom: '3%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 1.5,
    },

    // Style of the box holding the reward


    
    title: {
        fontSize: 17,
        color: 'black',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',

    },

    name: {
        fontSize: 28,
        color: '#0000c8',
        fontWeight: '800',
    },
});


