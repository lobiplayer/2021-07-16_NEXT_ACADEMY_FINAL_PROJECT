
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import { LoginContext } from '../LoginContext';

const Homepagekeytask = () => {

    const [latestTodo, setLatesttodo] = useState([])
    const [token, setToken] = useContext(LoginContext)


    useEffect(() => {
        fetch("http://192.168.1.120:5000/todolist_homepage", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: token,

            })
        }).then(response => response.json().then(data => {

            console.log(data);
            setLatesttodo(data.todolist_homepage);

        }));
    }, []);


    return (
        <View style={styles.layout}>

            <View style={styles.subtitle}>
                <Text style={styles.subtitleText}>COMPLETE SOME TASKS TODAY!</Text>
            </View>

            <ScrollView horizontal>

                {latestTodo.map((todo, index) => {
                    return <View style={styles.pageBox}>
                        <Text style={styles.boxText}>{todo.todo_text.toUpperCase()}</Text>
                        <Text style={styles.boxDate}>Targeted completion date: {todo.deadline_id}</Text>
                    </View>
                })}
            </ScrollView>
        </View>

    )
};


export default Homepagekeytask;


// Styles

const styles = StyleSheet.create({

    layout: {
        flex: 1,
        height: "50%",
        width: Dimensions.get('window').width,
        marginBottom: "3%",
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },

    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        marginBottom: 10,
    },


    subtitleText: {
        fontSize: 14,
        color: 'white',
        borderRadius: 18,
        justifyContent: 'flex-start',
        fontWeight: "500",
        fontStyle: 'italic',
    },
    // #fdb913
    // #0000c8

    subtitle: {
        height: 46,
        borderWidth: 5,
        borderColor: '#0000c8',
        borderBottomColor: '#fdb913',
        width: "100%",
        backgroundColor: 'black',
        paddingVertical: 7,
        borderRadius: 20,
        marginBottom: 10,
        alignItems: 'center',
    },

    pageBox: {
        height: 100,
        width: 150,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
        justifyContent: 'center',
    },

    boxText: {
        color: '#0000c8',
        fontWeight: '500',
        fontSize: 14,
    },

    boxDate: {
        color: 'gray',
        fontStyle: 'italic',
        fontSize: 12,
    },

});


