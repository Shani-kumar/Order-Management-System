import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import SortIcon from '../../../assets/SortIcon';
import FilterIcon from '../../../assets/FilterIcon';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Footer() {
  const navigation = useNavigation();
  function sortfunc(){
    console.log("sort clicked");
  }
  function filterfunc(){
    console.log("filter clicked")
    navigation.navigate('FilterPopup' as never)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sortfunc} style={styles.leftButton}>
        <SortIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={filterfunc} style={styles.rightButton}>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
}
