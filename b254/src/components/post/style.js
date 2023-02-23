import { StyleSheet,Dimensions } from 'react-native'


const styles = StyleSheet.create({
    container:{
            marginLeft:10,
            marginTop:10,
            },
    image:{ width:Dimensions.get('screen').width-20 ,
            height:Dimensions.get('screen').height-550,
            justifyContent: 'center',
            borderBottomRightRadius:30,
            borderTopLeftRadius:30,
            marginVertical:10,
            
        },
        title:{
            color:"green",
            fontWeight:'bold',
            fontSize:20,
            marginLeft:2,
            flexShrink:1.5,
            borderColor:'gray',
            textDecorationLine:'underline'
            
        },
    desc:{
        color:"green",
        fontSize:16,
        fontWeight:'300',
        marginVertical:4

                   
        
    },
    price:{
        fontWeight:'700',
        color:'orange',
        fontSize:20,
        marginVertical:1
    }

    })

export default styles