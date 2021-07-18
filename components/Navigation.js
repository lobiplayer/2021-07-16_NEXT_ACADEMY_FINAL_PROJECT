import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '../pages/Calendar'
import Pomodoro from '../pages/Pomodoro'
import Homepage from '../pages/Homepage'
import TodoList from '../pages/TodoList'
import Rewards from '../pages/Rewards'

const Bottom = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name="Home" component={Homepage} />
            <Bottom.Screen name="Pomodoro" component={Pomodoro} />
            <Bottom.Screen name="Calendar" component={Calendar} />
            <Bottom.Screen name="ToDos" component={TodoList} />
            <Bottom.Screen name="Rewards" component={Rewards} />
        </Bottom.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
