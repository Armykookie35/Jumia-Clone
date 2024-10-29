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
import Images from '@/constants/Images';



const Categories = ({navigation}) => {
    const categories = [
        { id: '1', title: 'Phones & Tablets' },
        { id: '2', title: 'Fashion' },
        { id: '3', title: 'Health & Beauty' },
        { id: '4', title: 'Electronics' },
        { id: '5', title: 'Computing' },
        { id: '6', title: 'Grocery' },
        { id: '7', title: 'Garden & Outdoors' },
        { id: '8', title: 'Automobile' },
        { id: '9', title: 'Appliances' },
        { id: '10', title: 'Camping' },
        { id: '11', title: 'Home Decor' },
        { id: '12', title: 'Furniture' },
        { id: '13', title: 'Black Fridays' },
        { id: '14', title: 'Weekend Outings' },
      
      ];
      

    //   const content = {
    //     '1': 'Phones & Tablets Content',
    //     '2': 'Fashion Content',
    //     '3': 'Health & Beauty Content',
    //     '4': 'Electronics Content',
    //     '5': 'Computing Content',
    //     '6': 'Grocery Content',
    //     '7': 'Garden & Outdoors Content',
    //     '8': 'Automobile Content',
    //     '9': 'Stationery Content',
    //   };

    const [selectedCategory, setSelectedCategory] = useState(null);

   
    const handleCategoryPress = (id) => {
        setSelectedCategory(id);
    };

   
    const selectedGadget = Gadgets.find(gadget => gadget.id === Number(selectedCategory));
  return (
    <View style={{ flex: 1 ,backgroundColor:'#f8f8f8'}}>
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
              
            <View style={{flexDirection:'row',flex:1}}> 
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleCategoryPress(item.id)}
                    >
                        <Text style={styles.menuText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
          <View style={{width:'70%'}}>
          <View style={{backgroundColor:'#ccc',height:60,alignItems:'center',flexDirection:'row',paddingHorizontal:10,flex:1,width:'100%',justifyContent:'space-between'}}>
                    <Text>ALL PRODUCTS</Text>
                    <Icons name="chevron-right" size={20} color="black" />
                </View>
                <FlatList
                  data={Gadgets}
                  numColumns={2}
                  style={{backgroundColor:'white'}}
                  
                  renderItem={({ item }) => ( 
                    <View style={{marginLeft:20,height:100,marginTop:10,width:100,alignItems:'center'}}>
                      <Image  source={item.image} style={styles.small}/>
                      <Text style={{fontSize:12}}>{item.title}</Text>
                 
                    </View>
                )}
                  
                />
                 </View>
            {/* <View style={styles.content}>
                {selectedGadget ? (
                    < View>
                        <Image source={selectedGadget.image} style={styles.image} />
                        <Text style={styles.title}>{selectedGadget.title}</Text>
                        <Text style={styles.price}>Price: {selectedGadget.price}</Text>
                    </View>
                ) : (
                    <Text>Select a category to see content</Text>
                )} */}
           
            {/* </View> */}
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',height:70,padding:20}}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('HomeScreen')}>
               <Icon name='home' size={26} color={'black'}/>
               <Text>Home</Text>
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
  )
}

export default Categories

const styles = StyleSheet.create({
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
    box:{
        backgroundColor:'white',
        padding:20,
        marginBottom:20,
    
      },
      feed:{
        width:23,
        height:23,
      },
      menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width:100,
        height:60,
        backgroundColor:'#fff',
        alignItems:'center'
      },
      menuText: {
        fontSize: 15,
        
      },
      content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        backgroundColor:'#fff'
      },
      image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius:10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: 'green',
        marginTop:-20
    },
    small:{
        height:'70%',
        width:'70%',
        borderRadius:10
    },
    
})