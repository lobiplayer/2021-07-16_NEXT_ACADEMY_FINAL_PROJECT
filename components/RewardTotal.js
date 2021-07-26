import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';

const RewardTotal = ({ totalPoints }) => {

    return (
        <View style={styles.layout}>
            <Text style={styles.totalPointsTitle}> MY TOTAL POINTS </Text>
            <Text style={styles.totalPointsBox}> {totalPoints} </Text>

        </View>

    )
};



export default RewardTotal;


    // #fdb913
    // #0000c8


// Styles

const styles = StyleSheet.create({

    layout: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        backgroundColor: '#0000c8',
        height: 120,
        width: '100%',
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },

    // Style of the box holding the reward
    

    totalPointsBox: {
        fontSize: 40,
        height: 50,
        width: 200,
        color: 'white',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',


    },

    totalPointsTitle: {
        fontSize: 18,
        height: 30,
        width: 200,
        color: '#fdb913',
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontWeight: '500',

    }
});


