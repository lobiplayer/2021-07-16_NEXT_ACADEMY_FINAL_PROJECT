import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Dimensions } from 'react-native';

const FlowerPrevious = ({ previousRewards }) => {


    return (
        <View style={styles.layout}>

            <View >
                <Text style={styles.title}>HISTORY OF REWARDS</Text>
            </View>

            <ScrollView horizontal >
                {previousRewards.map((reward, index) => {
                    return <View style={styles.previousRewardCard}>

                        <Text>+100 points</Text>
                        <Image source={reward[3]} style={styles.previousRewardImage} />
                        <Text>Completed 30 mins of Pomodoro Timer</Text>
                    </View>

                }).reverse()}
            </ScrollView>
        </View>

    )
};

export default FlowerPrevious;


    // #fdb913
    // #0000c8
// Styles

const styles = StyleSheet.create({

    layout: {
        flex: 1,
        height: "50%",
        width: Dimensions.get('window').width,
        marginBottom: "15%",
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 20,
    },

    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },

    previousRewardCard: {
        width: 150,
        height: 200,
        backgroundColor: '#fdb913',
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,

    },

    previousRewardImage: {
        width: 100,
        height: 100,
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

