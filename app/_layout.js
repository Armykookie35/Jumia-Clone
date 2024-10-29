import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../Screens/Categories'
import HomeScreen from '../Screens/HomeScreen'

const Stack = createStackNavigator();
const _layout = () => {
  return (
    <NavigationContainer independent={true} >
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default _layout

const styles = StyleSheet.create({})