
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';


const Homepagekeytask = () => {

    return (
        <View style={styles.layout}>

            <View style={styles.subtitle}>
            <Text style={styles.subtitleText}> Work on these tasks today? </Text>
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 10,

    },


    subtitleText: {
        fontSize: 16,
        color: 'black',
        borderRadius: 18,
        justifyContent: 'flex-start',
        fontWeight: "500",

    },
    // #fdb913
    // #0000c8

    subtitle: {
        height: 46,
        borderWidth: 5,
        borderColor: '#0000c8',
        borderBottomColor: '#fdb913',
        width: "100%",
        backgroundColor: 'white',
        paddingVertical: 5,
        marginLeft: '-10%',
        paddingLeft: '15%',
        borderRadius: 20,
        marginVertical: 20,

    },

    pageBox: {
        height: 200,
        width: 200, 
        backgroundColor: 'lightgray',
        borderRadius: 20,
        marginHorizontal: 10,
    }

});


