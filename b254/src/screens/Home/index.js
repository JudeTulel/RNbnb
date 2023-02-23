import { View, Text,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
import Fontisto from 'react-native-vector-icons/Fontisto'
const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Pressable style={styles.searchButton} 
          onPress={ ()=>navigation.navigate('DestinationSearch')}>
          <Fontisto name="search"size={25} color="white" style={styles.searchIcon}/>
          <Text style={styles.searchBtnText}>
            Where do you want to go?
          </Text>
        </Pressable>
      <ImageBackground source={require("../../../Assets/Vacay.jpg")} style={styles.image} >
        <Text style={styles.title}>Looking for a bnb?</Text>
        <Pressable style={styles.button} 
          onPress={ ()=>console.warn("Explore button pushed")}>
          <Text style={styles.btnText}>
            Explore nearby
          </Text>
        </Pressable>
        <Pressable style={styles.searchButton}>
          <Text>Search</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen