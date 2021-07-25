import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Homepagekeytask from '../components/Homepagekeytask';
import Homepagekeydates from '../components/Homepagekeydates';
import Homepagerewards from '../components/Homepagerewards';
import Homepageheader from '../components/Homepageheader';

export default function Homepage() {
    return (
        <ScrollView contentContainerStyle={styles.layout}>
            <Homepageheader />
            <Homepagekeytask />
            <Homepagekeydates />
            <Homepagerewards />

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    layout: {
            flexGrow: 3,
            marginTop: "15%",
            margin: "5%",
    },

    homepageheader: {
        color: 'white',
        fontWeight: "800",
        fontSize: 35,
        marginLeft: '5%',

    },

    homepageheaderbox: {
        justifyContent: 'center',
        backgroundColor: '#fdb913',
        padding: 15,
        paddingTop: 60,

    }

});
