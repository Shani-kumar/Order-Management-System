import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topcontainer: {},
    innercontainer: {},
    subcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      color: 'black',
      fontWeight:'bold'
    },
    totalamt: {
      marginTop: 5,
      paddingVertical: 5,
      borderTopWidth: 1,
      borderColor: '#d9d7d7'
    }
  });

  export default styles