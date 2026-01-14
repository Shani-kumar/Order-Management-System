

import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartSubheader from '../CartSubheader';
import Cartquantity from '../Cartquantity';
import styles from './styles';
interface CartItem {
  product_name: string;
  sku_id: string;
  grade: string;
  quantity: number;
  id:number;
  price: number;
  discount: number;
  net_weight: number;
  total_price: number;
  product_specification_id:number;
  image_url:string;
}

interface CartItemDetailsProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  handleRemoveItem: (id: number) => void;
}

const CartItemdetails: React.FC<CartItemDetailsProps> = ({ cartItems, onUpdateQuantity, handleRemoveItem }) => {
  return (
    <View style={styles.topcontainer}>
      {cartItems.map(item => (
        <View key={item.sku_id} style={styles.innercontainer}>
          <CartSubheader item={item} />
          <Cartquantity
            skuid={item.sku_id}
            product_specification_id={item.product_specification_id}
            pricePerItem={item.price-(item.discount*item.price/100)}
            quantity={item.quantity}
            id={item.id}
            handleRemoveItem={() => handleRemoveItem(item.id)}
            onUpdateQuantity={(newQuantity: number) => onUpdateQuantity(item.id, newQuantity)}
          />
        </View>
      ))}
    </View>
  );
};

export default CartItemdetails;


