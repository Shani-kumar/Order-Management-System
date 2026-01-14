import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';


type FilterHeaderprops={
  setSelectedValues:React.Dispatch<React.SetStateAction<Map<string, Set<string | number>>>>;
}
const FilterHeader = ({setSelectedValues}:FilterHeaderprops) => {
  const sortfunc = () => {
   
    console.log("Closed");
  };

  const filterfunc = () => {
   
    setSelectedValues(new Map());
    console.log("Filters Applied");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sortfunc} style={styles.leftButton}>
        <Text style={styles.textleft}>Filters</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={filterfunc} style={styles.rightButton}>
        <Text style={styles.textright}>CLEAR ALL</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FilterHeader;