import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useState } from'react'
import images from '../constants/Images'

const _layout = () => {
const [name,setName] = useState('');
const [password,setPassword] = useState('');


  return (
   <SafeAreaView style={{flex:1,backgroundColor:'#000'}}>
    <Text style={{fontSize:24,color:'white',marginTop:70,marginLeft:20}}>Create Account</Text>
<Text style={{fontSize:14,color:'grey',marginTop:10,marginLeft:20}}>Lets create an account together</Text>
<View style={styles.container}>
  <Text style={{color:'white',fontSize:16}}>Full Name</Text>
  <TextInput 
  style={styles.input}
  value={name}
  onChangeText={setName}
  placeholderTextColor={'grey'}
  placeholder='Enter Name'
   />
</View>
<View style={styles.container}>
  <Text style={{color:'white',fontSize:16}}>Full Name</Text>
  <TextInput 
  style={styles.input}
  value={name}
  onChangeText={setName}
  placeholderTextColor={'grey'}
  placeholder='Enter Name'
   />
</View>
<View style={styles.container}>
  <Text style={{color:'white',fontSize:16}}>Password</Text>
  <TextInput 
  style={styles.input}
  value={password}
  onChangeText={setPassword}
  placeholderTextColor={'grey'}
  placeholder='Enter Name'
   />
</View>
    <TouchableOpacity style={styles.button}>
      <Text style={{color:'white',fontSize:16,fontWeight:'bold',textAlign:'center'}}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={{ color:'white',fontSize:18,textAlign:'center',marginTop:20}}>Or</Text>
    <TouchableOpacity style={[styles.button , {backgroundColor: 'rgba(9, 100, 89, 0.3)',flexDirection:'row',marginTop:10}]}>
      <Image source={images.google} style={{width:30,height:30, borderRadius:20,marginRight:40}}/>
      <Text style={{color:'white',fontSize:15,fontWeight:'bold',textAlign:'center'}}>Sign in with Google</Text>
    </TouchableOpacity>
    <Text style={{fontSize:12,margin:10,textAlign:'center',color:'grey'}}> Already have an Account?<Text style={{color:'white'}}>  Sign in</Text></Text>
   </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({

  container: {
    marginTop:20,
    width:'90%',
    alignSelf:'center'
  },
  input: {
    padding:10,
    backgroundColor:'#096459',
    borderRadius:10,
    backgroundColor: 'rgba(9, 100, 89, 0.3)',
    color:'white',
    marginTop:10
  },
  button:{
    backgroundColor:'#096459',
    padding:15,
    borderRadius:10,
    marginTop:40,
    width:300,
    height:50,
    alignItems: 'center',
    alignSelf:'center'
  },
})