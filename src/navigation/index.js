import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
     initialRouteName="Home"
     screenOptions={{ headerShown: false, }} >
    
    
      <Stack.Screen name ="Home" component={HomeScreen} />
      <Stack.Screen name ="Welcome" component={WelcomeScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}