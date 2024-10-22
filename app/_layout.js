import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'
import Icons  from 'react-native-vector-icons/Feather'
import images from '../constants/Images'


const _layout = () => {

  let [name,setName] = useState('');
  let [email, setemail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  
  const [isPasswordVisible,setPasswordVisible] = useState(''); 
  const [isPasswordVisible2,setPasswordVisible2] = useState(''); 

 const togglePasswordVisibility = () => {
  setPasswordVisible(!isPasswordVisible);
};
const PasswordVisibility = () => {
  setPasswordVisible2(!isPasswordVisible2);
};

  return (
    <View style={styles.container}>
      <Text style={{fontSize:25,fontWeight:"bold",marginTop:20}}>Create Account</Text>
      <Text style={{fontSize:18,marginTop:10}}>Become a new user</Text>
      <View>
      <View style={styles.Inputcontainer}>
      <Icon name="user" size={20} color="black" style={styles.icon} />
      <TextInput 
      placeholderTextColor={'black'}
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Username"
      />
    </View>
    <View style={styles.Inputcontainer}>
      <Icons name="mail" size={20} color="black" style={styles.icon} />
      <TextInput 
      placeholderTextColor={'black'}
        style={styles.input}
        value={email}
        onChangeText={setemail}
        placeholder="Enter your email address"
      />
    </View>
    <View style={styles.Inputcontainer}>
      <Icons name="lock" size={20} color="black" style={styles.icon} />
      <TextInput
      secureTextEntry={!isPasswordVisible} 
      placeholderTextColor={'black'}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Icons name={isPasswordVisible ? 'eye-off' : 'eye'} color={'black'} size={20} />
      </TouchableOpacity>
      
    </View>
    <View style={styles.Inputcontainer}>
      <Icons name="lock" size={20} color="black" style={styles.icon} />
      <TextInput
      secureTextEntry={!isPasswordVisible2} 
      placeholderTextColor={'black'}
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
      />
      <TouchableOpacity onPress={PasswordVisibility}>
        <Icons name={isPasswordVisible2 ? 'eye-off' : 'eye'} color={'black'} size={20} />
      </TouchableOpacity>
    </View>
        </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'white',fontSize:16}}>Sign Up </Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',marginTop:20,alignItems:'center',justifyContent:'center'}}>
       <View style={{width:'40%',borderWidth:1,borderColor:'black'}}></View>
       <Text style={{fontSize:14,fontWeight:'bold', margin:5}}>Or</Text>
       <View style={{width:'40%',borderWidth:1,borderColor:'black'}}></View>
      </View>  
       <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.google}>
          <Image style={{height:20,width:20,borderRadius:10}} source={ images.facebook}/>
          <Text> Facebook</Text>       
        </TouchableOpacity >
        <TouchableOpacity style={styles.google}>
          <Image style={{height:20,width:20,borderRadius:10}} source={ images.google}/>
          <Text > Google</Text>
        </TouchableOpacity>
       </View>
       <Text style={{fontSize:13,textAlign:'center',marginTop:15,fontWeight:'bold' }}>By Signing up you agree to the<Text style={{color:'blue'}}>Terms of Service </Text></Text>
       <Text style={{fontSize:13,textAlign:'center',marginTop:15,fontWeight:'bold' }}>Have an account?<Text style={{color:'blue'}}>Sign in</Text></Text>
    </View>
  )
}

export default _layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingHorizontal:30,
   paddingVertical:30
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#017eff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width:'80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    
  },
  input: {
    width: '80%',
    fontSize: 18,
    alignSelf:'center',
    fontSize:15

  },
  Inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height:50,
    marginTop: 10,
    marginBottom: 10,

  },
  icon: {
    marginRight: 10,
  },
  google: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    height:50,
    width:130,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,

  },
})