import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import BackIcon from '../../../assets/BackIcon';
import CartIcon from '../../../assets/CartIcon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import styles from './styles';
type Props = {
  cart_item_num: number; 
  navigation:NativeStackNavigationProp<RootStackParamList>;
};

export default function ProductDetailsHeader(props: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View  style={styles.startingcontent}>
      <TouchableOpacity onPress={() => navigation.goBack()}><BackIcon/></TouchableOpacity> 
      </View>
      
      
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Cart')}}>
        <View style={styles.cartContainer} >
          <CartIcon />
          <Text style={styles.cartCount}>({props.cart_item_num})</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
