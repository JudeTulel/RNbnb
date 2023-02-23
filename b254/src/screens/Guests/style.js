import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{justifyContent:'space-between',
                flexDirection:'row',
                paddingVertical:10,
                borderWidth:2,
                borderColor:'orange',
                marginHorizontal:7,
                marginTop:5,
                borderRadius:30,
                backgroundColor:'darkgreen'
                
                
            },
    button:{
        width:40,
        height:40,
        borderWidth:2,
        borderColor:'orange',
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center',
        marginRight:10
        

    },
    ageGrpTxt:{
        color:"white",
        fontFamily:'Segoe UI',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:8
    },
    infoTxt:{
        marginTop:5,
        marginBottom:0,
        color:'white',
        marginLeft:10
    },
    txtBtn:{fontWeight:'bold',
            alignSelf:'center',
            color:'orange',
            fontSize:30
        },
    title:{fontWeight:'bold',
        alignSelf:'center',
        color:'green',
        fontSize:30,
        textDecorationLine:'underline'
        },
    nOfGuests:{alignSelf:'center', 
               fontSize:30,
               justifyContent:'center',
               marginRight:10,
            },
    image:{
        width:'100%',
        height:'100%',
       
    },
    searchButton:{
        padding:20,
        backgroundColor:'orange',
        alignItems:'center',
        alignSelf:'baseline',
        borderRadius:30,
        width:'80%',
        marginHorizontal:40,
        marginBottom:40,
        marginTop:60



    }
})
export default styles;