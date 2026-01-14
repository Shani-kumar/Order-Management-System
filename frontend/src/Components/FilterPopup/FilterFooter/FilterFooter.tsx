import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const FilterFooter = () => {
    const navigation = useNavigation();
  const sortfunc = () => {
   
    console.log("Closed");
  };

  const filterfunc = () => {
    
    console.log("Filters Applied");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.leftButton}>
        <Text style={styles.leftButtontext}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={filterfunc} style={styles.rightButton}>
        <Text style={styles.rightButtontext}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterFooter;
