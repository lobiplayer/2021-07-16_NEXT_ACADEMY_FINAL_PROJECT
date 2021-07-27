// 1. Create layout Todos - Title & TaskItems
// 2. Create  Task component to handle styling of TaskItems
// 3. Create input field with keyboard view on mobile
// 4. Have useState to input changes 
// 5. handle taskItems by appending tasks created into array 
// 6. Map out the array created to list tasks created
// 7. Deleting a task after completion

import React, { useState, useEffect, useContext } from 'react';
import Task from '../components/Task';
import TodoForm from '../components/TodoForm';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LoginContext } from '../LoginContext';
import Todobunny from '../components/Todobunny';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [token, setToken] = useContext(LoginContext)


    useEffect(() => {
        fetch("http://192.168.0.160:5000/todos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: token,

            })
        }).then(response => response.json().then(data => {

            console.log(data);
            setTodos(data.todos);

        }));
    }, []);

    // useEffect(() => {
    //     fetch("http://192.168.0.160:5000/todos").then(response => response.json().then(data => {

    //         setTodos(data.todos);
    //     }));
    // }, []);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.tasksWrapper}>
                    <Text style={styles.title}>TODO LIST</Text>
                    <Task todos={todos} setTodos={setTodos} />
                </View>
            </ScrollView>
            <Todobunny />
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
