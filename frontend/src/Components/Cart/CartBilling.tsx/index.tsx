

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
interface CartItem {
  product_name: string;
  sku_id: string;
  grade: string;
  quantity: number;
  price: number;
  discount: number;
  net_weight: number;
  total_price: number;
}
interface CartBillingProps {
  cartItems: CartItem[];
  totalAmount: number;
}

const CartBilling: React.FC<CartBillingProps> = ({ cartItems, totalAmount }) => {
  const shipping = 500; 
  const discount = 0; 
  const subtotal = parseFloat((cartItems.reduce((sum, item) => sum + (item.price-(item.price*item.discount/100)) * item.quantity, 0)).toFixed(2))

  return (
    <View style={styles.topcontainer}>
      <View style={styles.innercontainer}>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>Sub Total</Text>
          <Text style={styles.text}>₹ {subtotal} </Text>
        </View>
        <View style={styles.subcontainer}>
          <Text>Shipping</Text>
          <Text>₹ {shipping} </Text>
        </View>
        <View style={styles.subcontainer}>
          <Text>Coupon Discount</Text>
          <Text>₹ {discount} </Text>
        </View>
      </View>
      <View style={[styles.subcontainer, styles.totalamt]}>
        <Text style={styles.text}>Total Amount</Text>
        <Text style={styles.text}>₹ {totalAmount} </Text>
      </View>
    </View>
  );
};
export default CartBilling;



