import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Jumia from '../Screens/Jumia';
import Welcome from './../Screens/Welcome';
import Index from './../app/Index';
import Categories from '../Screens/Categories'
import HomeScreen from '../Screens/HomeScreen'


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
 
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
      <Stack.Screen name="Categories" component={Categories} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  
  )
}

export default StackNavigation

