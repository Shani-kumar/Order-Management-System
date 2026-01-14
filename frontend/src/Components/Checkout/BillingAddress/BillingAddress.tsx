



import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ticked from '../../../assets/ticked';
import Unticked from '../../../assets/Unticked';
import { fetchbillingAddresses } from '../../../redux/services/billingAddressService';
import { RootState, AppDispatch } from '../../../redux/store';
import { setselectedbilling } from '../../../redux/slices/selectedbillingSlice'; // Import billing address action
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

export default function BillingAddress() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: billingAddresses, loading, error } = useSelector((state: RootState) => state.billingAddress);
  const [localSelectedBillingAddress, setLocalSelectedBillingAddress] = useState<number | null>(null);


  useEffect(() => {
    if (billingAddresses.length > 0 && localSelectedBillingAddress === null) {
      const defaultAddressId = billingAddresses[0].id;
      setLocalSelectedBillingAddress(defaultAddressId); 
      dispatch(setselectedbilling(defaultAddressId)); 
    }
  }, [billingAddresses]);



  return (
    <View style={styles.container}>
      <View style={styles.topheading}>
        <View style={styles.topheadingnumtextcont}>
          <Text style={styles.topheadingnumtext}>2</Text>
        </View>
        <Text style={styles.title}>Select a Billing Address</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {billingAddresses.map((address) => (
          <TouchableOpacity
            key={address.id}
            style={[
              styles.addressItem,
              localSelectedBillingAddress === address.id && styles.selectedAddress,
            ]}
            onPress={() => {
              setLocalSelectedBillingAddress(address.id); 
              dispatch(setselectedbilling(address.id)); 
            }}
          >
            <View style={styles.addressDetails}>
              <Text style={styles.label}>{address.label}</Text>
              <Text style={styles.address}>
                {address.address_line1}, {address.city}, {address.state}, {address.zip_code}, {address.country}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              {localSelectedBillingAddress === address.id ? <Ticked /> : <Unticked />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
