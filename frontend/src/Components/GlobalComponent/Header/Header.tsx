import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import InfraIcon from '../../../assets/InfraMarketIcon';
import CartIcon from '../../../assets/CartIcon';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
type Props = {
  cart_item_num: number; 
  navigation:NativeStackNavigationProp<RootStackParamList>
};

export default function Header({cart_item_num,navigation}: Props) {
  return (
    <View style={styles.container}>
      <InfraIcon />
      
      <View style={styles.cartContainer}>
        <TouchableOpacity style={styles.cartContainer} onPress={ ()=>{navigation.navigate('Cart')}}>
        <CartIcon />
        <Text style={styles.cartCount}>({cart_item_num})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
