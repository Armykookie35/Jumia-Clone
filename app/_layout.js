import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Database from '../constants/Database';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import images from '../constants/Images';
import LinearGradient from 'react-native-linear-gradient';

const _layout = () => {
 const RenderHeader = () =>{
   return(
    <View style={{ flexDirection: 'row',flex:1 }}>
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
            <View style={[styles.Container, { backgroundColor: '#fff', borderColor:'pink' }]}>
              <Image
               source={item.image}
               // source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR491Iz1koxr1MoBB6_Tnllh_IBAZOxlMlfpg&s' }}
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
   )
 }

  return (
    <View style={{ flex: 1,backgroundColor:'#f8f8ff' }}>
      <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', padding: 10 }}>
        <Image source={images.insta} style={{height:32,width:120,}}/>
        <Icon name="chevron-down" size={20} color="#000" style={{marginRight:100,marginTop:8}} />
       <View style={{flexDirection:'row',justifyContent:'space-between',width:'30%'}}>
        <TouchableOpacity>
        <Icon name="plus-square" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="heart" size={25} color="#" />
        <View style={{height:7,width:7,backgroundColor:'red',position:'absolute',right:0,borderRadius:10}}/>
        </TouchableOpacity>
       
        <TouchableOpacity>
        <Icons name="chatbubble-ellipses-outline" size={25} color="#000" />
        <View style={{height:15,width:15,backgroundColor:'red',position:'absolute',right:0,top:-5,borderRadius:10,}}>
          <Text style={{color:'white',fontSize:11,textAlign:'center'}}>6</Text>
        </View>
        </TouchableOpacity>
      </View>
      </View>

      <View>
        <FlatList
          data={Database}
          ListHeaderComponent={RenderHeader}
          renderItem={({ item }) => {
            return (
              <View style={{marginTop:20}}>      
               
              <View style={styles.header}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding:10}} >
                  <View style={styles.profileContainer}>
                    <Image source={images.hand} style={styles.profileImage} />                 
                  </View>
                  <Text style={{fontSize:14,marginRight:220,marginTop:10,}}>{item.description}</Text>
                  <Icon name="more-horizontal" size={20} color="#000" />
                </View>         
                </View>
                <View>
              <Image source={item.image} style={styles.postImage} />
              </View>
              <View style={{flexDirection:'row' , justifyContent:'space-between',padding:5}}> 
              <View  style={{flexDirection:'row' , justifyContent:'space-between',}}>
              <Icon name="heart" size={30} color="#000" style={{margin:3}} />
              <Icon name="message-circle" size={30} color="#000" style={{margin:3}} />
              <Icon name="send" size={30} color="#000" style={{margin:3}} />
              </View>
              <Icon name="bookmark" size={30} color="#000"/>
              </View>
              <Text style={{marginTop:5,paddingHorizontal:5,fontWeight:'bold'}}>52 Likes</Text>
              <Text style={{fontWeight:'bold',marginTop:5,paddingHorizontal:5}}>Chrisliwvick</Text>
              <Text style={{color:'#ccc',paddingHorizontal:5}}>View all 5 comments</Text>
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
    width: 100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    
    
    
  },
  image: {
    width: 95,
    height:95,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf:'center',
  },
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
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
    textAlign:'center'
  },
  Container: {
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    height:100,
    width:100,
    margin:5,
    justifyContent:'center'
  },
  image: {
    width:92 ,
    height:92,
    borderRadius: 50,
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:-20
    
   
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:40,
    width:40,
  },
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    backgroundColor:'white'
    
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
  },

});  