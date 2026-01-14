import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import BackIcon from '../../../assets/BackIcon';
import CartIcon from '../../../assets/CartIcon';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import styles from './styles';
type Props = {
  navigation:NativeStackNavigationProp<RootStackParamList>;
  cart_item_num: number;
  categoryname:string;
  // number_of_items:number;
  categoryId:number;
};
interface Product {
  id: string;
  product_name: string;
  price: number;
  discount: number;
  sale: boolean;
  category_id: number; 
}

export default function CategoryHeader(props: Props) {
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  const filteredProducts = props.categoryId
    ? products.filter((product) => product.category_id === props.categoryId)
    : products;
    // console.log(props.categoryId)
    const number_of_items= filteredProducts.length
    // console.log(filteredProducts ,"from category heasder")
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View  style={styles.startingcontent}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}><BackIcon/></TouchableOpacity>
      <View style={styles.textcontent}>
      <Text style={styles.textcontentinner}>{props.categoryname}</Text>
      <Text>{number_of_items} items</Text>
      </View>
      
      </View>
      
      
      
      <TouchableOpacity onPress={()=> props.navigation.navigate('Cart')}>
      <View style={styles.cartContainer}>
        <CartIcon />
        <Text style={styles.cartCount}>({props.cart_item_num})</Text>
      </View>
      </TouchableOpacity>
     
    </View>
  );
}
