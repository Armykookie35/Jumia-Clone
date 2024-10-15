import { StyleSheet,Image, Text, View } from 'react-native'
import furniture from '../assets/images/Furniture.png'
import React from 'react'

const _layout = () => {
  return (
    <View style={{flex:1,backgroundColor:'green',alignContent:'center',justifyContent:'center'}}>
      <Image source={furniture} style={{alignSelf:'center', height:100,width:100}}/>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({})