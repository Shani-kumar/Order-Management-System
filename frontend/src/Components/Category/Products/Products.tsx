import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import ProductContainer from '../../Home/ProductContainer/ProductContainer'
import UltraTech from '../../../assets/UltraTech';
import Navigation from '../../Home/Navigation/Navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigator/AppNavigator';
import ProductCategoryContainer from '../ProductCategoryContainer/ProductCategoryContainer';
import styles from './styles';


type Item =any
type productsprop={
  navigation: NativeStackNavigationProp<RootStackParamList>
  categoryId:number;
  textsearch:string;

}

export default function Products({ navigation ,categoryId,textsearch}: productsprop) {
  


  return (
      <View style={styles.topcontainer}>
          <View>
              <ProductCategoryContainer  navigation={navigation} textsearch={textsearch} categoryId={categoryId} />
          </View>
      </View>
  );
}

