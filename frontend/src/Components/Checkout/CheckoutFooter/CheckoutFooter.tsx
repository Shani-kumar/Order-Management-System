

import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Navigator/AppNavigator'
import { Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import ShippingAddress from '../ShippingAddress/ShipingAddress'
import BillingAddress from '../BillingAddress/BillingAddress'
import { combineSlices } from '@reduxjs/toolkit'
import CheckoutPayment from '../../../Screens/CheckoutPayment/CheckoutPayment'
import styles from './styles'
type CheckoutFooterProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  nxtscreen: keyof RootStackParamList;
  txt: string;
  totalAmount: number;
  cartId: number;
  userId: number;
};


export default function CheckoutFooter({  navigation, 
  nxtscreen, 
  txt, 
  totalAmount, 
  cartId, 
  userId, }: CheckoutFooterProps) {

    const selectedShippingAddress = useSelector((state: RootState) => state.selectedAddress.selectedAddress);
    const selectedbillingAddress = useSelector((state:RootState)=>state.selectedbilling.selectedbilling)
    const selectedPayment = useSelector((state: RootState) => state.paymentmethod.selectedPayment);
// console.log(selectedPayment)
    const handleCheckout = async () => {
      console.log(selectedPayment?.label)
      console.log(selectedShippingAddress)
      console.log(selectedbillingAddress)
      console.log(cartId)
      console.log(userId)
      console.log(totalAmount)
      if (nxtscreen === 'OrderConfirm') {
        try {
          const response = await fetch('http://10.0.2.2:5000/createorder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              cart_id: cartId=1,
              user_id: userId=1,
              payment_method: selectedPayment?.label,
              shipping_address:selectedShippingAddress,
              billing_address:selectedbillingAddress,
              total_price: Math.round(totalAmount),
            }),
          });
    
          if (response.ok) {
            Alert.alert('Order Confirmed', 'Your order has been placed successfully!');
            navigation.navigate(nxtscreen);
          } else {
            console.log(response)
            Alert.alert('Order Failed', 'Failed to place the order. Please try again.');
          }
        } catch (error) {
          console.error("Error creating order:", error);
          Alert.alert('Error', 'An error occurred while creating the order.');
        }
      } else {
        if(nxtscreen=='CheckoutShippingAddress'){
          navigation.navigate('CheckoutShippingAddress',{totalAmount:totalAmount})
        }
        else if(nxtscreen== 'CheckoutBillingAddress'){
          navigation.navigate('CheckoutBillingAddress',{totalAmount:totalAmount})
        }
        else{
          navigation.navigate('CheckoutPayment',{totalAmount:totalAmount})
        }

      }
    };
    
  return (
    <View style={styles.topcontainer}>
      <Text style={styles.textleft}>&#8377; {totalAmount}</Text>
      <TouchableOpacity onPress={() => handleCheckout()} >
        <Text style={styles.text}>{txt}</Text>
      </TouchableOpacity>
    </View>
  );
}

