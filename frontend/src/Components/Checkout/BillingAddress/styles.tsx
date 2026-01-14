import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topheading: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    topheadingnumtextcont: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 25,
      height: 25,
      borderRadius: 50,
      // borderWidth: 1,
      paddingHorizontal: 8,
      backgroundColor: '#F15927',
      margin: 10,
    },
    topheadingnumtext: {
      color: 'white',
      fontSize: 10,
    },
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#FFFFFF',
      width: "100%",
    },
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
    },
    addressItem: {
      padding: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    selectedAddress: {
      backgroundColor: '#FEF2EE',
      borderColor: '#F15927',
    },
    addressDetails: {
      flex: 1,
    },
    iconContainer: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
    },
    address: {
      fontSize: 14,
      color: '#555',
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginTop: 20,
    },
  });
  
  export default styles