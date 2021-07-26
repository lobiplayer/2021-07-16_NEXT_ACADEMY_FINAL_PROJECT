import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = ({ todos, setTodos }) => {
    console.log( todos, "read this")
    let itemsCopy = [...todos]


    // completing a task & deleting //
    const deleteTask = (index) => {
        itemsCopy.splice(index, 1)
        setTodos(itemsCopy);
    }

    const completeTask = (i) => {
        if (itemsCopy[i].is_done === true) {
            itemsCopy[i].is_done = false;
            setTodos(itemsCopy);
        } else {
            itemsCopy[i].is_done = true;
            setTodos(itemsCopy);
            const response = fetch('http://192.168.1.120:5000/add_rewardslist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    points: '100',
                    user_id: '3',
                    task_completed: 'Completed task ' + itemsCopy[i].todo_text + ' on ' + new Date().getDate() +
                        '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
                })
            })

            if (response.ok) {
                console.log('response work')
            }
        }
    }



    return (
        <View style={styles.items}>
            {/* List of tasks created */}
            {itemsCopy.map((list, index) => {
                if (list.is_done === false) {
                    return (
                        <View key={index} style={styles.item}>
                            <View style={styles.itemLeft}>
                                <TouchableOpacity style={styles.tickIcon} onPress={() => completeTask(index)}>
                                    <Text>☑️</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.itemText}>{list.todo_text}</Text>
                            <TouchableOpacity onPress={() => deleteTask(index)} >
                                <Text>🗑️</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            }
            )}

            {itemsCopy.map((list, index) => {
                if (list.is_done === true) {
                    return (
                        <View key={index} style={styles.completedItem}>
                            <View style={styles.itemLeft}>
                                <TouchableOpacity style={styles.tickIcon} onPress={() => completeTask(index)}>
                                    <Text>☑️</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.itemComplete}>{list.todo_text}</Text>
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

