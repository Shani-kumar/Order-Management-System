import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headingtext: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      // marginStart: 10,
      // margin: 10,
      alignItems: 'center',
    },
    namecontainer:{
      // marginHorizontal:5,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    namecontainertextleft:{
      marginRight:20,
    },
    namecontainertextright:{
      marginRight:10,
    },
    after_disscount_price: {
      // margin: 10,
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20,
    },
    total_price: {
      textDecorationLine: 'line-through',
      margin: 10,
      fontSize: 15,
    },
    discount_percent: {
      backgroundColor: '#F15927',
      color: 'white',
      paddingHorizontal: 4,
      borderRadius: 5,
      margin: 10,
      fontSize: 15,
    },
    topcontainer: {
      margin: 10,
      backgroundColor:'white'
    },
    innercontainer:{
      padding:16,
    }
  });
  

  export default styles