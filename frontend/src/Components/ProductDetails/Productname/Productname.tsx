


import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Review from '../../../assets/Review'
import Productspecification from '../Productspecification/Productspecification';
import Productquantity from '../Productquantity/Productquantity';
import Productaddtocart from '../Productaddtocart/Productaddtocart';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ActivityIndicator } from 'react-native';
import styles from './styles';

type Productnameprop = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  setSelectedGrade:(value:string)=>void;
  setSelectedBagSize:(value:string)=>void;
  selectedGrade:string;
  selectedBagSize:string;
};
interface Productspec{
  sku_id:string;
  product_name: string;
  brand: string;
  price: number; 
  discount: number; 
  sale: boolean;
  grade:string;
  net_weight:number;
  min_order_quantitiy:number;
  max_order_quantitiy:number;
  stocks:number;
  country_of_origin:string;
  id:number;
  description:string;
  dimensions:string;
}

  export default function Productname({ navigation,selectedGrade, selectedBagSize, setSelectedGrade,setSelectedBagSize}:Productnameprop) {
  
  const { productSpecs, loading, error } = useSelector((state: RootState) => state.productspecs);
  const [currentquantity,setcurrentquantity]= useState(1)
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }
  
  if (error) {
    return <Text>Error loading product specifications: {error}</Text>
  }
  const product = productSpecs[0] || {
    sku_id: '',
    product_name: 'Product Name',
    brand: 'Brand',
    price: 0,
    discount: 0,
    sale: false,
    grade: '',
    net_weight: 0,
    min_order_quantitiy: 1,
    max_order_quantitiy: 10,
    stocks: 0,
    country_of_origin: 'Country',
    id: 0,
    description: 'No description available',
    dimensions: 'N/A',
  };
  const filteredProduct:Productspec = productSpecs.find(
    (spec) => spec.grade === selectedGrade && String(spec.net_weight) === selectedBagSize
  ) || {
    sku_id: '',
    product_name: 'Product Name',
    brand: 'Brand',
    price: 0,
    discount: 0,
    sale: false,
    grade: '',
    net_weight: 0,
    min_order_quantitiy: 1,
    max_order_quantitiy: 10,
    stocks: 0,
    country_of_origin: 'Country',
    id: 0,
    description: 'No description available',
    dimensions: 'N/A',
  };
  const discountAmount = parseFloat(((filteredProduct.price * filteredProduct?.discount) / 100).toFixed(2));

  const discountedPrice = parseFloat((filteredProduct.price - discountAmount).toFixed(2)); 
  // console.log("inside productname ")
  return (
    <ScrollView style={styles.topcontainer}>
      <View style={styles.innercontainer}>
        <View style={styles.namecontainer}>
          <Text style={styles.namecontainertextleft}>SKU ID   {filteredProduct.sku_id}</Text>
          <Text style={styles.namecontainertextleft}>Brand  {filteredProduct.brand}</Text>
        </View>
        <Text style={styles.headingtext}>{filteredProduct.product_name}</Text>
        <View style={{marginLeft:-4}}>
        <Review />
        </View>
        
        <View style={styles.container}>
          <Text style={styles.after_disscount_price}>&#8377; {discountedPrice}</Text>
          <Text style={styles.total_price}>&#8377; {filteredProduct.price}</Text>
          {filteredProduct?.sale && <Text style={styles.discount_percent}>SALE</Text>}
        </View>
      </View>
      <Productspecification selectedBagSize={selectedBagSize} selectedGrade={selectedGrade} setSelectedBagSize={setSelectedBagSize} setSelectedGrade={setSelectedGrade}/>
      <Productquantity price={discountedPrice} min_order_quantity={filteredProduct.min_order_quantitiy} max_order_quantity={filteredProduct.max_order_quantitiy} stocks={filteredProduct?.stocks} currentquantity={currentquantity} setcurrentquantity={setcurrentquantity}/>
      <Productaddtocart navigation={navigation} cartId={1} productSpecificationId={filteredProduct?.id} currentquantity={currentquantity}/>
      
    </ScrollView>
  );
}
