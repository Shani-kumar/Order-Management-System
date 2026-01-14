

import React, { useCallback, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CartItemdetails from '../../Components/Cart/CartItemdetails';
import CartBilling from '../../Components/Cart/CartBilling.tsx';
import CheckoutFooter from '../../Components/Checkout/CheckoutFooter/CheckoutFooter.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigator/AppNavigator';
import { getCartItems, removeCartItem, updateItemQuantity } from '../../redux/slices/CartItemSlice.tsx'
import { RootState ,AppDispatch} from '../../redux/store';
import styles from './styles.tsx';
import { useFocusEffect } from '@react-navigation/native';


type CartProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Cart: React.FC<CartProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  let cartItems = useSelector((state: RootState) => state.cart.items);
  const shipping = 500;

  useFocusEffect(
    useCallback(() => {
      dispatch(getCartItems());
    }, [dispatch])
  );

 cartItems = cartItems ? cartItems : [];
  const handleRemoveItem = (id: number) => {
    dispatch(removeCartItem(id))
      .then(() => {
        Alert.alert("Item removed", "The item has been removed from the cart.");
      })
      .catch(() => {
        Alert.alert("Error", "Failed to delete item from cart.");
      });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(id);
    } else {
      
      dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    }
  };

  const subtotal = parseFloat(cartItems.reduce(
    (sum, item) => sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  ).toFixed(2));
  const totalAmount = parseFloat((subtotal + shipping).toFixed(2));
  
// console.log(totalAmount)
  return (
    <View style={styles.topcontainer}>
      {cartItems.length === 0 ? (
        <View style={styles.centeredView}>
            <View style={styles.errortextcontainer}>
                  <Text style={styles.errortext}>Oops, looks like you have an empty cart! </Text>

            </View>
            

              <Image
                  style={{
                      width: 300,
                      height: 300,
                      resizeMode: 'contain', 
                    }}
                  source={require('../../assets/emptycartdog.png')} 
              />
         </View>
      ) : (
        <>
          <ScrollView style={styles.innercontainer} showsVerticalScrollIndicator={false}>
            <CartItemdetails
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
            <CartBilling cartItems={cartItems} totalAmount={totalAmount} />
          </ScrollView>
          <CheckoutFooter
              navigation={navigation}
              nxtscreen="CheckoutShippingAddress"
              txt="CHECKOUT"
              totalAmount={totalAmount} cartId={0} userId={0}   />
        </>
      )}
    </View>
  );
};

export default Cart;
