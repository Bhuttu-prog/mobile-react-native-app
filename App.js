import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { Text, View, Button, StyleSheet, TextInput} from 'react-native';



export default function App() {
  const [enteredText, setGoal]=useState('');
  const [SettheG, listcl]=useState([]);
  function GoalHandle(enteredT){
    setGoal(enteredT);
  };
  function addGoalHandle(){
    listcl(setlist=>[...setlist,enteredText]);
  };
  return (
    <View style={styles.textcontain}>
      <View style={styles.viewcontainer}>
        <TextInput style={styles.mytext} placeholder='My goal' onChangeText={GoalHandle}/>
        <Button title='Add' onPress={addGoalHandle}/>
      </View>
      <View style={styles.anothercont}>
        {SettheG.map((goal)=><Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );}

  const styles = StyleSheet.create({
    mytext: {
      borderWidth: 3,
      width: '90%',
      marginRight: 5,
      padding: 10,
    },
    textcontain:{
      padding: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 5,
    },
    viewcontainer:{
    justifyContent: 'space-between',
     flexDirection: 'row',
     paddingBottom: 20,
     borderBottomWidth: 2,
    
    },
    anothercont:{
      flex: 5,
    }
  
  }
  );
  
  

