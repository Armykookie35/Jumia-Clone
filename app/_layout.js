import { ScrollView, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'
import StackNavigation from '../Navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native';
import Index from '../app/Index'

const _layout = () => {

  return (
    <NavigationContainer independent={true} >
      <Index/>
  </NavigationContainer>
  )
}

export default _layout
const styles = StyleSheet.create({
 
})