import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigator/AppNavigator'
import CheckoutItem from '../../Components/Checkout/CheckoutItem/CheckoutItem'
import OrderConfirmdetails from '../../Components/Checkout/OrderConfirmdetails/OrderConfirmdetails'
import CheckoutFooter from '../../Components/Checkout/CheckoutFooter/CheckoutFooter'
import Checkoutheader from '../../Components/Checkout/Checkoutheader/Checkoutheader'
import axios from 'axios'


type CheckoutPaymentprop ={
    navigation:NativeStackNavigationProp<RootStackParamList>;
}
export default function OrderConfirm({navigation}:CheckoutPaymentprop) {

  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:5000/getorders');
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  // console.log(orders[0]?.id)


  return (
    <View style={{alignItems:'center', flex:1, backgroundColor:'white'}}>
      <Checkoutheader navigation={navigation}/>
     <CheckoutItem nxtscreen={""}/>
     <OrderConfirmdetails navigation ={navigation} orderId={orders[0]?.id}/>
     {/* <CheckoutFooter navigation ={navigation} nxtscreen={'CheckoutBillingAddress'} txt={"CONTINUE"}/> */}
    </View>
  )
}
