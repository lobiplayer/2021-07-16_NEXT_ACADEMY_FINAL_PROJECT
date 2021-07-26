import React, { useState, useEffect, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import axios from 'axios'
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
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginContext } from '../LoginContext';


// colors
const { brand, darkLight, primary } = Colors;

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")
    const [currentUser, updateCurrentUser] = useState(undefined)

    const nav = useNavigation();

    // const fetchUserInfo = () => {
    //     axios.get("https://insta.nextacademy.com/api/v1/users/me", {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token")
    //         }
    //     })
    //         .then(resp => updateCurrentUser(resp.data))
    // }


    const [token, setToken] = useContext(LoginContext)

    const login = (email, password) => {

        fetch('http://192.168.1.120:5000/user_login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                email: email,
            })
        }).then(response => response.json().then(data => {
            console.log(data);
            setToken(data.user_id);
            console.log(token)
            // storeData(data.user_id)
        }))

    }



    // axios.post("https://insta.nextacademy.com/api/v1/login", email, password)
    //     .then((resp) => {
    //         changeUsername("")
    //         changePassword("")
    //         localStorage.setItem("token", resp.data.auth_token)
    //         fetchUserInfo()
    //     })


    // useEffect(() => {
    //     const token = AsyncStorage.getItem('@storage_Key')
    //     if (token) {
    //         updateCurrentUser(token)
    //     }
    // }, [])

    return (
  
            <KeyboardAvoidingWrapper>
                <StyledContainer>
                    <StatusBar style="dark" />
                    <InnerContainer>
                        <PageLogo resizeMode='cover' source={require('./../assets/Shoots.png')} />
                        <PageTitle>WorkSpace</PageTitle>
                        <SubTitle>Account Login</SubTitle>
                        <Formik
                            initialValues={{ useremail: '', password: '' }}
                            onSubmit={(values) => {
                                console.log(values);
                                changeEmail(values.useremail);
                                changePassword(values.password);
                                login(values.useremail, values.password);
                            }}
                        >
                            {({ values, handleChange, handleBlur, handleSubmit }) => (
                                <StyledFormArea>
                                    <MyTextInput

                                        label="Email Address :"
                                        icon="mail"
                                        placeholder="johnsmith@email.com"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('useremail')}
                                        onBlur={handleBlur('useremail')}
                                        value={values.useremail}
                                        keyboardType="email-address"
                                    />

                                    <MyTextInput

                                        label="Password :"
                                        icon="lock"
                                        placeholder="* * * * * * * *"
                                        placeholderTextColor={darkLight}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={hidePassword}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                    />
                                    <MsgBox>...</MsgBox>
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>Login</ButtonText>
                                    </StyledButton>
                                    <Line />
                                    <StyledButton google={true} onPress={handleSubmit}>
                                        <Fontisto name="google" color={primary} size={25} />
                                        <ButtonText google={true}>Sign in with Google</ButtonText>
                                    </StyledButton>
                                    <ExtraView>
                                        <ExtraText>Don't have an account already?</ExtraText>
                                        <TextLink>
                                            <Button title='Sign Up' onPress={() => nav.navigate('SignUp')} />
                                        </TextLink>
                                    </ExtraView>
                                </StyledFormArea>
                            )}
                        </Formik>
                    </InnerContainer>
                </StyledContainer >
            </KeyboardAvoidingWrapper>
       
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Login;





// import { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios'

// function App() {

//     const [username, changeUsername] = useState("")
//     const [password, changePassword] = useState("")
//     const [currentUser, updateCurrentUser] = useState(undefined)

//     const fetchUserInfo = () => {
//         axios.get("https://insta.nextacademy.com/api/v1/users/me", {
//             headers: {
//                 Authorization: "Bearer " + localStorage.getItem("token")
//             }
//         })
//             .then(resp => updateCurrentUser(resp.data))
//     }

//     const login = () => {
//         axios.post("https://insta.nextacademy.com/api/v1/login", { username, password })
//             .then((resp) => {
//                 changeUsername("")
//                 changePassword("")
//                 localStorage.setItem("token", resp.data.auth_token)
//                 fetchUserInfo()
//             })
//     }

//     // visit page -> does browser have token? -> no -> login -> show user info
//     //                          |-> yes -> show user info

//     useEffect(() => {
//         if (localStorage.getItem("token")) {
//             fetchUserInfo()
//         }
//     }, [])

//     const logOut = () => {
//         localStorage.removeItem("token")
//         updateCurrentUser(undefined)
//     }

//     if (currentUser) {
//         return (
//             <>
//                 <h1>{currentUser.email}</h1>
//                 <h1>{currentUser.username}</h1>
//                 <button onClick={logOut}>Log Out</button>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <input type="text" placeholder="username" value={username} onChange={(e) => { changeUsername(e.target.value) }} />
//                 <input type="text" placeholder="password" value={password} onChange={(e) => { changePassword(e.target.value) }} />
//                 <button onClick={login}>Login</button>
//             </>
//         )
//     }


// }

// export default App;