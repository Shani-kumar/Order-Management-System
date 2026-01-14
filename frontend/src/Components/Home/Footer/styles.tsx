import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: 60,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#E3E3E3',
    },
    leftButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // borderRightWidth:0.2,
      borderRightWidth:1,
      borderColor:'#E3E3E3',
      padding: 14, 
    },
    rightButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 14,
      // borderLeftWidth:0.1 
    },
  
  });

  export default styles