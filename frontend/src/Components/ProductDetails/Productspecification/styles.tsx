// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     container: {
//       padding: 16,
//       // backgroundColor: 'white',
//       // borderRadius: 8,
//       // elevation: 2,
//       // margin: 16,
//       borderTopWidth:0.5,
//       borderColor:'grey'
//     },
//     specContainer: {
//       flexDirection:'row',
//       // flexWrap:'wrap',

//       marginBottom: 12,
//     },
//     specTitle: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginBottom: 4,
//       marginRight:10,
//     },
//     valuesContainer: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//     },
//     valueContainer: {
//       marginRight: 10,
//       padding: 8,
//       borderRadius: 4,
//       backgroundColor: '#e0e0e0',
//     },
//     selectedValue: {
//       backgroundColor: 'white',
//       borderColor: "#F15927",
//       borderWidth: 1,
//     },
//     value: {
//       fontSize: 16,
//     },
//     productDetails: {
//       marginTop: 16,
//     },
//     errortext:{
//       color:'purple'
//     }
//   });
// export default styles  
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {

    paddingHorizontal:16,
    paddingVertical:16,

    // backgroundColor: 'bule',
    // borderRadius: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // elevation: 3,
    // marginHorizontal: 16,
    marginVertical: 8,
    borderTopWidth: 0.5,
    borderColor: 'lightgrey',
    // flexWrap:'wrap'
    // borderWidth:1,

  },
  specContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'flex-start',
    marginBottom: 12,
    // backgroundColor:'blue'
    // borderWidth:1,
  },
  specTitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    // color: '#333',
    marginRight: 10,
    width:70,
    // borderWidth:1,
  },
  valuesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 4,
    // borderWidth:1,
    // width:wp("6"),
    width:257,
    alignItems:'center',
    // borderColor:'red'
  },
  // valueContainer: {
  //   marginRight: 8,
  //   marginBottom: 8,
  //   paddingVertical: 6,
  //   paddingHorizontal: 12,
  //   borderRadius: 20,
  //   backgroundColor: '#f5f5f5',
  //   borderWidth: 1,
  //   width:90,
  //   borderColor: '#e0e0e0',
  // },
      valueContainer: {
      
         marginRight: 8,
    marginBottom: 8,
    paddingVertical: 6,
    paddingHorizontal: 5,
      borderRadius: 4,
      width:wp('18%'),
      alignItems:'center',
      backgroundColor: '#F5F5F5',
    },
    selectedValue: {
      backgroundColor: 'white',
      borderColor: "#F15927",
      borderWidth: 1,
    },
  value: {
    fontSize: 16,
    color: '#555',
  },
  selectedValueText: {
    color: 'white',
  },
  productDetails: {
    marginTop: 16,
  },
  errortext: {
    color: 'purple',
    fontSize: 14,
    marginTop: 8,
  },
});

export default styles;
