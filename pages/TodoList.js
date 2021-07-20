// 1. Create layout Todos - Title & TaskItems
// 2. Create  Task component to handle styling of TaskItems
// 3. Create input field with keyboard view on mobile
// 4. Have useState to input changes 
// 5. handle taskItems by appending tasks created into array 
// 6. Map out the array created to list tasks created
// 7. Deleting a task after completion

import React, { useState } from 'react';
import Task from '../components/Task';
import {
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    Keyboard,
    ScrollView
} from 'react-native';


export default function TodoList() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const itemsCopy = [...taskItems]

    // taking taskItems and appending it to an array //z
    const handleSubmit = () => {
        if (task.trim().length != 0) {
            Keyboard.dismiss();
            setTaskItems([...taskItems, task])
            setTask("")
            textInput.clear();
        }
    }

    // completing a task & deleting //
    const deleteTask = (index) => {
        itemsCopy.splice(index, 1)
        setTaskItems(itemsCopy);
    }


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
                                    <Task key={index} text={item} deleteTask={deleteTask} index={index} />
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>

            {/* inputing a task/write a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height "}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Write a task"}
                    onChangeText={text => setTask(text.trim())}
                    ref={input => { textInput = input }}
                />
                {/* Button */}
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

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
    writeTaskWrapper: {
        bottom: 35,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
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
