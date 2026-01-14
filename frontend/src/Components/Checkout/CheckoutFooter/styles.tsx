import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const styles =StyleSheet.create({
    topcontainer:{
        // borderWidth:1,
        width: wp('100%'),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // margin:10,
        paddingHorizontal:20,
        borderTopWidth:1,
        borderTopColor:'#E3E3E3',
        padding:10,
        backgroundColor:'#FFFFFF'
    },
    text:{
        backgroundColor:'#F15927',
        color:'white',
        fontSize:20,
        borderRadius:5,
        paddingHorizontal:10,
        padding:5
    },
    textleft:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
  
    }
  })

  export default styles