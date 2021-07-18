import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text } from 'react-native';
import RewardLoad from '../components/RewardLoad';


const Rewards = () => {

    return (
        <ScrollView contentContainerStyle={styles.layout}>
            <RewardLoad />
        </ScrollView>

    )
}

export default Rewards;


// Styles

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    // Style of the box holding the flower
    previousFlowers: {
        borderWidth: 1,
        height: 50,
        marginTop: 70,
    },
});
