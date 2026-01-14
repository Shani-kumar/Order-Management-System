
import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './src/Screens/ProductDetails/ProductDetails';
import CheckoutShippingAddress from './src/Screens/CheckoutShippingAddress/CheckoutShippingAddress';
import CheckoutBillingAddress from './src/Screens/CheckoutBillingAddress/CheckoutBillingAddress';
import CheckoutPayment from './src/Screens/CheckoutPayment/CheckoutPayment';
import OrderConfirm from './src/Screens/OrderConfirm/OrderConfirm';
import AppNavigator from './src/Navigator/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export type RootStackParamList = {
  Home: undefined;
  Category:undefined;
  FilterPopup:undefined;
  ProductDetails:{productname:string};
  CheckoutHome:undefined;
  CheckoutBillingAddress:undefined;
  CheckoutShippingAddress:undefined;
  CheckoutPayment:undefined;
  Cart:undefined;
  OrderConfirm:undefined;
};



const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {

 
  return (
    // <Home/>
    // <Category/>
// <OrderConfirm/>
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName='Home'>
  //     <Stack.Screen
  //       name="Home"
  //       component={Home}
  //       options={{headerShown:false}} 
  //     />
  //     <Stack.Screen name="Category" component={Category} options={{headerShown:false}} />
  //     <Stack.Screen name="FilterPopup" component={FilterPopup} options={{headerShown:false}}/>
  //     <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
  //     <Stack.Screen name="CheckoutShippingAddress" component={CheckoutShippingAddress} />
  //     <Stack.Screen name="CheckoutBillingAddress" component={CheckoutBillingAddress} />
  //     <Stack.Screen name="CheckoutPayment" component={CheckoutPayment} />
  //     <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
  //     <Stack.Screen name="Cart" component={Cart}/>
  //   </Stack.Navigator>
  // </NavigationContainer>
 
  <NavigationContainer>
     <Provider store={store}>
      <AppNavigator/>
      </Provider>
  </NavigationContainer>
  
  )
}