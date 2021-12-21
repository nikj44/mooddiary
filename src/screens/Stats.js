import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stats = () => {

    const [awesome, setAwesome] = useState(null);
    const [notsure, setNotSure] = useState(null);
    const [angry, setAngry] = useState(null);
    const [dreaming, setDreaming] = useState(null);
    const [geek, setGeek] = useState(null);


    const getData = async () => {
        try {
          const awesome_value = await AsyncStorage.getItem('awesome')
          if(awesome_value !== null) {
            // value previously stored
            console.log('Awesome Value is',awesome_value)
          }
        } catch(e) {
          // error reading value
          alert('THere is no data')
        }
      }
      
    return (
        <View style={{flex: 1}}>
        </View>
    )
}

export default Stats

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 20
  }
})
