import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';


type ProductquantityProps ={
  price:number;
  min_order_quantity:number;
  max_order_quantity:number;
  stocks:number;
  currentquantity:number;
  setcurrentquantity:(value:number)=>void;
}

export default function ProductQuantity({price,min_order_quantity,max_order_quantity,stocks,currentquantity,setcurrentquantity}:ProductquantityProps) {
  const [quantity, setQuantity] = useState(min_order_quantity); 
  var pricePerItem  = price; 

  const handleIncrement = () => {
    setQuantity(prevQuantity => (prevQuantity < max_order_quantity ? (prevQuantity + 1): prevQuantity));
    
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > min_order_quantity ? prevQuantity - 1 : min_order_quantity)); 

  };
  // console.log(min_order_quantity, " min order ")
  // console.log("product quantity")
  useEffect(()=>{
      setQuantity(min_order_quantity);
  },[min_order_quantity])
  useEffect(()=>{
    setcurrentquantity(quantity)
  
  },[quantity])


  const totalValue = parseFloat((quantity * pricePerItem).toFixed(2))

  return (
    <View style={styles.topcontainer}>
       <View style={styles.containerstocks}>
        <View>
          <Text>In Stock</Text>
          <Text>{stocks}</Text>
        </View>
        <View>
          <Text>Min Order Qty</Text>
          <Text>{min_order_quantity}</Text>
        </View>
        <View>
          <Text>Max Order Qty</Text>
          <Text>{max_order_quantity}</Text>
        </View>
    
    
    
    </View>
          <View style={styles.container}>
      <Text style={styles.label}>Quantity:</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Value:</Text>
        <Text style={styles.totalValue}> &#8377; {totalValue}</Text>
      </View>
      
    </View>
   
    </View>
  
  );
}
