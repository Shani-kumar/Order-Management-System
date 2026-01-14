import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // borderTopWidth:0.5,
      // borderColor:'grey',
      margin: 15,
    },
    addToCartButton: {
      backgroundColor: '#fc5e03',
      paddingVertical: 12,
      paddingHorizontal: 18,
      borderRadius: 5,
      width: wp('70%'),
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContainer: {
      width: wp('80%'),
      height: hp('30%'),
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 8,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    hearticon:{

      width:wp('13.88%'),
      justifyContent:'center',
      alignItems:'center',

    }
  });
 export default styles  