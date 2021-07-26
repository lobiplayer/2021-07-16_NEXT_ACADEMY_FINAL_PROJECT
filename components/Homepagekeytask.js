
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';


const Homepagekeytask = () => {

    return (
        <View style={styles.layout}>

            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>COMPLETE SOME TASKS TODAY!</Text>
            </View>

            <ScrollView horizontal>
            <View style={styles.pageBox}>
            </View>
                <View style={styles.pageBox}>
                </View>
                <View style={styles.pageBox}>
                </View>
            </ScrollView>
        </View>

    )
};


export default Homepagekeytask;


// Styles

const styles = StyleSheet.create({

    layout: {
        flex: 1,
        height: "50%",
        width: Dimensions.get('window').width,
        marginBottom: "3%",
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },

    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        marginBottom: 10,
    },


    subtitleText: {
        fontSize: 15,
        color: 'white',
        borderRadius: 18,
        justifyContent: 'flex-start',
        fontWeight: "500",
        fontStyle: 'italic',
    },
    // #fdb913
    // #0000c8

    subtitle: {
        height: 46,
        borderWidth: 5,
        borderColor: '#0000c8',
        borderBottomColor: '#fdb913',
        width: "100%",
        backgroundColor: 'black',
        paddingVertical: 7,
        borderRadius: 20,
        marginBottom: 10,
        alignItems: 'center',
    },

    pageBox: {
        height: 120,
        width: 200,
        backgroundColor: 'lightgray',
        borderRadius: 20,
        marginHorizontal: 10,
    }

});


