// import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
// import React from 'react'

// import ProductContainer from './ProductContainer';
// import UltraTech from '../../../assets/UltraTech';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../../App';
// interface FlatCardsProps {
//   navigation: NativeStackNavigationProp<RootStackParamList>;
// }
// function FlatCards  ({navigation}:FlatCardsProps) {

//   const items = [
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '1',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '2',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '3',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '4',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '5',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '6',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '7',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '8',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '9',comp:<UltraTech width={128} height={128}/> },
//     { description: "Ultra Tech cement",  total_price:320, discounted_price:160 , sale:true, key: '10',comp:<UltraTech width={128} height={128}/> },
// ];
//   return (
//     <View style={styles.topcontainer}>
//       <Text style={styles.headingText}> Top Deals for You</Text>
//             <View >
//                   <ProductContainer itemslist={items} navigation={navigation} />
//             </View>
//     </View>
//   )
// }

// export default FlatCards


// const styles = StyleSheet.create({
//   topcontainer: {
//     margin: 8,
//     padding: 10,
//   },
//   headingText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'black',
//     paddingHorizontal: 8,
//   },
// });


//------------------------------------------------

// const styles = StyleSheet.create({
//   topcontainer:{
//     margin:10,
//     padding:10
//   },
//   headingText:{
//     fontSize:15,
//     fontWeight:'bold',
//     color:'black'
// ,    paddingHorizontal:8
//   },
//   container:{
//     flex:1,
//     flexWrap:'wrap',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     margin:2
//   },
  
 
//   imageContainer: {
//     width: '20%', 
//     height: 100,
//     marginVertical:8 , 
//   },
//   image: {
//     width: '100%', 
//     height: '100%', 
//     borderRadius: 5, 
//   },

 
// });


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import ProductContainer from './ProductContainer';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../Navigator/AppNavigator';
// import UltraTech from '../../../assets/UltraTech';

// interface FlatCardsProps {
//   navigation: NativeStackNavigationProp<RootStackParamList>;
//   searchtext:string;
// }

// function FlatCards({ navigation,searchtext }: FlatCardsProps) {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
  

//   useEffect(() => {
//     fetch('http://10.0.2.2:5000/products')
//       .then(response => response.json())
//       .then(data => {
//         const formattedItems = data.map((item: any) => {
//           const total_price = item.price;
//           const discount = item.discount;
//           const discounted_price = total_price - (total_price * discount / 100); // Calculate discounted price

//           return {
//             description: item.product_name,  // Assuming 'product_name' is in the API response
//             total_price: total_price,
//             discounted_price: discounted_price,
//             sale: item.sale,
//             key: item.id.toString(),
//             comp: <UltraTech width={128} height={128} />
//           };
//         });
//         setItems(formattedItems);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View style={styles.topcontainer}>
//       <Text style={styles.headingText}>Top Deals for You</Text>
//       <View>
//         <ProductContainer itemslist={items} navigation={navigation} />
//       </View>
//     </View>
//   );
// }

// export default FlatCards;

// const styles = StyleSheet.create({
//   topcontainer: {
//     margin: 8,
//     padding: 10,
//   },
//   headingText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'black',
//     paddingHorizontal: 8,
//   },
// });






// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import ProductContainer from './ProductContainer';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../Navigator/AppNavigator';
// import UltraTech from '../../../assets/UltraTech';

// interface FlatCardsProps {
//   navigation: NativeStackNavigationProp<RootStackParamList>;
//   searchtext: string;
// }

// function FlatCards({ navigation, searchtext }: FlatCardsProps) {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filteredItems, setFilteredItems] = useState([]);

//   useEffect(() => {
//     fetch('http://10.0.2.2:5000/products')
//       .then((response) => response.json())
//       .then((data) => {
//         const formattedItems = data.map((item: any) => {
//           const total_price = item.price;
//           const discount = item.discount || 0; // Fallback to 0 if discount is undefined
//           const discounted_price = total_price - (total_price * discount) / 100; // Calculate discounted price

//           return {
//             description: item.product_name, // Assuming 'product_name' is in the API response
//             total_price: total_price,
//             discounted_price: discounted_price,
//             sale: item.sale,
//             key: item.id.toString(),
//             comp: <UltraTech width={128} height={128} />,
//           };
//         });
//         setItems(formattedItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (searchtext !== '') {
//       const results = items.filter((item:any) =>
//         item.description.toLowerCase().includes(searchtext.toLowerCase())
//       );
//       setFilteredItems(results);
//     } else {
//       setFilteredItems(items); // Reset to all items if search text is empty
//     }
//   }, [searchtext, items]); // Re-run this effect when either searchtext or items change

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View style={styles.topcontainer}>
//       <Text style={styles.headingText}>Top Deals for You</Text>
//       <View>
//         <ProductContainer itemslist={filteredItems} navigation={navigation} />
//       </View>
//     </View>
//   );
// }

// export default FlatCards;

// const styles = StyleSheet.create({
//   topcontainer: {
//     margin: 8,
//     padding: 10,
//   },
//   headingText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'black',
//     paddingHorizontal: 8,
//   },
// });


import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import ProductContainer from '../ProductContainer/ProductContainer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../../redux/slices/productSlice'; 
import { AppDispatch, RootState } from '../../../redux/store';
import styles from './styles';

interface FlatCardsProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  // searchtext: string;
}

function FlatCards({ navigation }: FlatCardsProps) {
  const searchtext = useSelector((state:RootState)=> state.searchText.searchText)
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading,error } = useSelector((state: RootState) => state.product);
  

  // useEffect(() => {
  //   dispatch(fetchProductsAsync());
  // }, []);
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
        <Text>Error loading product specifications</Text>
      </View>
    );    
    
  }
// console.log("inside flatcard")


  return (
    <View style={styles.topcontainer}>
      {searchtext =='' ?
      <View style={styles.headingcontainer}>
         <Text style={styles.headingText}>Top Deals for You</Text>
      </View> :''}
      <View style={styles.productcontainer}>
        <ProductContainer navigation={navigation} searchtext={searchtext} categoryId={null}/>
      </View>
    </View>
  );
}

export default FlatCards;
