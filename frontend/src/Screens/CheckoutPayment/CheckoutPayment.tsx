import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigator/AppNavigator'
import CheckoutFooter from '../../Components/Checkout/CheckoutFooter/CheckoutFooter'
import CheckoutItem from '../../Components/Checkout/CheckoutItem/CheckoutItem'
import Paymentmode from '../../Components/Checkout/Paymentmode/Paymentmode'

type CheckoutPaymentprop =NativeStackScreenProps<RootStackParamList,'CheckoutPayment'>;

export default function CheckoutPayment({navigation,route}:CheckoutPaymentprop) {
  const {totalAmount} = route.params
  return (
    <View style={{alignItems:'center', flex:1,backgroundColor:'white'}}>
     <CheckoutItem nxtscreen='OrderConfirm'/>
     <Paymentmode/>
     <CheckoutFooter navigation={navigation} nxtscreen={'OrderConfirm'} txt={"PLACE ORDER"} totalAmount={totalAmount} cartId={1} userId={0}/>
    </View>
  )
}