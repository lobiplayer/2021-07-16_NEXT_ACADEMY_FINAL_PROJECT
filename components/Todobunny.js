
import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import { LoginContext } from '../LoginContext';

const Todobunny = () => {


    return (
        <View style={styles.layout}>
            <Image source={require('../assets/Bunny.png')} style={styles.picture} />
        </View>

    )
};



export default Todobunny;


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
        marginBottom: '3%',
        marginLeft: '-10%',
    },

    // Style of the box holding the reward

    picture: {
        height: 180,
        width: 200,
    },


});


