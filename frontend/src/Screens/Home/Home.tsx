


import { View, SafeAreaView, StyleSheet, FlatList, ScrollView, ActivityIndicator, Text, Image } from 'react-native';
import Header from '../../Components/GlobalComponent/Header/Header';
import FlatCards from '../../Components/Home/FlatCards/FlatCards';
import Searchbar from '../../Components/Home/Searchbar/Searchbar';
import Navigation from '../../Components/Home/Navigation/Navigation';
import Footer from '../../Components/Home/Footer/Footer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigator/AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getCartItems } from '../../redux/slices/CartItemSlice';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import styles from './styles';
import { fetchProductsAsync } from '../../redux/slices/productSlice';
import { fetchCategories } from '../../redux/services/categoryService';
import { serializer } from '../../../metro.config';



type HomeProps = NativeStackScreenProps<RootStackParamList>;
type DataItem = {
  type: string;
  component :React.JSX.Element
};


 interface CartItem {
  product_name: string;
  sku_id: string;
  grade: string;
  quantity: number;
  id: number;
  price: number;
  discount: number;
  net_weight: number;
  total_price: number;
}

const Home= ({ navigation }:HomeProps) => {
  const dispatch= useDispatch<AppDispatch>()
  // const [searchtext,setsearchtext] = useState('');
  const searchtext = useSelector((state: RootState) => state.searchText.searchText);
  const [textsearch, settextsearch] = useState<string>(searchtext);
  

  useEffect(() => {
    settextsearch(searchtext);
  }, []);



  // const handleSearchChange = (value: string) => {
  //   settextsearch(value);
  //   dispatch(setSearchText(value)); // Update the global state
  // };
  var cartItems = useSelector((state:RootState)=> state.cart.items)
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getCartItems());
    }, [])
  );
  const { products, loading,error } = useSelector((state: RootState) => state.product);


  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  useEffect(() => {
    dispatch(fetchCategories()); 
  }, []);


  if (loading) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="red" />
      </View> 
    )
  }
  if (error) {   
    return (
      <View style={styles.centeredView}>
        <View style={styles.errortextcontainer}>
              <Text style={styles.errortext1}>UH-OH</Text>
              <Text style={styles.errortext}>Something went wrong on our end.</Text>
        </View>
        
        <Image
    style={{
      width: "70%",
      height: "70%",
      resizeMode: 'contain', 
    }}
    source={require('../../assets/dogerror.png')} 
  />
      </View>
    )   
  }
  console.log(searchtext)
  
  cartItems = cartItems ? cartItems : [];
  const cart_item_num = cartItems ? cartItems.length : 0;
  const data: DataItem[] = [
   
    { type: 'navigation', component: <Navigation navigation={navigation}  /> },
    { type: 'flatCards', component: <FlatCards navigation={navigation}  /> },
  ];

  const renderItem = ({ item }: { item: DataItem }) => {
    return <View>{item.component}</View>;
  };

return (
    <SafeAreaView style={styles.container}>
      <Header cart_item_num={cart_item_num} navigation={navigation}/>
      <Searchbar />
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
      {/* <ScrollView>
        {
          searchtext == ''?
          <View>
               <Navigation navigation={navigation}   />
          </View>
           :''
        }
         <View>
         <FlatCards navigation={navigation} />
         </View>
         
      </ScrollView> */}

     

      
      <Footer/>
    </SafeAreaView>
  );
};
export default Home;