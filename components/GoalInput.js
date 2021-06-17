import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, FlatList, Modal } from 'react-native';


const GoalInput = props => { 
    const [enteredGoal, setEnteredGoal] = useState(''); 
    
    //set enteredGoal
    const goalInputHandler= (enteredText) => {
    setEnteredGoal(enteredText);
  }

  //add enterGoal and clear inputtext field
  const goalHandle =() =>{
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
};



    return(    

        <Modal visible={props.visible1 } animationType="slide" >
        <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input}  onChangeText={goalInputHandler}  value={enteredGoal}  />
                <View style={styles.container3} >
                    <View style={styles.button1}> 
                         <Button title="Cancel" color="red" onPress={props.cancelModalView} />
                     </View>
                      <View style={styles.button1}>
                             <Button title="ADD" onPress={goalHandle} />
                      </View>
                </View>
        </View>
        </Modal>


    );

    

}

const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
      },
      container3: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '60%',

          
      },
      button1: {
            width: '40%'
      }
     

});

export default GoalInput;