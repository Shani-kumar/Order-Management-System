// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     topcontainer: {
//       flex:1,
//       margin: 8,
//       padding: 10,
//     },
//     headingText: {
//       fontSize: 15,
//       fontWeight: 'bold',
//       color: 'black',
//       paddingHorizontal: 8,
//     },
//   });
  
//   export default styles

import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    topcontainer: {
      // margin: 8,
      // padding: 15,
      // alignItems:'center',
      flex:1,
      // flexDirection:'column',
      // justifyContent:'center',
      // alignItems:'center',
      paddingHorizontal:widthPercentageToDP("4.55%"),
      // backgroundColor:'green'
      // justifyContent:'space-between's
      backgroundColor:'white'
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
      paddingHorizontal: 25,
      marginTop:10
      // textAlign:'left',
    },
    centeredView: {
      // flex: 1,
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // backgroundColor: 'white',
    },
  });
  

  export default styles