
import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import { LoginContext } from '../LoginContext';

const Homepagecircle = () => {


    return (
        <View style={styles.layout}>
            <Image source={require('../assets/Monster.png')} style={styles.picture} />
        </View>

    )
};



export default Homepagecircle;


// #fdb913
// #0000c8


// Styles

const styles = StyleSheet.create({

    layout: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 200,
        width: 200,
        borderRadius: 100,
        padding: 20,
        marginBottom: '-10%',
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

    picture: {
        height: 200,
        width: 200,
    },

    
});


