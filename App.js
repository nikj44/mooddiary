import React, { useEffect } from 'react'
import Main from './src/screens/Main'
import Stats from './src/screens/Stats'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const App = () => {

  useEffect(()=>{
    (async() => {
      try{
        let Awesome_VV = await AsyncStorage.getItem('awesome')
         Awesome_VV = parseInt(Awesome_VV)
         if(Number.isInteger(Awesome_VV) == false){
          await AsyncStorage.setItem('awesome','0')
         }
        Awesome_VV = await AsyncStorage.getItem('notsure')
        Awesome_VV = parseInt(Awesome_VV)
        if(Number.isInteger(Awesome_VV) == false){
          await AsyncStorage.setItem('notsure','0')
         }         
        Awesome_VV = await AsyncStorage.getItem('angry')
        Awesome_VV = parseInt(Awesome_VV)
        if(Number.isInteger(Awesome_VV) == false){
          await AsyncStorage.setItem('angry','0')
         }         
        Awesome_VV = await AsyncStorage.getItem('dreaming')
        Awesome_VV = parseInt(Awesome_VV)
        if(Number.isInteger(Awesome_VV) == false){
          await AsyncStorage.setItem('dreaming','0')
         }         
        Awesome_VV = await AsyncStorage.getItem('sad')
        Awesome_VV = parseInt(Awesome_VV)
        if(Number.isInteger(Awesome_VV) == false){
          await AsyncStorage.setItem('sad','0')
         }      
        }catch (error) {
        alert('Some EWrror has come')
        console.log('erro2',error)
      }

    //   try {
    //   const Awesome_VV = await AsyncStorage.getItem('awesome')
    //   console.log('awesome value is ',Awesome_VV)
    // } catch {
    //   await AsyncStorage.setItem('awesome','0')
    // }    try {
    //   const Not_sureVV = await AsyncStorage.getItem('notsure')
    //   console.log('not sure value is ',Not_sureVV)
    // } catch {
    //   await AsyncStorage.setItem('notsure','0')
    // }    try {
    //   await AsyncStorage.getItem('angry')
    // } catch {
    //   await AsyncStorage.setItem('angry','0')
    // }    try {
    //   await AsyncStorage.getItem('dreaming')
    // } catch {
    //   await AsyncStorage.setItem('dreaming','0')
    // }    try {
    //   await AsyncStorage.getItem('sad')
    // } catch {
    //   await AsyncStorage.setItem('sad','0')
    // }
    }) ();
  },[]);

  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#ffafbd'
      }
    }}>
      <Tab.Screen name='Main' component={Main} options={{
        tabBarIcon: () => {
          return (<Icon name="add-circle-outline" color="#00008B" size={25} />);
        },
        title: 'Home',
        headerTitleStyle: {
          color: '#00008B',
        },
        headerTransparent: 1,
        headerTitleAlign: 'center'
      }} />
      <Tab.Screen name='Stats' component={Stats}  options={{tabBarIcon: () => {
        return(<Icon name="home-outline" color="#00008B" size={25} />);},
        title: 'Stats',
        headerTitleStyle: {
          color: '#00008B',
        },
        headerTransparent: 1,
        headerTitleAlign: 'center'
      }} />
    </Tab.Navigator>
    </NavigationContainer>


  )
}

export default App
