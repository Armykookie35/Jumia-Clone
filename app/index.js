import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import images from '../constants/Images'
import database from '../constants/Database'

const Index = () => {
  const [text, setText] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }
  const [data, setData] = useState(database); 
  
  const handleDelete = () => {
    Alert.alert('Alert', 'Are You Sure', [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: () => setData([]) },
    ]);
  }
  const handleAdd =() => {
    if (text === '') {
      Alert.alert('Error', 'Please enter a description', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      const newItem = { 
        id: Math.random(), 
        description: text, 
        isChecked: false,
      };
      setData([...data, newItem]);
      setText('');
    }
  }


  return (
    <View style={styles.page}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#800080' }}>Good Morning, mercy</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name='trash-2' size={24} color={'red'} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={{ width: '60%', fontSize: 18, textDecorationLine: item.isChecked ? 'line-through' : 'none' }}>{item.description}</Text>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon name={isPasswordVisible ? 'check-square' : 'square'} size={24} style={{ marginLeft: 50 }} />
            </TouchableOpacity>
            <Icon name='trash-2' size={24} color={'red'} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center', width: 380, justifyContent: 'space-between', height: 80, alignItems: 'center', backgroundColor: 'black', paddingHorizontal: 20 }}>
        <TextInput
          style={{ height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 10, width: '85%', backgroundColor: '#f7f7f7', alignItems: 'center', paddingHorizontal: 10 }}
          placeholder="Add a new task"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Icon name='plus-square' size={30} color={'white'} onPress={handleAdd} />
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
    paddingHorizontal: 20
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
    height: 60,
    alignItems: 'center',
    flex: 1
  },
})
