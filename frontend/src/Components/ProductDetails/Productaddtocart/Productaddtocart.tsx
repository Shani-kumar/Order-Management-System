import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import Like from '../../../assets/Like';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AddtoCartPopup } from '../AddtoCartPopup/AddtoCartPopup';
import styles from './styles';
import Heartfilled from '../../../assets/heartfilled';

type ProductAddToCartProp = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  cartId: number;
  productSpecificationId: number;
  currentquantity: number;
};

export default function ProductAddToCart({ navigation, cartId = 1, productSpecificationId, currentquantity }: ProductAddToCartProp) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false); 
  const [filled,setfilled] = useState<boolean>(false)

  const handleAddToCart = async () => {
    if (isAdding) return;
    setIsAdding(true); 

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
        setModalVisible(true);
      } else {
        Alert.alert("Error", "Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      Alert.alert("Error", "An error occurred");
    } finally {
      
      setTimeout(() => setIsAdding(false), 1000); 
    }
  };


  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        style={styles.addToCartButton} 
        onPress={handleAddToCart}
        disabled={isAdding} 
      >
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
      

      
      <TouchableOpacity onPress={()=>setfilled(!filled)}>
      <View style={styles.hearticon}>
        { filled ? <Heartfilled/> : <Like/>}
        </View>
      </TouchableOpacity>
     
     

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <AddtoCartPopup
              onClose={() => setModalVisible(false)}
              navigation={navigation}
              currentquantity={currentquantity}
              product_specification_id={productSpecificationId}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
