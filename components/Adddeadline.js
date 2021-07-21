import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, Form } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Formik } from 'formik';


const Adddeadline = () => {
    // const { control, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    // const [deadlineText, setDeadlinetext] = useState('');
    // const [subject, setSubject] = useState('');
    // const [datetime, setDatetime] = useState('');

    return (
        <Formik
            initialValues={{ deadlineText: '', subject: '', datetime: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <InputBox
                        label = "Text"
                        placeholder="Chapter 1 paragraph"
                        onChangeText={handleChange('deadlineText')}
                        onBlur={handleBlur('deadlineText')}
                        value={values.deadlineText}
                    />
                    <InputBox
                        label = "Subject"
                        placeholder="Mathematics"
                        onChangeText={handleChange('subject')}
                        onBlur={handleBlur('subject')}
                        value={values.subject}
                    />
                    <InputBox
                        label="Due date and time"
                        placeholder = "21-07-2021 12:00"
                        onChangeText={handleChange('datetime')}
                        onBlur={handleBlur('datetime')}
                        value={values.datetime}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
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


