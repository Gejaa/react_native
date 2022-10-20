import React  from "react"
import styles from "../style"
import { TouchableOpacity,Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View } from "react-native";

const Task = ({ item ,deleteTask,completeTask}) => {
    return (
    <TouchableOpacity style={styles.item}>
    <Text style={{textDecorationLine:item.completed==true?'line-through':'underline'}}>{item.task}</Text>
    <TouchableOpacity style={{flexDirection:'row'}}>
    {(item.completed==true)?<View></View>:<TouchableOpacity> 
    <AntDesign style={styles.icons} 
    name="checkcircle" size={24} color="black" onPress={()=>{completeTask(item.id)}}/>
    </TouchableOpacity>}
    <TouchableOpacity>
        <MaterialIcons style={styles.icons} name="delete" size={24} color="black"
onPress={() => deleteTask(item.id)}
/></TouchableOpacity>
</TouchableOpacity>
     
</TouchableOpacity>
    )
    }
export default Task;    
