import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Homepagekeytask from '../components/Homepagekeytask';
import Homepagekeydates from '../components/Homepagekeydates';
import Homepagerewards from '../components/Homepagerewards';


export default function Homepage() {
    return (
        <ScrollView contentContainerStyle={styles.layout}>
            <View style={styles.homepageheaderbox}>
            <Text style={styles.homepageheader} >Hi Philip, welcome to your workspace. </Text>
            </View>
            <Homepagekeytask />
            <Homepagekeydates />
            <Homepagerewards />

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    layout: {
        flexGrow: 3,
    },

    homepageheader: {
        color: 'white',
        fontWeight: "800",
        fontSize: 40,
        marginLeft: '5%',


    },

    homepageheaderbox: {
        justifyContent: 'center',
        backgroundColor: '#fdb913',
        padding: 15,
        paddingTop: 60,

    }

});
