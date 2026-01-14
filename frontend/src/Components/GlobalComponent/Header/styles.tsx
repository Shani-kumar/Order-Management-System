import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', // Center items vertically
      padding: 20,
      backgroundColor: '#f8f8f8',
    },
    cartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cartCount: {
      marginLeft: 5, // Adjust spacing between the icon and the text
      fontSize: 16,
      color: '#333',
      opacity:0.6// Color for the cart count text
    },
  });
  export default styles