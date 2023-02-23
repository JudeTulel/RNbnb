import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container:{

    },
    image: {
        width: "100%",
        height:'90%',
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius:90

        
    },
    title: {
        fontSize:70,
        marginRight: 40,
        color:"orange"
    },
    button:{
        backgroundColor:"green",
        width: 150,
        height:40,
        marginLeft:20,
        borderRadius:10,
        justifyContent: 'center',
        alignContent: 'center',


    },
    btnText: {
        fontSize:16,
        fontWeight:"bold",
        justifyContent:"center",
        alignSelf:'center',
        color:'white',
        bottom:1,

    },
    searchButton: {
        backgroundColor:"green",
        width: Dimensions.get("screen").width-100,
        height:36,
        borderRadius:15,
        justifyContent: 'center',
        flexDirection:'row',
        alignContent: 'stretch',
        position:'absolute',
        top:2,
        zIndex:50,
        marginLeft:50,
    

    },
    searchBtnText: {
        marginLeft:10,
        fontSize:16,
        color:"white",
        justifyContent:'center',
        alignItems:"baseline",
        marginTop:10,
    },
     searchIcon: {
        justifyContent:'flex-start',
        marginTop:10,
        

        
        
     }


});

export default styles;