import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import Database from '../constants/Database';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import images from '../constants/Images';

const _layout = () => {
  return (
    <View style={{ flex: 1,backgroundColor:'#f8f8ff' }}>
      <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', padding: 10 }}>
        <Text style={{ fontSize: 30, marginRight: 60 }}>Instagram</Text>
        <Icon name="plus-square" size={25} color="#000" />
        <Icon name="heart" size={25} color="#000" />
        <Icons name="chatbubble-ellipses-outline" size={25} color="#000" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.imageContainer}>
          <Image source={images.Jennie} style={styles.profileImage} />
          <View style={styles.iconContainer}>
            <Icon name="plus" size={20} color="white" />
          </View>
          <Text style={styles.text}>Your Story</Text>
        </View>
        <FlatList
          data={Database}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <View style={[styles.Container, { backgroundColor: '#fff', borderColor: item.backgroundColor }]}>
                  <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR491Iz1koxr1MoBB6_Tnllh_IBAZOxlMlfpg&s' }}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.text}>{item.description}</Text>
              </View>
            );
          }}
          horizontal={true}
        />
      </View>
      <Text style={{ color: '#ccc', marginTop: -10 }}>____________________________________________________</Text>
      <View>
        <FlatList
          data={Database}
          renderItem={({ item }) => {
            return (
              <View>
              <View style={styles.header}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding:10}} >
                  <View style={styles.profileContainer}>
                    <Image source={images.hand} style={styles.profileImage} />                 
                  </View>
                  <Text style={{fontSize:18,marginRight:200,marginTop:15,fontWeight:'bold'}}>{item.description}</Text>
                  <Icon name="more-horizontal" size={20} color="#000" />
                </View>               
              </View>
              <Image source={item.image} style={styles.postImage} />
              <View style={{flexDirection:'row' , justifyContent:'space-between',padding:5}}> 
              <View  style={{flexDirection:'row' , justifyContent:'space-between',}}>
              <Icon name="heart" size={30} color="#000" style={{margin:3}} />
              <Icon name="message-circle" size={30} color="#000" style={{margin:3}} />
              <Icon name="send" size={30} color="#000" style={{margin:3}} />
              </View>
              <Icon name="bookmark" size={30} color="#000"/>
              </View>
              <Text style={{margin:8,}}>Liked by a lot of people</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  data: {
    fontSize: 15,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 50,
    elevation: 1,
    width: 90,
    height:90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    
    
    
  },
  image: {
    width: 90,
    height:90,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf:'center',
    
   
  },
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 90,
    height: 90,
    marginTop:10
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,  
    borderWidth: 3,
    borderColor: '#fff',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#007aff', 
    borderRadius: 15,
    padding: 2,
    borderWidth:2,
    borderColor:'#fff'
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign:'center'
  },
  Container: {
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    height:90,
    width:90,
    justifyContent:'center'
  },
  image: {
    width:85 ,
    height:85,
    borderRadius: 50,
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    width:50
  },
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },

});  