import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, Form } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Formik } from 'formik';


const Adddeadline = () => {
    // const { control, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const [deadlineText, setDeadlinetext] = useState('');
    const [subject, setSubject] = useState('');
    const [datetime, setDatetime] = useState('');

    // const sendData = (values) => {
    //     const response = await fetch('/add_deadline', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: values
    //     })

    //     if (response.ok) {
    //         console.log('response work')
    //     }
    // }

    return (
        <Formik
            initialValues={{ deadlineText: '', subject: '', datetime: '' }}
            onSubmit={values => sendData(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <InputBox
                        label = "Text"
                        placeholder="Chapter 1 paragraph"
                        onChangeText={handleChange('deadlineText')}
                        onBlur={handleBlur('deadlineText')}
                        value={values.deadlineText}
                        onChange={e => setDeadlinetext(e.target.value)}
                    />
                    <InputBox
                        label = "Subject"
                        placeholder="Mathematics"
                        onChangeText={handleChange('subject')}
                        onBlur={handleBlur('subject')}
                        value={values.subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <InputBox
                        label="Due date and time"
                        placeholder = "21-07-2021 12:00"
                        onChangeText={handleChange('datetime')}
                        onBlur={handleBlur('datetime')}
                        value={values.datetime}
                        onChange={e => setDatetime(e.target.value)}
                    />
                    <Button title="Submit" color='#0000c8' onPress = { async () => {
                        console.log(values)
                        const response = await fetch('//192.168.0.152:5000/add_deadline', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: values
                    })

                        if (response.ok) {
                            console.log('response work')}
                        }} />
                </View>
            )}
        </Formik>



    );
};


export const InputBox = (props) => {

    return (
        <View>
            <Text style={{ 
                paddingVertical: 10, 
                paddingHorizontal: 0, 
                fontSize: 18 }}>
                {props.label}
            </Text >
            <TextInput
                style={{ 
                    padding: 8, 
                    backgroundColor: '#f5f5f5',
                    width: '100%', 
                }}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    )
}


export default Adddeadline;


