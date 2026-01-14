import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parentcontainer:{
        marginVertical:10,
        marginStart:10,


    },
    container: {
        margin:15,
      marginVertical: 10,
      maxWidth: 70,
      
    },
    iconContainer: {
      backgroundColor: '#FEF2EE',
      borderRadius: 30,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    //   elevation: 3, 
    },
    text: {
      textAlign: 'center',
      fontSize: 12,
      marginTop: 5,
      color: '#333', 
    },
  });
  
export default styles