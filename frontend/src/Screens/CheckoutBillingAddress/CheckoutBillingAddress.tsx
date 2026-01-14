import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigator/AppNavigator'
import ShipingAddress from '../../Components/Checkout/ShippingAddress/ShipingAddress'
import CheckoutFooter from '../../Components/Checkout/CheckoutFooter/CheckoutFooter'
import CheckoutItem from '../../Components/Checkout/CheckoutItem/CheckoutItem'
import BillingAddress from '../../Components/Checkout/BillingAddress/BillingAddress'
import { useDispatch, useSelector } from 'react-redux'
import { fetchbillingAddresses } from '../../redux/services/billingAddressService'
import { AppDispatch, RootState } from '../../redux/store'
import styles from './styles'

type CheckoutBillingAddressprop =NativeStackScreenProps<RootStackParamList,'CheckoutBillingAddress'>;

export default function CheckoutBillingAddress({navigation, route}:CheckoutBillingAddressprop) {
  const {totalAmount} = route.params;

  const dispatch = useDispatch<AppDispatch>();
  const { items: billingAddresses, loading, error } = useSelector((state: RootState) => state.billingAddress);

  useEffect(() => {
    dispatch(fetchbillingAddresses());
  }, [dispatch]);
  if (loading) {
    return(
    <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="red" />
    </View> 
    )
  }

  if (error) {
    return (
    <View style={styles.centeredView}> 
       <Text style={styles.errorText}>{error}</Text>
      </View>
    )
  }
  return (
    <View style={{alignItems:'center', flex:1,backgroundColor:'#FFFFFF'}}>
     <CheckoutItem nxtscreen={'CheckoutPayment'}/>
     <BillingAddress/>
     <CheckoutFooter navigation={navigation} nxtscreen={'CheckoutPayment'} txt={"CONTINUE"} totalAmount={totalAmount} cartId={0} userId={0}  />
    </View>
  )
}