import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: 60,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#ccc',

    },
    leftButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRightWidth:1,
      borderColor:'#ccc',
      padding: 17, 
    },
    rightButton: {
      flex: 1,
      color:'red',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 17, 
    },
    rightButtontext:{
      color:'#F15927',
      fontWeight:'bold',
      fontSize:15
    },
    leftButtontext:{
      fontWeight:'bold',
      fontSize:15
    }
  
  });
export default styles  