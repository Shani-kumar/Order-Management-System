

import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Paint_roller from '../../../assets/Paint_roller';
import Spray_can from '../../../assets/Spray_can';
import NavigationItem from '../NavigationItem/NavigationItem';
import CementNavIcon from '../../../assets/CementIcon';
import Steel from '../../../assets/Steel';
import { fetchCategories } from '../../../redux/services/categoryService';
import { RootState ,AppDispatch} from '../../../redux/store';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import styles from './styles';

interface NavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  // setsearchtext:(value: string) => void;
  // searchtext:string;
}

interface category{
  id:number;
  name:string;

}
interface formattedItems{
  key:number;
  name:string;
  comp:React.JSX.Element
}
// console.log("inside navigations")
const Navigation: React.FC<NavigationProp> = ({ navigation }) => {
  // const dispatch = useDispatch<AppDispatch>();
  const { items,loading, error } = useSelector((state: RootState) => state.category);
  const searchtext = useSelector((state:RootState)=> state.searchText.searchText)

  if (loading) {
    return (
      <View >
        <ActivityIndicator size="large" color="red" />
      </View>
    );    
  }
  if(error){
    return (
      <View>
        <Text> something went wrong </Text>
      </View>
    )
  }
  if(searchtext != ""){
    return(
      ""
    )
  }

  // useEffect(() => {
  //   dispatch(fetchCategories()); 
  // }, []);
  const formattedItems:formattedItems[] = items.map((category: category) => ({
    name: category.name,
    key: category.id,
    comp: category.id === 1 ? <CementNavIcon /> :
          category.id === 2 ? <Steel /> :
          category.id === 3 ? <Spray_can /> :
          <Paint_roller />,
  }));

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>
  }


  return (
    <View style={styles.topContainer}>
      <NavigationItem itemslist={formattedItems} navigation={navigation} />
    </View>
  );
};



export default Navigation;
