import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

        <View style={styles.tasksWrapper}>
            <Text style={styles.title}>Todo List</Text>
            <View style={styles.items}>
                {/* List of tasks created */}
                <Task text={'Task one '}/> 
                <Task text={'Task two '}/>
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#E8EAED',
},

tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
},
items: {
  marginTop: 30, 
},
});
