import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() { 

//to store the enteredGoal so you can display as list, create an Array list
const [courseGoals, setCourseGoals] =useState([]);
const [isAddMode, setIsAddMode] =useState(false);


// ADD entered Goal to the list
const addGoalHandler = (goal) =>
{
  /* setCourseGoals([...courseGoals, enteredGoal]); */
  //using a function to make sure that the array is getting updated
  //laltest snapshot, without key:value, you can access data using both map, flatlist
 /* setCourseGoals(courseGoals => [...courseGoals, enteredGoal]);*/
 //adding key property to the , FlatList store the key:value pairs as objects
 setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goal}]); 

 setIsAddMode(false);
  
} 

//remove item from the course goals
const removeGoalHandler = ( goalId ) => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId);
  })
} 

// to cancel the Modal
const cancelModal = () => {
  setIsAddMode(false);
}

  return (
    <View style={styles.conatainer}>

            <Button title="Add Course Goal" onPress={() => setIsAddMode(true)}  />

            <GoalInput onAddGoal={addGoalHandler} visible1={isAddMode}  cancelModalView={cancelModal} />
             
            <FlatList   
             keyExtractor={(item, index) => item.id }
              data={courseGoals} 
              renderItem={ itemData => <GoalItem value={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler}  /> }
            
            />
          
      
    </View>
  );
}

const styles = StyleSheet.create({ 
  conatainer:{
    padding: 50
  },
  button1: {
   padding: 40,
   margin: 10,
   
  },
  
});
