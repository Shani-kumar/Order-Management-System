import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    topcontainer:{
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:4,
        borderColor:'#E0E0E0',
        padding:10,
        margin:10,
        width:wp('95%'),
        backgroundColor:'#FFFFFF'
      

    },
    leftcontainer:{
        flexDirection:'row',
        alignItems:'center',

        

    },
    leftcontainerimg:{
      backgroundColor:'#F6F6F6',
      borderRadius:5
    },
    leftcontainertext:{
        margin:5
    }
})

export default styles