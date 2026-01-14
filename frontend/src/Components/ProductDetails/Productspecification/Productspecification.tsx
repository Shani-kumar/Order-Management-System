


import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import styles from './styles';

const data: { [key: string]: string[] } = {
  Grade: ["PPC", "OPC 33", "OPC 43", "OPC 53"],
  BagSize: ["50", "100"],
};

interface ProductSpecificationProp{
  setSelectedGrade:(value:string)=>void;
  setSelectedBagSize:(value:string)=>void;
  selectedGrade:string;
  selectedBagSize:string;
}

export default function ProductSpecification({selectedGrade, selectedBagSize, setSelectedGrade,setSelectedBagSize}: ProductSpecificationProp) {
  const { productSpecs, loading, error } = useSelector((state: RootState) => state.productspecs);

  // const [selectedGrade, setSelectedGrade] = useState<string>("");
  // const [selectedBagSize, setSelectedBagSize] = useState<string>("");

  // const filteredProduct = productSpecs.find(
  //   (spec) => spec.grade === selectedGrade && String(spec.net_weight) === selectedBagSize
  // ) || {
  //   sku_id: '',
  //   product_name: 'Product Name',
  //   brand: 'Brand',
  //   price: 0,
  //   discount: 0,
  //   sale: false,
  //   grade: '',
  //   net_weight: 0,
  //   min_order_quantity: 1,
  //   max_order_quantity: 10,
  //   stocks: 0,
  //   country_of_origin: 'Country',
  //   id: 0,
  //   description: 'No description available',
  //   dimensions: 'N/A',
  // };

  useEffect(() => {
    if (productSpecs.length > 0) {
      setSelectedGrade(productSpecs[0].grade);
      setSelectedBagSize(String(productSpecs[0].net_weight));
    }
  }, []);

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />
  // }

  // if (error) {
  //   return <Text style={styles.errortext}>Error loading product specifications: {error}</Text>
  // }
// console.log("product specifications")
  function handleClick(key: string, value: string) {
    if (key === 'Grade') {
      setSelectedGrade(value);
    } else {
      setSelectedBagSize(value);
    }
  }

  return (
    <View style={styles.container}>
      {Object.keys(data).map((key) => (
        
        <View key={key} style={styles.specContainer}>
          <Text style={styles.specTitle}>{key}:</Text>
          <View style={styles.valuesContainer}>
            {data[key].map((value, index) => (
              <TouchableOpacity 
                key={index} 
                onPress={() => handleClick(key, value)} 
                style={[
                  styles.valueContainer,
                  (key === 'Grade' && value === selectedGrade) || (key === 'BagSize' && value === selectedBagSize) 
                    ? styles.selectedValue 
                    : null
                ]}
              >
                <Text style={styles.value}>
                  {value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
