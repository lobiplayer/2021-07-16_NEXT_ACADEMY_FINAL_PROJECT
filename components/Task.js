import React, {useEffect} from 'react';
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
                fetch("http://192.168.1.120:5000/add_rewardslist", {
                    method: 'POST',
                    body: JSON.stringify({
                        points: '100',
                        user_id: '2',
                        task_completed: 'Completed task on ' + Date(),
                    }),

                }).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.warn('Something went wrong.', error);
                }) 
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
                }
            }
            )}

            {itemsCopy.map((list, index) => {
                if (list.done === true) {
                    return (
                        <View key={index} style={styles.completedItem}>
                            <View style={styles.itemLeft}>
                                <TouchableOpacity style={styles.tickIcon} onPress={() => completeTask(index)}>
                                    <Text>☑️</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.itemComplete}>{list.task}</Text>
                            <TouchableOpacity onPress={() => deleteTask(index)} >
                                <Text>🗑️</Text>
                            </TouchableOpacity>
                        </View>
                    )
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
        backgroundColor: 'gray',
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
    itemComplete: {
        textDecorationLine: 'line-through',
    }
});

export default Task;

