import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LoginContext } from '../LoginContext';

const Task = ({ todos, setTodos }) => {

    const [token, setToken] = useContext(LoginContext)

    console.log(todos, "read this")
    let itemsCopy = [...todos]


    // completing a task & deleting //
    const deleteTask = (index) => {
        // itemsCopy.splice(index, 1)
        // setTodos(itemsCopy);

        const resp = fetch('https://whispering-wildwood-06588.herokuapp.com/delete_todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo_id: itemsCopy[index].id,
                user_id: token,
            })
        }).then(response => response.json().then(data => {

            console.log(data);
            setTodos(data.todos);

        }));

    }

    const completeTask = (i) => {

        if (itemsCopy[i].is_done === false) {

            const response = fetch('https://whispering-wildwood-06588.herokuapp.com/add_rewardslist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    points: '100',
                    user_id: token,
                    task_completed: 'Completed task ' + itemsCopy[i].todo_text + ' on ' + new Date().getDate() +
                        '/' + new Date().getMonth() + '/' + new Date().getFullYear()
                })
            })

            if (response.ok) {
                console.log('response work')
            }
            // itemsCopy[i].is_done = false;
            // setTodos(itemsCopy);
        }

        // itemsCopy[i].is_done = true;
        // setTodos(itemsCopy);

        const resp = fetch('https://whispering-wildwood-06588.herokuapp.com/update_todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo_id: itemsCopy[i].id,
                user_id: token,
            })

        }).then(response => response.json().then(data => {

            console.log(data);
            setTodos(data.todos);

        }));
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
        marginTop: 20,
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
        backgroundColor: 'lightgray',
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
        color: '#0000c8',
    },
    itemComplete: {
        textDecorationLine: 'line-through',
        color: 'gray',
    }
});

export default Task;

