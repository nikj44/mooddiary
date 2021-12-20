import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stats = () => {

    const getData = async () => {
        try {
          const awesome_value = await AsyncStorage.getItem('awesome')
          if(awesome_value !== null) {
            // value previously stored
            console.log('Awesome Value is',awesome_value)
          }
        } catch(e) {
          // error reading value
        }
      }
      
    return (
        <View style={{flex: 1}}>
            <Text color='black'>Stats Page</Text>
            <Button title='Hello' style={styles.button}></Button>
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
