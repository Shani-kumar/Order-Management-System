import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CementNavIcon from '../../../assets/CementIcon'
import UltraTech from '../../../assets/UltraTech'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import styles from './styles'
import Navigation from '../../Home/Navigation/Navigation'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Navigator/AppNavigator'

type CheckoutItemprop ={
  nxtscreen:string
}
export default function CheckoutItem({nxtscreen}:CheckoutItemprop) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  // const dispatch = useDispatch<AppDispatch>();
  var cartItems = useSelector((state: RootState) => state.cart.items);
  const shipping = 500;

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, [dispatch]);
//  cartItems = cartItems ? cartItems : [];
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price - (item.price * item.discount) / 100) * item.quantity,
    0
  );
  const image_url = cartItems[0].image_url;
  const totalAmount = subtotal + shipping;
  const totalitems = cartItems.length
  const totalproducts = cartItems.reduce(
    (sum,item)=> sum +  item.quantity,0
  )
  function handleclick() {
    if(nxtscreen==""){
        console.log("show details clicked order confirm page")
    }
    else{
      navigation.navigate('Cart')
    }
  }

  return (
    <View style={styles.topcontainer}>
    <View style={styles.leftcontainer}>
      <View style={styles.leftcontainerimg}>
       {/* <UltraTech width={80} height={80}/> */}
       <Image 
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain"
          }} 
          source={{ uri: `${image_url}` }}
          //  source={{ uri: `data:image/png;base64,${image_url}` }}
        />
      </View>
      
      <View style={styles.leftcontainertext}>
        <Text style={{color:'black'}}>{totalproducts} Items</Text>
        <TouchableOpacity onPress={()=> {handleclick()}}>
          {
            nxtscreen != "" ? <Text>show details</Text>:<Text>On your way</Text>
          }
        
        </TouchableOpacity>
       
    </View>
      </View>
      <Text style={{color:'black'}}> &#8377; {totalAmount}</Text>
      
    </View>
  )
}
