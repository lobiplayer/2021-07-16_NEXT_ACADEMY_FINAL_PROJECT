import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, Form, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../components/styles';

const { brand, darkLight, primary } = Colors;

const Adddeadline = () => {
    // const { control, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const [deadlineText, setDeadlinetext] = useState('');
    const [subject, setSubject] = useState('');
    const [datetime, setDatetime] = useState('');
    const [show, setShow] = useState(false);
    // default date of birth
    const [date, setDate] = useState(new Date(2000, 0, 1));

    // user date of birth selected
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

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
                        label="Date of Birth :"
                        icon="calendar"
                        placeholder="YYYY - MM - DD"
                        placeholderTextColor={darkLight}
                        onChange={handleChange('dateOfBirth')}
                        onBlur={handleBlur('dateOfBirth')}
                        value={dob ? dob.toDateString() : ''}
                        isDate={true}
                        editable={false}
                        showDatePicker={showDatePicker}
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


