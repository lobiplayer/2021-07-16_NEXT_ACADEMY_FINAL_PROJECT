import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Adddeadline from '../components/Adddeadline'
import ModalAdddeadline from '../components/ModalAdddeadline'

export default function Calendar() {
    return (
        <View style={styles.container}>
            <CalendarStrip
                scrollable
                style={{ height: 200, paddingTop: 20, paddingBottom: 10 }}
                calendarColor={'#3343CE'}
                calendarHeaderStyle={{ color: 'white' }}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                iconContainer={{ flex: 0.1 }}
            />

            <ModalAdddeadline />


        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 }
});
