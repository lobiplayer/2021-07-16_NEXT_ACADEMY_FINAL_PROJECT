// 1. Create layout Todos - Title & TaskItems
// 2. Create  Task component to handle styling of TaskItems
// 3. Create input field with keyboard view on mobile
// 4. Have useState to input changes 
// 5. handle taskItems by appending tasks created into array 
// 6. Map out the array created to list tasks created
// 7. Deleting a task after completion

import React, { useState, useEffect } from 'react';
import Task from '../components/Task';
import TodoForm from '../components/TodoForm';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function TodoList() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        fetch("/todos").then(response => response.json().then(data => {

            setTodos(data.todos);
        }));
    }, []);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.tasksWrapper}>
                    <Text style={styles.title}>TODO LIST</Text>
                    <Task todos={todos} setTodos={setTodos} />
                </View>
            </ScrollView>
            <TodoForm todos={todos} setTodos={setTodos} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },

    tasksWrapper: {
        marginTop: '15%',
        paddingHorizontal: 20,
    },
    title: {
       
            height: 30,
            width: '100%',
            paddingHorizontal: 20,
            fontSize: 25,
            fontWeight: '500',
            justifyContent: 'center',
            textAlign: 'center',
    
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
