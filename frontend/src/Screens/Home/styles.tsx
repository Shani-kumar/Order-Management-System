import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
    },
    contentContainer: {
      paddingBottom: 10,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',

    },
    errortext1:{
      color:'black',
      fontWeight:'bold',
      fontSize:20,
    },
    errortext:{
      color:'black',
      fontWeight:'bold',
      fontSize:17,
    },
    errortextcontainer:{
       justifyContent:'flex-start'
    }
  });
  

  
  export default styles