import { View, Text, TextInput,FlatList,Pressable } from 'react-native'
import React ,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import searchResult from '../../../Assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './style';
const LocationSearch = () => {
  const [inputText,setInputText]=useState('')

  const navigation = useNavigation();

    return (
    <View style={styles.container}>
        {/**input section */}

        {}
      <TextInput
      style={styles.txtInput}
      placeholder="Where do you want to go?"
      value={inputText}
      onChangeText = {setInputText}
      />
      <FlatList
      data={searchResult}
      renderItem={({item})=>(
    <>
    <Pressable style={styles.resultRow} onPress={()=>navigation.navigate('Guests')} >
    <View style={styles.locationIcon}><Entypo name='location-pin' size={35} color='green'/></View>
         <Text style={styles.resultText}>{item.description}</Text>
    </Pressable></>
      )}
      />
    </View>
  )
}

export default LocationSearch