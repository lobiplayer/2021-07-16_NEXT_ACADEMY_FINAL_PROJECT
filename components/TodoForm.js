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


const TodoForm = ({ todos, setTodos }) => {
    // taking taskItems and appending it to an array //
    const [taskItems, setTaskItems] = useState('');

    const handleSubmit = () => {
        async () => {
            console.log(taskItems , "task items")
            const response = await fetch('//192.168.0.160:5000/add_todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: { "todo_text": taskItems}
            })

            if (response.ok) {
                console.log('response work')
            }
        }
        if (taskItems.trim().length != 0) {
            Keyboard.dismiss();
            setTodos([...todos, { todo_text: taskItems, is_done: false }]);
            setTaskItems("")
            textInput.clear();
        }
    }



    // const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0

    // return (
    //     <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>

    return (

        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === "ios" ? "10" : "0"} style={styles.writeTaskWrapper} >

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={"Write a task"}
                    onChangeText={text => setTaskItems(text.trim())}
                    ref={input => { textInput = input }}
                />
                {/* Button */}
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >

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
    addText: {
        fontSize: 25,
        color: '#0000c8',
    },

    container: {
        flexDirection: 'row',
    }

    // #fdb913
    // #0000c8

});

export default TodoForm;