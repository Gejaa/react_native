import React from "react";
import { useState } from "react";
import styles from "./style";
import { Text, View, TextInput, TouchableHighlight, useWindowDimensions } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginUi = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const windowWidth = useWindowDimensions().width;
    const [emailError,SetEmailError]=useState('');
    const [passwordError,SetPasswordError]=useState('');

    const onSubmit=()=>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(email.trim()==''){
            SetEmailError('Your Email-ID is required')
        }else if (reg.test(email) === false){
            SetEmailError('Kindly check your Email-ID is incorrect')
        }else if (reg.test(email) === true){
            SetEmailError('')
            if(password.trim()==''){
                SetPasswordError('Password is required')
            }else if(password.length<6){
                SetPasswordError("Your Password should be of 6 characters")
            }else if(password.trim().length>=6){
                SetPasswordError('')
                setEmail('')
                setPassword('')
                navigation.navigate('Home')
            }
        }else{
            SetEmailError('')
            SetPasswordError('')
        }
    }

    return (<View style={{flex:1}}>
        <View style={styles.container}>
            <Text style={[styles.loginFont, styles.setColorBlue]}>
                Login </Text>
            <View style={styles.sizedBox}></View>
            <Text style={[styles.signupFont,
            styles.setColorBlue]}>New To Application Sign Up Here</Text>
            <View style={styles.sizedBoxBig}></View>
            <TextInput style={[styles.textFieldStyle,{width:windowWidth >=500?300:'80%'}]}
                placeholder="E-Mail"
                keyboardType="email-address"
                cursorColor={"#2196f3"}
                value={email}
                onChangeText={newMailId => setEmail(newMailId)} ></TextInput>
                {emailError ==""?<View></View>:<Text style={styles.errorFont}>
                    {emailError}
                </Text>}
            <View style={styles.sizedBoxBig}></View>
            <TextInput style={[styles.textFieldStyle,{width:windowWidth >=500?300:'80%'}]}
                placeholder="Password"
                maxLength={6}
                value={password}
                secureTextEntry={true}
                onChangeText={newPassword => setPassword(newPassword)} ></TextInput>
            {passwordError ==""?<View></View>:<Text style={styles.errorFont}>
                    {passwordError}
                    </Text>}
            <View style={styles.sizedBoxBig}></View>
            <TouchableHighlight
                style={[styles.submit,{width:windowWidth >=500?300:'80%'}]}
                onPress={onSubmit}
                underlayColor='#fff'>
                <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableHighlight>
            </View>
        </View>
    )
}




export default LoginUi;
