

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import { RootState } from '../../../redux/store';
import { ActivityIndicator } from 'react-native';
import styles from './styles';
import { Image } from 'react-native';
import Navigation from '../Navigation/Navigation';
import base64 from 'react-native-base64'



interface Product {
  id: string;
  product_name: string;
  price: number;
  discount: number;
  sale: boolean;
  category_id: number;
  image_url:string;
}

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  categoryId: number | null;
  searchtext:string;
};

export default function ProductContainer({ navigation, categoryId,searchtext }: Props) {
  const { products, loading, error } = useSelector((state: RootState) => state.product);
  const numColumns = 2;


 const [filteredItems, setFilteredItems] = useState(products);
  

 

  useEffect(() => {
    if (searchtext !== '') {
      const results = products.filter((item: Product) =>
        item.product_name.toLowerCase().includes(searchtext.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems(products); 
    }
  }, [searchtext]);


  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // console.log(categoryId);
  // console.log(filteredItems)
  // console.log("product contaienr " , searchtext)
  // console.log("inside productcontainer")
  const filteredProducts = categoryId
    ? filteredItems.filter((product) => product.category_id === categoryId)
    : filteredItems;

// console.log(products )
  const handlePress = (key: string) => {
    navigation.navigate('ProductDetails', { productid: key });
    
  
  };


//  const uri = `data:image/png;base64,${image}`;

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.topcontainer}>
        <View style={styles.image}>
          {/* <UltraTech width={128} height={128} /> */}
          <Image 
          style={{
            width: '100%',
            height: 128,
            resizeMode: "contain"
          }} 
          source={{ uri: item.image_url }}
          //  source={{ uri: `data:image/webp;base64,${item.image_url}` }}
        />
       
        </View>
        <View>
        <Text style={styles.textdesc}>{item.product_name}</Text>
        <View style={styles.container}>
          <Text style={styles.after_discount_price}>
            &#8377; {Math.floor(item.price - (item.discount * item.price / 100))}
          </Text>
          <Text style={styles.total_price}>&#8377; {item.price}</Text>
          <Text style={styles.discount_percent}>{item.sale ? 'SALE' : ''}</Text>
        </View>
        </View>

      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
    // ListHeaderComponent={Navigation}
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
    />
  );
}




