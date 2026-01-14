import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    topcontainer: {
      backgroundColor: 'white',
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
    },
    innercontainer: {
      flex: 1,
      width: '90%',
      
      
    },
    emptyCartContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyCartText: {
      fontSize: 18,
      color: 'grey',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',

    },
    errortext:{
      color:'#b03030',
      fontWeight:'bold',
      fontSize:20,
      width:widthPercentageToDP("60%"),
      flexWrap:'wrap',
      textAlign:'center'
    },
   
    errortextcontainer:{
       justifyContent:'flex-start'
    }
  });
 export default styles  