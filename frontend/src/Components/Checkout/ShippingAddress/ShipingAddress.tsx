import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ticked from '../../../assets/ticked';
import Unticked from '../../../assets/Unticked';
import { fetchshippingAddresses } from '../../../redux/services/shippingAddressService'; 
import { RootState, AppDispatch } from '../../../redux/store'; 
import { setSelectedAddress } from '../../../redux/slices/selectedAddressSlice';
import styles from './styles';

interface Address {
  id: number;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  label: string;
  address_line1: string;
}

export default function ShippingAddress() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: addresses, loading, error } = useSelector((state: RootState) => state.shippingAddress); 
  const [localSelectedAddress, setLocalSelectedAddress] = useState<number | null>(null);

  

  useEffect(() => {
    if (addresses.length > 0 && localSelectedAddress === null) {
      const defaultAddressId = addresses[0].id;
      setLocalSelectedAddress(defaultAddressId); 
      dispatch(setSelectedAddress(defaultAddressId)); 
    }
  }, [addresses]);


  return (
    <View style={styles.container}>
      <View style={styles.topheading}>
        <View style={styles.topheadingnumtextcont}>
          <Text style={styles.topheadingnumtext}>1</Text>
        </View>
        <Text style={styles.title}>Select a Shipping Address</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {addresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            style={[
              styles.addressItem,
              localSelectedAddress === address.id && styles.selectedAddress,
            ]}
            onPress={() => {
              setLocalSelectedAddress(address.id); 
              dispatch(setSelectedAddress(address.id));
            }}
          >
            <View style={styles.addressDetails}>
              <Text style={styles.label}>{address.label}</Text>
              <Text style={styles.address}>
                {address.address_line1}, {address.city}, {address.state}, {address.zip_code}, {address.country}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              {localSelectedAddress === address.id ? <Ticked /> : <Unticked />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
