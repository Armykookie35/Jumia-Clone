import { View, Text, FlatList, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Adds from '../constants/Flatlists/Adds'; 
import Gadgets from '../constants/Flatlists/Gadgets';
import Tag from '../assets/images/tag.png'
import feed from '../assets/images/feed.png'
import menu from '../assets/images/menu.png'
import help from '../assets/images/help.png'

const HomeScreen =({ navigation })  => {
  // const { width } = Dimensions.get('window'); 
  const { width } = Dimensions.get('window'); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const flatListRef = useRef(null);

  useEffect(() => {
      const loadTimeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(loadTimeout);
  }, []);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % Adds.length);
      }, 3000);
      return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      if (!loading && flatListRef.current) {
          flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
      }
  }, [currentIndex, loading]);

  return (
    <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
    <ScrollView >
        <View>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Icon name='search' size={20} color={'black'} />
                    <TextInput
                        placeholder='Search on Jumia'
                        style={styles.searchInput}
                    />
                </View>
                <Icons name='shopping-cart' size={20} color={'white'} />
            </View>
            <View style={styles.callToOrder}>
                <Text style={styles.callText}>CALL TO ORDER: 07042295235</Text>
            </View>
        </View>
        <View style={{marginTop:10}}>
           <FlatList
            ref={flatListRef}
            data={Adds}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.slide}>
                    <Image source={item.image} style={styles.image} />
                </View>
            )}
           />
        </View>
        <View>
          <FlatList
          data={Gadgets}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
              <View style={{padding:10,marginTop:10,backgroundColor:'white',}}>
                  <Image source={item.image} style={{height:90,width:90,borderRadius:10}}  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={{fontSize:12}}>N{item.price}</Text>
              </View>
          )}
          
         />
        </View>
        <View style={{backgroundColor:'red',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,alignItems:'center',height:60}}>
          <Image source={Tag} style={{width:30,height:30}}/>
          <View style={{marginRight:30}}>
          <Text style={{color:'white'}}>Flash Sale</Text>
          <Text style={{color:'white'}}>TIME LEFT: 01h: 15m :28s</Text>
          </View>
          <Text style={{color:'white'}}>SEE ALL</Text>
        </View>
        <View style={styles.box}>
        <View style={{marginTop:10}}>
            <FlatList
             data={Gadgets}
             keyExtractor={(item) => item.id.toString()}
             numColumns={4}
             renderItem={({ item }) => (
                 <View style={styles.productContainer}>
                     <Image source={item.image} style={styles.productImage} />
                     <Text style={styles.title}>{item.title}</Text>
                     <Text style={{fontSize:12}}>N{item.price}</Text>
                 </View>
             )}
             
            />
        </View>
        
        </View>
    </ScrollView>
    <View style={{flexDirection:'row',justifyContent:'space-between',height:70,padding:20}}>
            <TouchableOpacity style={{alignItems:'center'}}>
               <Icon name='home' size={26} color={'#ffa500'}/>
               <Text style={{color:'#ffa500'}}>Home</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Categories')}>
            <Image style={ styles.feed} source={menu}/>
            <Text>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
            <Image style={{height:34,width:34,marginTop:-5}} source={feed}/>
            <Text style={{marginTop:-5}}>Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
            <Icons name='user' size={26}/>
            <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
            <Image style={ styles.feed} source={help}/>
            <Text>Help</Text>
            </TouchableOpacity>
         </View>
    </View>
);
};

export default HomeScreen
const styles = StyleSheet.create({
  loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  header: {
      flexDirection: 'row',
      backgroundColor: '#000',
      height: 70,
      width: '100%',
      alignItems: 'center',
      paddingTop: 20,
      justifyContent: 'space-between',
      paddingHorizontal: 15,
  },
  searchContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      width: '90%',
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: 'center',
  },
  searchInput: {
      flex: 1,
      marginLeft: 10,
      color: 'black', 
      fontSize: 15,
      height: 35,
  },
  callToOrder: {
      backgroundColor: '#add8e6',
      height: 50,
      paddingTop: 10,
  },
  callText: {
      color: 'Black',
      fontSize: 16,
      textAlign: 'center',
  },
  slide: {
      width:320,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
  },
  image: {
      width: '98%', 
      height: 200,
      borderRadius: 10,
  },
  title: {
      marginTop: 10,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  productContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      justifyContent:'space-evenly',
      width:'25%',
  },
  productImage: {
      width: '100%',
      height: 70,
      borderRadius: 5,
  },
  productPrice: {
      marginTop: 10,
      fontSize: 10,
      fontWeight: 'bold',
      color: '#f4a460',
      textAlign: 'center',
  },
  box:{
    backgroundColor:'white',
    padding:20,
    marginBottom:20,

  },
  feed:{
    width:23,
    height:23,
   
  },
});