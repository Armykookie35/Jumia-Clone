import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import map from '../assets/images/map.jpg'
import Jennie from '../assets/images/Jennie.jpg'
import phone from '../assets/images/phone-logo.png'
import location from '../assets/images/location.png'
import time from '../assets/images/clock.png'
import React from 'react'

const _layout = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
     <Image source={map} style={{ width:'100%',height:'55%'}}/>
     <Text style={{fontWeight:'Bold', fontSize:19,marginTop:-400, textAlign:'center'}}>Track Order</Text>
     <View style={{marginTop:400, flexDirection:'row',height:60,justifyContent:'space-between',width:'90%'}}>
      <Image  source={Jennie} style={{ height:50,width:50,borderRadius:25,marginLeft:10}}/>
      <View>
        <Text style={{fontSize:18, fontWeight:'bold',marginLeft:10}}>Jennie</Text>
        <Text style={{fontSize:14, marginLeft:10,color:'#ccc'}}>2:30 PM Drive AD 4586 AUD</Text>
      </View>
      <Image source={phone} style={{ width:'10%',height:'60%', backgroundColor:'white'}}/>
     </View>
     <View style={{ flexDirection:'row',height:60,width:'90%'}}>
      <Image  source={time} style={{ height:25,width:25,borderRadius:25,marginLeft:30,marginTop:10}}/>
      <View style={{ marginLeft:20}}>
        <Text style={{fontSize:15, fontWeight:'bold',marginLeft:10}}>Garmanian Couisine</Text>
        <Text style={{fontSize:13, marginLeft:10,color:'#ccc'}}>Houesing Estate</Text>
      </View>
     </View>
     <View style={{ flexDirection:'row',height:60,width:'90%'}}>
      <Image  source={location} style={{height:25,width:25,borderRadius:25,marginLeft:30,marginTop:10}}/>
      <View  style={{ marginLeft:20}}>
        <Text style={{fontSize:15, fontWeight:'bold',marginLeft:10}}> East 58th Street,BDT</Text>
        <Text style={{fontSize:14, marginLeft:10,color:'#ccc'}}>House</Text>
      </View>
     </View>
     <TouchableOpacity style={styles.button}>
      <Text style={{color:'white', textAlign:'center', fontSize:16}}>Order Recieved</Text>
     </TouchableOpacity>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  button: {
    backgroundColor:'green',
    padding:10,
    borderRadius:15,
    marginTop:40,
    marginTop:40,
    width:'80%',
    alignSelf:'center',
    height:50
  }
})
