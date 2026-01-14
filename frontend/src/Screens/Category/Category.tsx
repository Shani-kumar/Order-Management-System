// import { View, Text, SafeAreaView, ScrollView } from 'react-native'
// import React from 'react'
// import Header from '../Components/GlobalComponent/Header'
// import Searchbar from '../Components/Home/Searchbar'
// import Footer from '../Components/Home/Footer'
//  import Products from '../Components/Category/Products'
// import CategoryHeader from '../Components/GlobalComponent/CategoryHeader'
// import Navigation from '../Components/Home/Navigation'
// import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../Navigator/AppNavigator'

// type Categoryprops= NativeStackScreenProps<RootStackParamList,'Category'>
  

// export default function Category({navigation, route}:Categoryprops) {
//   const { categoryid,categoryname } = route.params;
//   // console.log(categoryid)
//   return (
//    <SafeAreaView style={{flex:1}} >
// {/* <ScrollView> */}
// <CategoryHeader cart_item_num={3}  categoryname={categoryname}/>
//         <Searchbar/>
//         <Products navigation={navigation}/>
        
// {/* </ScrollView> */}
        
//      <Footer/>   
//    </SafeAreaView>
//   )
// }


import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import Header from '../../Components/GlobalComponent/Header/Header';
import Searchbar from '../../Components/Home/Searchbar/Searchbar';
import Footer from '../../Components/Home/Footer/Footer';
import Products from '../../Components/Category/Products/Products';
import CategoryHeader from '../../Components/GlobalComponent/CategoryHeader/CategoryHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigator/AppNavigator';
import CategorySearchbar from '../../Components/Category/CategorySearchbar/CategorySearchbar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getCartItems } from '../../redux/slices/CartItemSlice';
import { fetchCategories } from '../../redux/services/categoryService';
import styles from './styles';

type CategoryProps = NativeStackScreenProps<RootStackParamList, 'Category'>;



export default function Category({ navigation, route }: CategoryProps) {
  const cartItems = useSelector((state: RootState) => state.cart.items );
  const cart_item_num = cartItems ? cartItems.length : 0;
  const { categoryid, categoryname} = route.params;
    const searchtext = useSelector((state:RootState)=> state.searchText.searchText);
  
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [textsearch, settextsearch] = useState('')

  // useEffect(() => {
  //   fetch(`http://10.0.2.2:5000/productbycategory?category_id=${categoryid}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       // console.error('Error fetching products:', error);
  //     });
  // }, []);
  const number_of_items= products.length;
  // console.log(number_of_items)

  return (
    <SafeAreaView style={styles.container}>
      <CategoryHeader cart_item_num={cart_item_num} categoryname={categoryname} categoryId={categoryid} navigation={navigation}/>
      <CategorySearchbar settextsearch={settextsearch} />
      <Products navigation={navigation}  categoryId={categoryid} textsearch={textsearch}/>
      <Footer />
    </SafeAreaView>
  );
}
