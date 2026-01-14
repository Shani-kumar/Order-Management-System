import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    topcontainer: {
      flex: 1,
      flexWrap:'wrap',
      flexDirection:'column',
      // backgroundColor:'cyan',
      width:wp('42.8%'),
      // height:250,
      margin:5,
      // borderColor:'red',
      // borderWidth:1

    },
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
      // backgroundColor:'gray'
    },
    image: {
      backgroundColor: '#F5F5F5',
      width: wp('42.8%'),
      height: hp('23.75%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    textdesc: {
      marginStart: 5,
      flexWrap:'wrap',
      maxWidth:wp('47.22%'),
      // backgroundColor:'gray'
    },
    after_discount_price: {
      fontWeight: 'bold',
      color: 'black',
    },
    total_price: {
      textDecorationLine: 'line-through',
    },
    discount_percent: {
      backgroundColor: '#F15927',
      color: 'white',
      paddingHorizontal: 4,
      borderRadius: 5,
    },
  });
  

  export default styles