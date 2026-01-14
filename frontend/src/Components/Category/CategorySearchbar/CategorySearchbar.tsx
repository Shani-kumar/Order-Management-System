import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchIcon from '../../../assets/SearchIcon';
import UltraTech from '../../../assets/UltraTech';
import styles from './styles';

type searchbarprop = {
  settextsearch:(value: string) => void;
};

function CategorySearchbar({  settextsearch }: searchbarprop) {
  const [inputtext, setInputText] = useState('');
  const [flag, setFlag] = useState(true);



  const handlesearch = (newtext: string) => {
    setInputText(newtext); 
     settextsearch(newtext); 
  };


  return (
    <View style={styles.searchContainer}>
      {flag ? <SearchIcon /> : ''}
      <TextInput
        placeholder="Search Products"
        style={styles.textInput}
        placeholderTextColor="#888"
        onChangeText={handlesearch} 
        value={inputtext} 
        onFocus={() => setFlag(false)}
        onBlur={() => setFlag(true)}
      />
    </View>
  );
}

export default CategorySearchbar;
