import React from 'react'
import {  View,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import { useState } from 'react';
import { FlatList } from 'react-native';
import Task from './home_components/task';
import AddTask from './home_components/addTask';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const HomeScreen = ({navigation}) => {

    const addTask = text => {
        setTasks(prevTodos => {
        return [{ task: text, id: uuidv4(),completed:false}, ...prevTodos]
        })
        }

        const deleteTask = id => {
            setTasks(prevTasks => {
            return prevTasks.filter(task => task.id != id)
            })
            }
        
            const completeTask = id => {
            
                setTasks(prevTasks => {
                    const item =prevTasks.find(task=>task.id==id)
                    item.completed=true
                    return [item,... prevTasks.filter(task => task.id != id)]
                    })
                }

    const [tasks, setTasks] = useState([
        { task: "HTML I", id: "1" ,completed:false},
        { task: "CSS", id: "2" ,completed:false},
        { task: "Responsive design", id: "3" ,completed:false},
        ])
        
    return (
        <TouchableWithoutFeedback style={{flex:1}} onPress={() => Keyboard.dismiss()}>

    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <View style={styles.content}>
        <AddTask addTask={addTask}/>
    <View style={styles.list}>
<FlatList
data={tasks}
renderItem={({ item }) => (
<Task item={item} deleteTask={deleteTask} completeTask={completeTask}></Task>
)}
/>
</View>
    </View>
    </View>
    </TouchableWithoutFeedback>
    );
}


export default HomeScreen;
