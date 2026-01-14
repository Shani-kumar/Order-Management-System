

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
interface CartquantityProps {
  pricePerItem: number;
  quantity: number;
  onUpdateQuantity: (newQuantity: number) => void;
  handleRemoveItem:(sku_id: string) => void;
  skuid:string;
  id:number;
  product_specification_id:number;
}

const Cartquantity: React.FC<CartquantityProps> = ({ pricePerItem, quantity: initialQuantity, onUpdateQuantity,handleRemoveItem,skuid,product_specification_id ,id}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity); 
  }, [initialQuantity]);

  const handleQuantityChange = (newQuantity: number,id:number) => {
    if (newQuantity !== quantity) {
      if(newQuantity == 0){
        handleRemoveItem(id.toString())
      }
      else{
        const cq = newQuantity-quantity;
        
        setQuantity(newQuantity);
        onUpdateQuantity(newQuantity);
        handleAddToCart(1,product_specification_id,cq) 
      }
      
    }
  };
console.log(product_specification_id)
  const handleAddToCart = async (cartId:number,productSpecificationId:number,currentquantity:number) => {
    try {
      const response = await fetch('http://10.0.2.2:5000/add-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart_id: cartId,
          product_specification_id: productSpecificationId,
          quantity: currentquantity,
        }),
      });
      if (response.ok) {
      } else {
        Alert.alert("Error", "Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      Alert.alert("Error", "An error occurred");
    }

  };
  const totalValue = parseFloat((quantity * pricePerItem).toFixed(2));

  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => {handleQuantityChange(Math.max(quantity - 1, 0),0)
        }}>
          <View style={styles.button}>
          <Text style={styles.buttontext}>-</Text>
          </View>
          
        </TouchableOpacity>

        <View style={styles.quantity}>
        <Text style={styles.quantitytext}>{quantity}</Text>
        </View>
        
        <TouchableOpacity onPress={() => {handleQuantityChange(quantity + 1,id)
        }}>
          <View style={styles.button}>
          <Text style={styles.buttontext}>+</Text>
          </View>
         
        </TouchableOpacity>
      </View>
      <View style={styles.totalContainer}>
        <Text>Total: {totalValue} ₹</Text>
      </View>
      <View>
      <TouchableOpacity onPress={() => {handleRemoveItem(skuid)}}>
          <Text style={styles.rightcontainercross}> x </Text>
        </TouchableOpacity>
            </View>
    </View>
  );
};

export default Cartquantity;
