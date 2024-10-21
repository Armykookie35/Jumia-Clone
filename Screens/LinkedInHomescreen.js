import { StyleSheet, Text, View,ScrollView,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../constants/Images'
import { SearchBar } from 'react-native-elements';
import Icon from'react-native-vector-icons/Entypo';
import Icons from'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Database from './../constants/Database';

const _layout = () => {
  const Header =() => {
    return(
      <View>
         <View style={{flexDirection:'row',padding:10,justifyContent:'space-between',borderBottomWidth:5,borderBottomColor:'#ccc'}}>
        <Image source={images.Jennie} style={{ height:40,width:40,borderRadius:20}}/>
        <SearchBar
        placeholder="Search..."     
        leftIcon={<Icon name="search" size={24} color="black" />} 
        inputContainerStyle={styles.searchbar}
        containerStyle={styles.container}
      />
      <TouchableOpacity>
      <Icon name="squared-plus" size={25} color="grey" style={{marginTop:5}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Icons name="chatbubble-ellipses-sharp" size={25} color="grey" style={{marginTop:5}}/>
      </TouchableOpacity>
      </View>
      </View>

    )
  }
  return (
    <View style={{flex:1,marginTop:20}}>
     
      <FlatList
        data={Database}
        ListHeaderComponent={Header}
        renderItem={({ item }) => {
         return(
          <View>
          <View style={{flexDirection:'row',marginTop:10,paddingHorizontal:10}}>
           <Image source={images.apple} style={styles.profilepic}/>
           <View style={{marginLeft:10}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Dr Stephen Akintayo</Text>
            <Text style={{fontSize:11,}}> Forbes of Africa Leading...</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'grey'}}>41m</Text>
            <Icon name='globe' color={"grey"}style={{margin:3}} />
            </View>
           </View>
           <TouchableOpacity style={{marginLeft:90,flexDirection:'row'}}>
           <Icon name="dots-three-vertical"size={17} style={{marginLeft:10,marginRight:10}}/>
           <Icon name="cross" size={25} style={{marginTop:-5}}/>
           </TouchableOpacity>
          </View> 
          <Text numberOfLines={3} style={{paddingHorizontal:10,marginBottom:15}}>I return all glory to God for the success of this tenure, thanks to everyone that supported me to make this tenure a successful one, Chaplain, Rev’d David Olawuyi, My Disciler, Mr. Chima Ukejianya, the central executives council, the general executives and the workers and to my mothers, brothersa nd sister, God bless you all in Jesus name.
    We are inducted to service on March 7, 2021,  with the THEME: THE OCCUPANTS, Pastor professor Leye Falohun, 33 executives were inducted out of it were 6 Central executive. Handling over, took place  from 31st of March to 1st of April 2023.
          </Text>
          <TouchableOpacity>
          <Image style={{width:360,height:300} }source={images.land}/>
          </TouchableOpacity>
            <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{backgroundColor:"blue",height:20,width:20,borderRadius:10,alignItems:'center',justifyContent:'center',}}>
              <AntDesign name="like1" size={12} color={'white'} />
            </View>
            <Text style={{marginLeft:-190}}>8</Text>
            <Text style={{color:'grey',fontSize:12}}>1 Comment.1 Repost</Text>
            </View>
            <Text style={{color:'#ccc',marginTop:-10}}>_____________________________________________________</Text>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row'}}>
            <Image source={images.Jennie} style={{ height:30,width:30,borderRadius:20}}/>
            <AntDesign name="caretdown" style={{marginTop:10}}/>
            </View>
            
            <TouchableOpacity style={{alignItems:'center'}}>
            <AntDesign name="like1" size={20} />
            <Text >Like</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center'}}>
            <Icons name="chatbubble-ellipses-sharp" size={25}/>
            <Text >Comment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center'}}>
            <Icon name="retweet" size={20} />
            <Text >Repost</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}>
            <Feather name="send" size={20} />
            <Text >Share</Text>
            </TouchableOpacity>
            </View>

           </View>

         )
            
        }}
      />
    
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  searchbar: {
    width:'80%',
    height:30,
    backgroundColor:'$ccc',
    
  },
  container: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    width:'60%',
    height:35,
    borderColor:'#ccc',
    borderWidth:2,
    justifyContent:'center',
    
  
  },
  profilepic: {
    height:50,
    width:50,
    borderRadius:25
  },
})