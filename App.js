import React from 'react'
import { View, Text, TabBarIOSItem } from 'react-native'
import Main from './src/screens/Main'
import Stats from './src/screens/Stats'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
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
        // headerTransparent: 1,
        headerTitleAlign: 'center'
      }} />
    </Tab.Navigator>
    </NavigationContainer>


  )
}

export default App
