import React, { useState,useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const Stats = () => {

    const [awesome, setAwesome] = useState(0);
    const [notsure, setNotSure] = useState(0);
    const [angry, setAngry] = useState(0);
    const [dreaming, setDreaming] = useState(0);
    const [sad, setSad] = useState(0);

    useEffect( ()=>{
      (async() => {
        let awesome_value = await AsyncStorage.getItem('awesome')
        setAwesome(awesome_value)
        awesome_value = await AsyncStorage.getItem('notsure')
        setNotSure(awesome_value)
        awesome_value = await AsyncStorage.getItem('angry')
        setAngry(awesome_value)
        awesome_value = await AsyncStorage.getItem('dreaming')
        setDreaming(awesome_value)
        awesome_value = await AsyncStorage.getItem('sad')
        setSad(awesome_value)
      } ) ();
   },[]);

   const reload = async () => {
    let awesome_value = await AsyncStorage.getItem('awesome')
    setAwesome(awesome_value)
    awesome_value = await AsyncStorage.getItem('notsure')
    setNotSure(awesome_value)
    awesome_value = await AsyncStorage.getItem('angry')
    setAngry(awesome_value)
    awesome_value = await AsyncStorage.getItem('dreaming')
    setDreaming(awesome_value)
    awesome_value = await AsyncStorage.getItem('sad')
    setSad(awesome_value)
   }
      
    return (
        <View style={{flex: 1}}>
        <LinearGradient colors={['#ffafbd','#ffc3a0']} style={{flex: 1}}>
          <View style={{marginTop: 100, marginHorizontal: 100, padding: 20, backgroundColor: '#00008B', marginHorizontal: 10, alignSelf: 'center', borderRadius: 30, borderColor: 'grey', borderWidth: 5}}>
          <Text style={styles.text}>Awesome : {awesome}</Text>
          <Text style={styles.text}>Not Sure : {notsure}</Text>
          <Text style={styles.text}>Angry : {angry}</Text>
          <Text style={styles.text}>Dreaming : {dreaming}</Text>
          <Text style={styles.text}>Sad : {sad}</Text>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row', alignSelf: 'center'}}>
            <Icon 
              name='refresh-outline'
              size={25}
               />
              <Text style={{marginLeft: 10, fontSize: 20}} onPress={reload}>Reload</Text>
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
