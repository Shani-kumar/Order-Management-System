import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      marginHorizontal: 10,
      height: 50,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.2,
      // shadowRadius: 4,
      // elevation: 3,
    },
    textInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: '#333',
    },
    icon: {
      width: 20,
      height: 20,
    },
  });

  export default styles