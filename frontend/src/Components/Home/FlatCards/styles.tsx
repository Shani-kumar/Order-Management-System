import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    topcontainer: {
      // margin: 8,
      paddingHorizontal:widthPercentageToDP("4.55%"),
      // alignItems:'center',
      flexDirection:'column',
      // justifyContent:'center',
      // alignItems:'center',
      // backgroundColor:'green'
      // justifyContent:'space-between'
    },
    productcontainer:{
        // marginLeft:10
    },
    headingcontainer:{
      width:"100%",
      alignContent:'flex-start',
      justifyContent:'flex-start',
    },
    headingText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      paddingHorizontal: widthPercentageToDP("1.55%"),
      marginTop:10
      // textAlign:'left',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });
  

  export default styles