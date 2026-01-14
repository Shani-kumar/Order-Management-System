

import { SafeAreaView, ScrollView, View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import ProductDetailsImage from '../../Components/ProductDetails/ProductDetailsImage/ProductDetailsImage';
import ProductDetailsHeader from '../../Components/ProductDetails/ProductDetailsHeader/ProductDetailsHeader';
import Productname from '../../Components/ProductDetails/Productname/Productname';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigator/AppNavigator';
import ProductDescription from '../../Components/ProductDetails/ProductDescription/ProductDescription';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductSpecifications } from '../../redux/slices/productspecsSlice';
import { RootState,AppDispatch} from '../../redux/store';
import styles from './styles';

type ProductDetailProp = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export default function ProductDetails({ navigation, route }: ProductDetailProp) {
  const [currentState, setCurrentState] = useState(1);
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [selectedBagSize, setSelectedBagSize] = useState<string>("");

 const currentcartItems = useSelector((state: RootState) => state.cart.items);
 const cart_item_num = currentcartItems ? currentcartItems.length : 0;
//  const cart_item_num =0;
// console.log("product details")

  const { productid } = route.params;
  const dispatch = useDispatch<AppDispatch>();
const { productSpecs, loading, error } = useSelector((state: RootState) => state.productspecs);

useEffect(() => {
  dispatch(fetchProductSpecifications(productid));
}, []);


if (loading) {
  return (
    <View style={styles.centeredView}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );    
}
if (error) {   
  return (
    <View style={styles.centeredView}>
      <Text style={styles.errortext}>Something went wrong at our end!</Text>
    </View>
  );    
  
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
  min_order_quantity: 1,
  max_order_quantity: 10,
  stocks: 0,
  country_of_origin: 'Country',
  id: 0,
  description: 'No description available',
  dimensions: 'N/A',
  image_url:"https://cdn-icons-png.flaticon.com/128/6356/6356587.png"
};
const filteredProduct = productSpecs.find(
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
  min_order_quantity: 1,
  max_order_quantity: 10,
  stocks: 0,
  country_of_origin: 'Country',
  id: 0,
  description: 'No description available',
  dimensions: 'N/A',
  image_url:"https://cdn-icons-png.flaticon.com/128/6356/6356587.png"
};
// console.log(filteredProduct, " filtered products")
//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const response = await fetch(`http://10.0.2.2:5000/productspecs?product_id=${productid}`);
//         const data = await response.json();
//         setProductData(data); 
//         // console.log(data[0])
        
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchProductData();
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }
// console.log(productSpecs[0]," product details")
// console.log("inside product details")
// console.log(productSpecs[0].min_order_quantitiy," product details")
//  console.log(product.image_url)
  return (
    
    <SafeAreaView style={{backgroundColor:'white'}}>
      <ProductDetailsHeader cart_item_num={cart_item_num} navigation={navigation} />
      <ScrollView>
        
        <ProductDetailsImage 
          // items={items}  
          // currentState={currentState} 
          // setCurrentState={setCurrentState} 
          image_url={product.image_url}
        />

       
            <Productname 
          navigation={navigation} 
          selectedBagSize={selectedBagSize}
           selectedGrade={selectedGrade}
           setSelectedBagSize={setSelectedBagSize}
           setSelectedGrade={setSelectedGrade}
          
          
        />
        <ProductDescription  
         description={filteredProduct?.description} 
        country_of_origin={filteredProduct.country_of_origin}
        weight={filteredProduct.net_weight}
        dimensions={filteredProduct.dimensions}
        
        />
      </ScrollView>
    </SafeAreaView>
  )
}


