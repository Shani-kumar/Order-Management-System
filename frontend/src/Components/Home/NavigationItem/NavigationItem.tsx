

import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import Category from '../../../Screens/Category/Category';
import styles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

type Item = {
    name: string;
    key: number;
    comp:React.JSX.Element
};

type Props = {
    itemslist: Item[];
    navigation:NativeStackNavigationProp<RootStackParamList>;
    // setsearchtext:(value: string) => void;
    // searchtext:string;
};

export default function NavigationItem({ itemslist,navigation }: Props){
    //   const searchtext = useSelector((state:RootState)=> state.searchText.searchText);
    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Category' , {categoryid:item.key, categoryname:item.name})}}>
            <View style={styles.iconContainer}>
                {item.comp}
            </View>
            </TouchableOpacity>
            
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.parentcontainer}>
            <FlatList
                data={itemslist}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
