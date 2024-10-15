import { StyleSheet, Text, Image,View, TouchableOpacity } from 'react-native'
import React from 'react'
import Shopify from '../assets/images/download.png'

const _layout = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.Shopify}> 
        <Image source={Shopify} style={{height: 83, width: '60%'}} />
      </View>
      <View style={{ marginTop:300, marginBottom:-300}}>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'white',foontSize:18}}>Log in</Text>
      </TouchableOpacity>
      <Text style={{color:'white',textAlign:'center',marginTop:10}}>New to Shopify? Sign up</Text>
      </View>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006400',
  },
  Shopify: {
    marginBottom: 10,
    width:500,
    height:10,
    // marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    width: 300,
    height: 50,
    color: '#90ee90',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
})