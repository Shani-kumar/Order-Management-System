import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import UltraTech from '../../../assets/UltraTech';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { getCartItems } from '../../../redux/slices/CartItemSlice';
import styles from './styles';
import { CartItem } from '../../../redux/models/CartItemsmodel';



interface AddtoCartPopupProps {
  onClose: () => void;
  navigation: NativeStackNavigationProp<RootStackParamList>;
  currentquantity:number;
  product_specification_id:number;
}

export function AddtoCartPopup({ onClose, navigation,currentquantity ,product_specification_id}: AddtoCartPopupProps) {
  const image_url = "https://res.cloudinary.com/dyfszlofw/image/upload/v1731100280/BirlaShakti_obbzvv.png"
  const dispatch = useDispatch<AppDispatch>();
  const { productSpecs, loading, error } = useSelector((state: RootState) => state.productspecs);
  var cartItems = useSelector((state: RootState) => state.cart.items );
  cartItems = cartItems ? cartItems :[];
  const shipping = 500;
  

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const currentcartitem = cartItems.filter((item:CartItem)=> 
    item.product_specification_id == product_specification_id
  );
  // console.log(currentcartitem)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );
  const totalAmount = subtotal + shipping;
  return (
    <View style={styles.popupContainer}>
      <View style={styles.popupHeader}>
        <Text style={styles.popupText}>{currentquantity} Items added to cart!</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productContainer}>
        <View style={styles.productImageContainer}>
          {/* <UltraTech width={60} height={60} /> */}
          <Image 
           style={{
            width: 60,
            height: 60
          }} 
          // source={{ uri: `data:image/png;base64,${productSpecs[0].image_url}` }}
           source={{ uri: `${productSpecs[0].image_url}` }}
          
        />

        </View>
        <View>
          <Text style={styles.productInfoText}>{currentquantity} Items</Text>
          <Text style={styles.productDetailsText}>Show details</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton1} onPress={() => {  navigation.navigate('Cart'); {onClose()}}}>
          <Text style={styles.actionButtonText1}>VIEW CART</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => {navigation.navigate('CheckoutShippingAddress',{totalAmount:totalAmount}); {onClose()} } }>
          <Text style={styles.actionButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
