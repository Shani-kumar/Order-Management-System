import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      // borderWidth:1,
    
    },
    button: {
      textAlign:'center',
      width:45,
      fontSize: 24,
      backgroundColor: '#FEF2EE',
      borderRadius: 5,
      height:35,
      alignItems:'center',
      justifyContent:'center',
      
    },
    buttontext: {
      fontSize: 24,
      color:'#F15927'
    },
    quantity: {
      height:35,
      
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 5,
      width:50,
      borderColor:'#C4C4C4',
      alignItems:'center',
      justifyContent:'center'



    },
    quantitytext: {
      fontSize: 18,


    },
    rightcontainercross: {
          marginLeft: 20,
          color:'red',
          fontSize:20,
        },
          totalContainer: {},
  });

  
  export default styles