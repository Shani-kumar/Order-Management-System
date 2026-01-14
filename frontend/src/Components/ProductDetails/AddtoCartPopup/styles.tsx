import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    popupContainer: {
      // padding: 10,
      alignItems: 'center',
      // borderWidth:1,
    },
    popupHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
      borderBottomWidth:1,
      borderColor:'#E0E0E0'
    },
    popupText: {
      fontSize: 15,
      fontWeight: '500',
      color: '#333',
    },
    closeButton: {
      padding: 5,
      borderRadius: 5,
      // backgroundColor: '#fc5e03',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButtonText: {
      // color: 'white',
      color:'grey',
      fontWeight: '600',
    },
    productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      // borderWidth: 1,
      // borderColor: '#E0E0E0',
      borderRadius: 8,
      padding: 12,
      width: wp('70%'),
      height:hp('12%'),
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
    },
    productImageContainer: {
      backgroundColor: '#F6F6F6',
      padding: 5,
      marginRight: 10,
      borderRadius: 8,
    },
    productInfoText: {
      color: '#333',
      fontSize: 14,
      fontWeight: '500',
    },
    productDetailsText: {
      color: '#777',
      fontSize: 12,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      // borderWidth:1,
    },
    actionButton: {
      backgroundColor: '#fc5e03',
      paddingVertical: 10,
      width:'48%',
      alignItems:'center',
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    actionButton1: {
      // backgroundColor: '#fc5e03',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width:'48%',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#E99D84',
    },
    actionButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
    },
    actionButtonText1: {
      color: '#F15927',
      fontSize: 14,
      fontWeight: '600',
    },
    
  });
export default styles  