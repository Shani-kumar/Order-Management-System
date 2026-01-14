import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Runningboy from '../../../assets/Runningboy'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Navigator/AppNavigator'
import styles from './styles'


type Orderconfirmprop={
    navigation:NativeStackNavigationProp<RootStackParamList>;
    orderId:number
  }

export default function OrderConfirmdetails({navigation, orderId}:Orderconfirmprop) {
  
  return (
    <View style={styles.topcontainer}>
        <View style={styles.innercontainer}>
            <Runningboy/>
        <View style={styles.details}>
            <Text>Thank you Shani! </Text>
            <Text>Your order number is {orderId}</Text>
            <Text style={styles.defaulttext} numberOfLines={2}> We've received your order. We will send you an email once it's confirmed.</Text>
        </View>
        </View>
      
      <TouchableOpacity style={styles.button} onPress={()=> navigation.popToTop()}>
        <Text style={styles.buttontext}>CONTINUE SHOPPING</Text>
      </TouchableOpacity>
    </View>
  )
}
