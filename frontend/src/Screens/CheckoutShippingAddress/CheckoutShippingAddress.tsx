import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigator/AppNavigator'
import ShipingAddress from '../../Components/Checkout/ShippingAddress/ShipingAddress'
import CheckoutFooter from '../../Components/Checkout/CheckoutFooter/CheckoutFooter'
import CheckoutItem from '../../Components/Checkout/CheckoutItem/CheckoutItem'
import { fetchshippingAddresses } from '../../redux/services/shippingAddressService'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import styles from './styles'

type CheckoutShippingAddressprop =NativeStackScreenProps<RootStackParamList,'CheckoutShippingAddress'>

export default function CheckoutShipingAddress({navigation,route}:CheckoutShippingAddressprop) {
  const dispatch = useDispatch<AppDispatch>();
  const { items: addresses, loading, error } = useSelector((state: RootState) => state.shippingAddress); 

  useEffect(() => {
    dispatch(fetchshippingAddresses()); 
  }, [dispatch]);
  
  const {totalAmount} = route.params;
  console.log(totalAmount)
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
    <View style={{alignItems:'center', flex:1, backgroundColor:'white'}}>
     <CheckoutItem nxtscreen={'CheckoutBillingAddress'}/>
     <ShipingAddress/>
     <CheckoutFooter navigation={navigation} nxtscreen={'CheckoutBillingAddress'} txt={"CONTINUE"} cartId={1} userId={1} totalAmount={totalAmount}   />
    
    </View>
  )
}