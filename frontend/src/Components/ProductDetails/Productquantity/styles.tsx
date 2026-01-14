import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topcontainer:{
      borderTopWidth:0.5,
      borderColor:'grey',
      borderBottomWidth:0.5,
  
    },
    container: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flexWrap:'wrap',
      // padding: 16,
      // backgroundColor: 'white',
      // borderRadius: 8,
      // elevation: 2,
      // margin: 16,
      paddingHorizontal:16
    },
    containerstocks:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flexWrap:'wrap',
      // padding: 16,
      // backgroundColor: 'white',
      // borderRadius: 8,
      // elevation: 2,
      borderBottomWidth:0.5,
      borderColor:'grey',
      paddingHorizontal:16,
      paddingVertical:10
      // margin: 16,
    },
    label: {
      fontSize: 12,
      marginBottom: 8,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    button: {
      fontSize: 24,
      textAlign:'center',
      width:45,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
    },
    quantity: {
      fontSize: 16,
      marginHorizontal: 16,
    },
    totalContainer: {
      marginTop: 8,
    },
    totalLabel: {
      fontSize: 12,
    },
    totalValue: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  
  export default styles