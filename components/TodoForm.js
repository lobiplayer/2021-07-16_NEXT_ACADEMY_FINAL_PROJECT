import React, { useState } from 'react';
import {
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    Keyboard,
} from 'react-native';


const TodoForm = ({ task, setTask, taskItems, setTaskItems }) => {
    // taking taskItems and appending it to an array //
    const handleSubmit = () => {
        if (task.trim().length != 0) {
            Keyboard.dismiss();
            setTaskItems([...taskItems, task])
            setTask("")
            textInput.clear();
        }
    }

    return (
        <View>
            {/* inputing a task/write a task */}
            < KeyboardAvoidingView
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
            </KeyboardAvoidingView >
        </View>
    )
}

const styles = StyleSheet.create({
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

export default TodoForm;