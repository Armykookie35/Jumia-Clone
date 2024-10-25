import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,ScrollView } from 'react-native';
import images from '../constants/Images'
import Icons  from 'react-native-vector-icons/Feather'

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible,setPasswordVisible] = useState(''); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <ScrollView style={styles.page}>
        <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center', marginTop:60,color:'#65799B'}}>Welcome back</Text>
        <Text style={{fontSize:14,textAlign:'center', marginTop:10,color:'grey',color:'#65799B',marginBottom:20}}>Continue your path</Text>
       
        <Text style={styles.text}>Email</Text>
        <View style={styles.containerb}>
       <TextInput
       style={styles.input}
       placeholder="enter your email"
       onChangeText={setEmail}
       value={email}
       />
     </View>
     <Text style={styles.text}>Password</Text>
     <View style={styles.containerb}>
       <TextInput
       style={styles.input}
       placeholder="confirm your password"
       onChangeText={setPassword}
       value={password}
       secureTextEntry={!isPasswordVisible}
       />
       <TouchableOpacity onPress={togglePasswordVisibility}>
        <Icons name={isPasswordVisible ? 'eye-off' : 'eye'} color={'black'} size={20}  />
      </TouchableOpacity>
     </View>
       <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.rememberMe}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Image style={styles.socialIcon} source={images.facebook}/>
        <Text style={styles.socialText}>Login With Facebook</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.socialButton}>
        <Image style={styles.socialIcon} source={images.google}/>
        <Text style={styles.socialText}>Login With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image style={styles.socialIcon} source={images.applelogo}/>
        <Text style={styles.socialText}>Login With Apple</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t Have An Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 20,
        paddingHorizontal:20
      },
      text:{
        fontSize:12,
        fontWeight:'bold',
        color:'white'
    },
         containerb:{
        color:'white',
        borderRadius:10,
        height:50,
        marginBottom:30,
        backgroundColor:'white',
        flex:1,
        flexDirection:'row',
        alignItems:'center'
      },
      container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      subTitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor:'#fff',
        width:'85%'
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15,
      },
      rememberMe: {
        color: '#6B7280',
      },
      forgotPassword: {
        color: '#1D4ED8',
      },
      loginButton: {
        backgroundColor: '#EF4444',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 20,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      orText: {
        textAlign: 'center',
        color: '#6B7280',
        marginBottom: 20,
      },
      socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor:'#65799B'
      },
      socialIcon: {
        width: 22,
        height: 22,
        marginRight: 10,
        borderRadius: 15,
      },
      socialText: {
        fontSize: 16,
        color:'white'
      },
      signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      signUpText: {
        fontSize: 14,
        color: '#6B7280',
      },
      signUpLink: {
        fontSize: 18,
        color: '#EF4444',
        fontWeight: 'bold',
        marginRight: 20,
      },
})