import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = ({ todos, setTodos }) => {
    const itemsCopy = [...todos]

    // completing a task & deleting //
    const deleteTask = (index) => {
        itemsCopy.splice(index, 1)
        setTodos(itemsCopy);
    }

    const completeTask = (i) => {
        if (itemsCopy[i].done === true) {
            itemsCopy[i].done = false;
            setTodos(itemsCopy);
        } else {
            itemsCopy[i].done = true;
            setTodos(itemsCopy);
        }
    }

    return (
        <View style={styles.items}>
            {/* List of tasks created */}
            {itemsCopy.map((list, index) => {
                if (list.done === false) {
                    return (
                        <View key={index} style={styles.item}>
                            <View style={styles.itemLeft}>
                                <TouchableOpacity style={styles.tickIcon} onPress={() => completeTask(index)}>
                                    <Text>☑️</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.itemText}>{list.task}</Text>
                            <TouchableOpacity onPress={() => deleteTask(index)} >
                                <Text>🗑️</Text>
                            </TouchableOpacity>
                        </View>
                    )

                } else {
                }
            }
            )}

            {itemsCopy.map((list, index) => {
                if (list.done === true) {
                    return (
                        <View key={index} style={styles.item}>
                            <View style={styles.itemLeft}>
                                <TouchableOpacity style={styles.tickIcon} onPress={() => completeTask(index)}>
                                    <Text>☑️</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.itemText}>{list.task}</Text>
                            <TouchableOpacity onPress={() => deleteTask(index)} >
                                <Text>🗑️</Text>
                            </TouchableOpacity>
                        </View>
                    )
                } else {
                }
            }
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    items: {
        marginTop: 30,
        marginBottom: 35,
    },
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

