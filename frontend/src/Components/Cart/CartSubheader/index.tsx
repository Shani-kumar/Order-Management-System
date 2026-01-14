



import { Image, StyleSheet, Text, View } from "react-native";
import UltraTech from "../../../assets/UltraTech";
import React from 'react';
import styles from "./styles";

interface CartSubheaderProps {
  item: {
    product_name: string;
    grade: string;
    price: number;
    discount:number;
    net_weight:number;
    image_url:string;
  };
}

const CartSubheader: React.FC<CartSubheaderProps> = ({ item }) => {
  return (
        <View style={styles.topcontainer}>
          <View style={styles.image}>
            <Image 
           style={{
            width: 60,
            height: 60
          }} 
          // source={{ uri: `data:image/png;base64,${item.image_url}` }}
          source={{ uri: `${item.image_url}` }}
        />
          </View>
          <View style={styles.innercontainer}>
            <View>
            <Text>{item.product_name} - {item.grade}  {item.net_weight} kg</Text>
            <Text>{(item.price -(item.price*item.discount/100))}  ₹</Text>
            </View>
            
           
          </View>
        </View>
      );
};

export default CartSubheader;
