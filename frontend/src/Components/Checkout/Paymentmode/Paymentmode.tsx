
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Ticked from '../../../assets/ticked';
import Unticked from '../../../assets/Unticked';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setSelectedPayment } from '../../../redux/slices/paymentmethodSlice';
import styles from './styles';

export default function PaymentMode() {
  const dispatch = useDispatch();
  const selectedPayment = useSelector((state: RootState) => state.paymentmethod.selectedPayment);

  const paymentOptions = [
    {
      id: '1',
      label: 'Credit Card',
      description: 'Available Credit: $1500',
    },
    {
      id: '2',
      label: 'Cash on Delivery',
      description: '',
    },
  ];

  const handleSelectPayment = (option: { id: string; label: string }) => {
    dispatch(setSelectedPayment(option));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topheading}>
        <View style={styles.topheadingnumtextcont}>
          <Text style={styles.topheadingnumtext}>3</Text>
        </View>
        <View>
          <Text style={styles.title}>Select Payment Mode</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {paymentOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.paymentItem,
              selectedPayment?.id === option.id && styles.selectedPayment,
            ]}
            onPress={() => handleSelectPayment({ id: option.id, label: option.label })}
          >
            <View style={styles.paymentDetails}>
              <Text style={styles.label}>{option.label}</Text>
              {option.description ? (
                <Text style={styles.description}>{option.description}</Text>
              ) : null}
            </View>
            <View style={styles.iconContainer}>
              {selectedPayment?.id === option.id ? <Ticked /> : <Unticked />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
