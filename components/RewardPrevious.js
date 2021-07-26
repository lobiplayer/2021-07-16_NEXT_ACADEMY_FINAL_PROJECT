import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Dimensions } from 'react-native';

const FlowerPrevious = ({ previouslist, rewardOutput }) => {

    console.log(previouslist)



    return (
        <View style={styles.layout}>

            <View>
                <Text style={styles.title}>HISTORY OF REWARDS</Text>
            </View>

            <ScrollView horizontal >
                {previouslist.map((reward, index) => {
                    return <View style={styles.previousRewardCard}>
                        <Text>+ {reward[0].points} points</Text>
                        <Image source={rewardOutput(reward[0].state)[0]} style={styles.previousRewardImage} />
                        <Text>{reward[0].task_completed}</Text>
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
        
        overflow: 'scroll',
        backgroundColor: '#fdb913',
        margin: 16,
        alignItems: 'center',
        textAlignVertical: 'top',
        padding: 10,
        paddingVertical: 15,
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

