
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';


const Homepagekeydates = () => {

    return (
        <View style={styles.layout}>

            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}> These dates are coming up! </Text>
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


export default Homepagekeydates;


// Styles

const styles = StyleSheet.create({

    layout: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 10,
    },


    subtitleText: {
        fontSize: 20,
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
        height: 170,
        width: 170,
        backgroundColor: '#fdb913',
        borderRadius: 100,
        marginHorizontal: 10,
    }

});


