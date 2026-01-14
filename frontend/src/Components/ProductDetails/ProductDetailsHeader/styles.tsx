import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
      padding: 20,
      // backgroundColor: '#f8f8f8',
      backgroundColor:'white',
      borderBottomWidth:1,
      borderColor:'#E3E3E3'
    },
    startingcontent:{
      flexDirection:'row',
      alignItems:'center',
      
    },
    textcontent:{
      marginHorizontal:10
    },
    textcontentinner:{
      color:'black'
    },
    cartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cartCount: {
      marginLeft: 5, 
      fontSize: 16,
      color: '#333',
      opacity:0.6
    },
  });

  
  export default styles