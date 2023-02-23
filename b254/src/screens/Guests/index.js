import { View, Text,Pressable, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

const Guest = () => {
    const [adults,setAdults]=useState(0)
    const [kids,setKids]=useState(0)
    const [Infants,setInfants]=useState(0)
    const navigator = useNavigation();
  return (

    <>
    <ImageBackground source={require("../../../Assets/green.jpg")} style={styles.image} >

    <View style={styles.container}>

    <View>  
      <Text style={styles.ageGrpTxt}>Adults</Text>
      <Text style={styles.infoTxt}>Ages 18 and above</Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <Pressable style={styles.button}
        onPress={()=> setAdults(Math.max(0,adults-1))}>
            <Text style={styles.txtBtn}>-</Text>
        </Pressable>
        <Text style={styles.nOfGuests}>{adults}</Text>
        <Pressable style={styles.button}
        onPress={()=>setAdults(adults+1)}>
            <Text style={styles.txtBtn}>+</Text>
        </Pressable>
    </View>
    </View>
    {/**Kids */}
    <View style={styles.container}>

    <View>  
      <Text style={styles.ageGrpTxt}>Kids</Text>
      <Text style={styles.infoTxt}>Ages 0-3 </Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <Pressable style={styles.button}
        onPress={()=> setKids(Math.max(0,kids-1))}>
            <Text style={styles.txtBtn}>-</Text>
        </Pressable>
        <Text style={styles.nOfGuests}>{kids}</Text>
        <Pressable style={styles.button}
        onPress={()=>setKids(kids+1)}>
            <Text style={styles.txtBtn}>+</Text>
        </Pressable>
    </View>
    </View>
    <View style={styles.container}>

    <View>  
      <Text style={styles.ageGrpTxt}>Infants</Text>
      <Text style={styles.infoTxt}>Ages 0-3 </Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <Pressable style={styles.button}
        onPress={()=> setInfants(Math.max(0,Infants-1))}>
            <Text style={styles.txtBtn}>-</Text>
        </Pressable>
        <Text style={styles.nOfGuests}>{Infants}</Text>
        <Pressable style={styles.button}
        onPress={()=>setInfants(Infants+1)}>
            <Text style={styles.txtBtn}>+</Text>
        </Pressable>
    </View>
    </View>
    <Pressable style={styles.searchButton}
    onPress={()=>navigator.navigate('SearchResults')} >
        <Text style={{color:'white',fontSize:16,fontFamily:'Segoe'}}>Search</Text>
      </Pressable>
    </ImageBackground>
    </>

  )
}

export default Guest