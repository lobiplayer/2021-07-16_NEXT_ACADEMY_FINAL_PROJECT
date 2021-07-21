import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props) => {


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={() => completeTask()}>
                    <Text>☑️</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
            <TouchableOpacity onPress={() => props.deleteTask(props.index)} >
                <Text>🗑️</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    completedItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '80%',
    },
});

export default Task;

