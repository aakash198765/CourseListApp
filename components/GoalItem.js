import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function GoalItem ( props ) {
  return (
       <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)}  >
       <Text style={styles.list1}> {props.value} </Text>
       </TouchableOpacity>
  );
};

const styles=StyleSheet.create({
    list1: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
     

});

