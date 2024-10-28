import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Jumia from '../Screens/Jumia';
import Welcome from './../Screens/Welcome';
import Index from './../app/Index'


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
 
    <Stack.Navigator initialRouteName="Jumia">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
      <Stack.Screen name="Jumia" component={Jumia} options={{ headerShown: false }}/>
    </Stack.Navigator>
  
  )
}

export default StackNavigation

