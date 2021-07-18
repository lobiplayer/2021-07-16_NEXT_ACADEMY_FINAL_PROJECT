import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text } from 'react-native';

const FlowerPrevious = ({ previousRewards }) => {


    return (

        <ScrollView horizontal >
            {previousRewards.map((reward, index) => {
                return <View style={styles.previousRewardCard}>
                    
                    <Text>{reward[0]}</Text>
                    <Image source={reward[3]} style={styles.previousRewardImage}/>
                </View>

            }).reverse()}
        </ScrollView>

    )
};

export default FlowerPrevious;


// Styles

const styles = StyleSheet.create({
    previousRewardCard: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 },

    },

    previousRewardImage: {
        width: 30,
        height: 30,
        flex: 1,
        margin: 5,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 },

    },

    // Style of the box holding the flower
    flowerBox: {
        borderWidth: 1,
        height: 300,
        width: 300,
    },

});

