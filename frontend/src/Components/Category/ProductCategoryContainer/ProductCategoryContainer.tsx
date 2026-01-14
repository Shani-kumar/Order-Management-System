import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import { RootState } from '../../../redux/store';
import UltraTech from '../../../assets/UltraTech';
import styles from './styles';

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
  textsearch: string;
};

export default function ProductCategoryContainer({ navigation, categoryId, textsearch }: Props) {
  const { products, loading } = useSelector((state: RootState) => state.product);
  const numColumns = 2;

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {

    const results = products
      .filter((product) => (categoryId ? product.category_id === categoryId : true))
      .filter((product) =>
        product.product_name.toLowerCase().includes(textsearch.toLowerCase())
      );
    setFilteredProducts(results);
  }, [textsearch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const handlePress = (key: string) => {
    navigation.navigate('ProductDetails', { productid: key });
  };

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={styles.topcontainer}>
        <View style={styles.image}>
          {/* <UltraTech width={128} height={128} />
           */}
           <Image 
          style={{
            width: '100%',
            height: 128,
            resizeMode: "contain"
          }}
          // source={{ uri: `data:image/png;base64,${item.image_url}` }}
          source={{ uri: `${item.image_url}` }}
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
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
    />
  );
}
