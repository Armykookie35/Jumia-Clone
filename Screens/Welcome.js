import { ScrollView, StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const Welcome = ({navigation}) => {
    const [name, setName] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email,setEmail] = useState('');
  return (
    <ScrollView style={styles.page}>
    <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center', marginTop:60}}>Welcome</Text>
    <Text style={{fontSize:14,textAlign:'center', marginTop:10,color:'grey'}}>Discover your path</Text>
    <View style={{marginTop:20}}>
     <View style={styles.container}>
       <Text style={styles.text}>Name</Text>
       <TextInput
       style={styles.input}
       placeholder="Enter your name"
       onChangeText={setName}
       value={name}
       />
     </View>
     <View style={styles.container}>
       <Text style={styles.text}>Email</Text>
       <TextInput
       style={styles.input}
       placeholder="Enter your email address"
       onChangeText={setEmail}
       value={email}
       />
     </View>
     <View style={styles.container}>
       <Text style={styles.text}>Password</Text>
       <TextInput
       style={styles.input}
       placeholder="Enter your name"
       onChangeText={setPassword}
       value={password}
       />
     </View>
     <View style={styles.container}>
       <Text style={styles.text}>confirmPassword</Text>
       <TextInput
       style={styles.input}
       placeholder="confirm your password"
       onChangeText={setConfirmPassword}
       value={confirmPassword}
       />
     </View>
    </View>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
      <Text style={{fontSize:18,fontWeight:'bold',color:'white',}}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={{textAlign:'center',marginTop:15,fontSize:12}}>By clicking on Sign up you agree to our <Text style={{color:'blue'}}>Terms of service</Text> and our <Text style={{color:'blue'}}>Privacy policy</Text></Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
     <Text style={{fontSize:14}}>Already have an account?</Text>
     <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{marginTop:10}}>
       <Text style={{fontSize:18,fontWeight:'bold',color:'#E2425A',textAlign:'center',marginRight:30}}>Login</Text>
     </TouchableOpacity>
    </View>
   </ScrollView>
  )
}

export default Welcome

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingHorizontal:20
    },
    input: {
      padding:10,
      marginBottom:10,
      borderRadius:10,
      color:'black',
      fontSize:14,
      fontWeight:'bold',
      borderWidth:1,
      height:45
    },
    container: {
      paddingHorizontal:10,
     paddingVertical:10,
      borderRadius:10,
      color:'white',
      borderRadius:10,
      height:50,
      marginBottom:30
    },
    button: {
      backgroundColor:'#ef4444',
      borderRadius:20,
      marginTop:25,
      width:'90%',
      height:50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
      elevation:5,
    },
    text:{
        fontSize:12,
        fontWeight:'bold',
        color:'grey'
    },
  })