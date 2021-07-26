
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';

const Homepageheader = () => {

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>WELCOME TO YOUR WORKSPACE,</Text>
            <Text style={styles.name}>PHILIP </Text>

        </View>

    )
};



export default Homepageheader;


// #fdb913
// #0000c8


// Styles

const styles = StyleSheet.create({

    layout: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        backgroundColor: '#fdb913',
        height: 100,
        width: '100%',
        borderRadius: 15,
        padding: 20,
    },

    // Style of the box holding the reward


    
    title: {
        fontSize: 20,
        color: 'black',
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontWeight: '500',

    },

    name: {
        fontSize: 30,
        color: '#0000c8',
        fontWeight: '800',
    },
});


