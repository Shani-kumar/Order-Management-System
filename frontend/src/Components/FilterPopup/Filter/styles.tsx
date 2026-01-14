import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topContainer: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor:'white'
    },
    leftContainer: {
      flex: 1,
      backgroundColor:'#F5F5F5',
      borderRightWidth:1,
      borderColor:'#ccc'

    },
    rightContainer: {
      flex: 2,
    },
    categoryTitle: {
      fontWeight: 'bold',
      padding: 10,

      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    innerRight: {},
    valueText: {
      flexDirection:'row',
      // padding: 10,
      // borderWidth: 1,
      marginHorizontal:10,
      borderColor: 'black',
      alignItems:'center'
    },
    valueTextcontainer: {
      flexDirection:'row',
      padding: 10,
      // borderWidth: 1,
      borderBottomWidth:1,
      // borderLeftWidth:1,
      borderColor: '#ccc',
      alignItems:'center'
    },
    selectedValue: {
      backgroundColor: '#f5ccb8',
    },
    selectedKey: {
      backgroundColor: '#f5ded3',
    },
    selectedContainer: {
      // marginTop: 20,
    },
    selectedValueText: {
      // marginLeft: 10,
      // fontWeight: 'bold',
    },
  });

  
  export default styles