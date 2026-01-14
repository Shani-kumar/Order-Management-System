import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home/Home'
import Category from '../Screens/Category/Category'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilterPopup from '../Screens/FilterPopup/FilterPopup';
import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import CheckoutShippingAddress from '../Screens/CheckoutShippingAddress/CheckoutShippingAddress';
import CheckoutBillingAddress from '../Screens/CheckoutBillingAddress/CheckoutBillingAddress';
import CheckoutPayment from '../Screens/CheckoutPayment/CheckoutPayment';
import Cart from '../Screens/Cart/Cart';
import OrderConfirm from '../Screens/OrderConfirm/OrderConfirm';

export type RootStackParamList = {
    Home: undefined;
    Category:{categoryid:number,categoryname:string};
    FilterPopup:undefined;
    ProductDetails:{productid:string}
    CheckoutHome:undefined;
    CheckoutBillingAddress:{totalAmount:number};
    CheckoutShippingAddress:{totalAmount:number};
    CheckoutPayment:{totalAmount:number};
    Cart:undefined;
    OrderConfirm:undefined;
  };
  
  
  
  const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  return (
    
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}} 
      />
      <Stack.Screen name="Category" component={Category} options={{headerShown:false}} />
      <Stack.Screen name="FilterPopup" component={FilterPopup} options={{headerShown:false}}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
      <Stack.Screen name="CheckoutShippingAddress" component={CheckoutShippingAddress}  options={{ title: 'CHECKOUT' }} />
      <Stack.Screen name="CheckoutBillingAddress" component={CheckoutBillingAddress} options={{ title: 'CHECKOUT' }}/>
      <Stack.Screen name="CheckoutPayment" component={CheckoutPayment} options={{ title: 'CHECKOUT' }}/>
      <Stack.Screen name="OrderConfirm" component={OrderConfirm} options={{headerShown:false}} />
      <Stack.Screen name="Cart" component={Cart} options={{title:'Your Cart'}}/>
    </Stack.Navigator>
 
  )
}

export default AppNavigator