import { View, Text, FlatList, StyleSheet, Image, Dimensions, TextInput, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Feather';
import Adds from '../constants/Flatlists/Adds'; 
import Gadgets from '../constants/Flatlists/Gadgets'


const Jumia = () => {
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
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!loading && flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
        }
    }, [currentIndex, loading]);

    // if (loading) {
    //     return (
    //         <View style={styles.loadingContainer}>
    //             <ActivityIndicator size="large" color="#000" />
    //         </View>
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>
            <View>
                <View style={styles.header}>
                    <View style={styles.searchContainer}>
                        <Icon name='search' size={22} color={'black'} />
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
            <View style={{marginTop:10}}>
                <FlatList
                 data={Gadgets}
                 keyExtractor={(item) => item.id.toString()}
                 numColumns={2}
                 renderItem={({ item }) => (
                     <View style={styles.productContainer}>
                         <Image source={item.image} style={styles.productImage} />
                         <Text style={styles.title}>{item.title}</Text>
                         <Text style={{fontSize:15}}>N{item.price}</Text>
                         <Icon name='heart' size={20} color={'black'} style={{marginRight:10}} />
                         <Icon name='shopping-cart' size={20} color={'black'} />
                     </View>
                 )}
                 
                />
            </View>
            
        </View>
    );
};

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
        paddingHorizontal: 20,
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
        backgroundColor: '#f4a460',
        height: 50,
        paddingTop: 10,
    },
    callText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    slide: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '95%', 
        height: 200,
        borderRadius: 10,
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    productContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    productImage: {
        width: '45%',
        height: 150,
        borderRadius: 5,
    },
    productPrice: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f4a460',
        textAlign: 'center',
    },
});

export default Jumia;
