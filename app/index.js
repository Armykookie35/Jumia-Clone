import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import database from '../constants/Database'
import Icon  from 'react-native-vector-icons/Feather'
import { useState } from 'react'


const Index = () => {
  const [text, setText] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (
    <View style={styles.page}>
         <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center', marginTop:30,color:'#800080'}}>Good Morning, mercy</Text>
         <FlatList
         data={database}
         renderItem={({item}) =>{
          return(
          <View style={styles.box}> 
            <Text style={{width:'60%',fontSize:18}}>{item.description}</Text>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon name={isPasswordVisible ? 'check-square' : 'square'}  size={24} style={{marginLeft:50}}/>
              </TouchableOpacity>
            <Icon name='trash-2' size={24} color={'red'}/>
          </View>
        )       
        }}
      />
      <View style={{flexDirection:'row',alignSelf:'center',width:380,justifyContent:'space-between',height:80,alignItems:'center',backgroundColor:'black',paddingHorizontal:20}}>
        <TextInput
        style={{height: 40, borderColor: 'white', borderWidth: 1, borderRadius:10,width:'85%',backgroundColor:'#f7f7f7',alignItems:'center',paddingHorizontal:10}}
        placeholder="Add a new task"
        onChangeText={(text) => setText(text)}
        value={text}
        />
        <Icon name='plus-square' size={30} color={'white'}/>
       </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal:20
  },
  box:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    marginTop:15,
    borderWidth:1,
    borderColor:'#ddd',
    width:'100%',
    borderRadius:10,
    backgroundColor:'#f7f7f7',
    height:60,
    alignItems:'center',
    flex:1
  },
})