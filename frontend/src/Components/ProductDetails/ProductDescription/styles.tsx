import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding:16,
      // paddingHorizontal:16,
      // backgroundColor: '#f0f0f0',
      backgroundColor: 'white',
      // borderBottomWidth:0.5,
      // borderWidth:1,
      // borderColor:'red'

      
      
      
    },
    topinnercontainer:{
      // backgroundColor:'green'
      paddingTop:wp("5%")
    },
    innercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'yellow'
        // width:wp('90%')
        // margin:10
        paddingVertical:wp(".5%")
    },
    border:{
        // borderBottomWidth:0.5,
        // borderColor:'grey'
  
    },
    indicator: {
      backgroundColor: '#F15927',
      height: 3,
    },
    tabTitle: {
      color:'#F15927',
      fontSize: 12,
    },
    tabView: {
      height:300,
      // backgroundColor:'grey',
      // margin:10
    },
    tabViewItem: {
      alignItems: 'center',
      paddingVertical:hp("1%"),
      paddingHorizontal:wp("4.44%"),
    },
    seltext:{
      color:'black',
      fontWeight:'800'
    }
  });

  export default styles