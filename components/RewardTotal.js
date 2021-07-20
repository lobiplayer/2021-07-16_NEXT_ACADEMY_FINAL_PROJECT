import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import RewardPrevious from './RewardPrevious';

const RewardTotal = ({ totalPoints }) => {

    return (
        <View style={styles.layout}>
            <Text style={styles.totalPointsTitle}> MY TOTAL POINTS </Text>
            <Text style={styles.totalPointsBox}> {totalPoints} </Text>

        </View>

    )
};



export default RewardTotal;


// Styles

const styles = StyleSheet.create({

    layout: {
        marginBottom: "7%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },

    // Style of the box holding the reward
    

    totalPointsBox: {
        fontSize: 30,
        height: 50,
        width: 200,
        color: 'blue',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',


    },

    totalPointsTitle: {
        fontSize: 15,
        height: 30,
        width: 200,
        color: 'black',
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',


    }
});


