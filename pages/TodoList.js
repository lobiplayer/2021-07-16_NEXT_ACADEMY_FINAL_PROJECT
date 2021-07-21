// 1. Create layout Todos - Title & TaskItems
// 2. Create  Task component to handle styling of TaskItems
// 3. Create input field with keyboard view on mobile
// 4. Have useState to input changes 
// 5. handle taskItems by appending tasks created into array 
// 6. Map out the array created to list tasks created
// 7. Deleting a task after completion

import React, { useState } from 'react';
import Task from '../components/Task';
import TodoForm from '../components/TodoForm';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';


export default function TodoList() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.tasksWrapper}>
                    <Text style={styles.title}>Todo List</Text>
                    <View style={styles.items}>
                        {/* List of tasks created */}
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <Task key={index} text={item} index={index} taskItems={taskItems} setTaskItems={setTaskItems} />
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            <TodoForm task={task} setTask={setTask} taskItems={taskItems} setTaskItems={setTaskItems}/>
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
        marginBottom: 35,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 250,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});
