import React from "react";
import styles from "../style";
import { useState } from "react";
import { View,Button,TextInput } from "react-native";


const AddTask=({addTask})=>{
    
    const [text, setText] = useState('');
    const changeHandler = val => {
    setText(val)
    
    }
    
    return <View>
    <TextInput
    style={styles.input}
    placeholder="Add new task"
    onChangeText={changeHandler}
    value={text}
    />
    <Button title="add task" color='#2196f3' onPress={() =>{
        if(text.trim().length>0){
        addTask(text)
        setText('')
        }} }/>
    </View>
}

export default AddTask;
