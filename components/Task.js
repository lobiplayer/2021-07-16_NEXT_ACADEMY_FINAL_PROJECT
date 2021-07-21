import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props) => {
    const taskItems = props.taskItems
    const setTaskItems = props.setTaskItems
    const itemsCopy = [...taskItems]

    // completing a task & deleting //
    const deleteTask = (index) => {
        itemsCopy.splice(index, 1)
        setTaskItems(itemsCopy);
    }

    const completeTask = (i) => {
        if (itemsCopy[i].done === true) {
            itemsCopy[i].done = false;
            setTaskItems(itemsCopy);
        } else {
            itemsCopy[i].done = true;
            setTaskItems(itemsCopy);
        }
    } 

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.tickIcon} onPress={() => completeTask(props.index)}>
                    <Text>☑️</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(props.index)} >
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
    tickIcon: {
        
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

