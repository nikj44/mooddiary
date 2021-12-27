import React, { useState,useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';



const Stats = () => {

    const [awesome, setAwesome] = useState(null);
    const [notsure, setNotSure] = useState(null);
    const [angry, setAngry] = useState(null);
    const [dreaming, setDreaming] = useState(null);
    const [geek, setGeek] = useState(null);

    useEffect( ()=>{
      (async() => {
        const awesome_value = await AsyncStorage.getItem('awesome')
        setAwesome(awesome_value)
        
      } ) ();
   },[]);
      
    return (
        <View style={{flex: 1}}>
        <LinearGradient colors={['#ffafbd','#ffc3a0']} style={{flex: 1}}>
          <View style={{margin: 100, padding: 20, backgroundColor: '#00008B', marginHorizontal: 10, alignSelf: 'center', borderRadius: 30, borderColor: 'grey', borderWidth: 5}}>
          <Text style={styles.text}>Awesome : {awesome}</Text>
          <Text style={styles.text}>Not Sure : {notsure}</Text>
          <Text style={styles.text}>Angry : {angry}</Text>
          <Text style={styles.text}>Dreaming : {dreaming}</Text>
          <Text style={styles.text}>Geek : {geek}</Text>
          </View>
          </LinearGradient>
        </View>
    )
}

export default Stats

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 20
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: 'sans-serif-condensed',
    marginBottom: 10
},
})
