import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import styles from './styles';

type ProductDescriptionProps={
  description:string
  dimensions:string
  country_of_origin:string
  weight:number
}
export default function ProductDescription({description,dimensions,country_of_origin,weight}:ProductDescriptionProps) {
  console.log("inside product description")
  const [index, setIndex] = React.useState(0);
// console.log(description)
  return (
    <SafeAreaView style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.indicator}
        // variant="primary"
        style={styles.border}
      >
        <Tab.Item
          title="DETAILS"
          titleStyle={styles.tabTitle}
          
          
        />
        <Tab.Item
          title="WARANTY"
          titleStyle={styles.tabTitle}
          
        />
        <Tab.Item
          title="RETURN"
          titleStyle={styles.tabTitle}
          
        />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
        containerStyle={styles.tabView}
      >
        <TabView.Item style={styles.tabViewItem}>
          <View >
          <Text numberOfLines={7}>{description}</Text>
          <View style={styles.topinnercontainer}>
            <View style={styles.innercontainer}>
              <Text>Package Dimensions </Text>
              <Text style={styles.seltext} >{dimensions} cm</Text>
            </View>
            <View style={styles.innercontainer}>
            <Text>Country of Origin </Text>
            <Text style={styles.seltext} >{country_of_origin}</Text>
            </View>
            <View style={styles.innercontainer}>
            <Text>Weight  </Text>
            <Text style={styles.seltext} >{weight} kgs</Text>
            </View>
            <View style={styles.innercontainer}>
            <Text >Date first available </Text>
            <Text style={styles.seltext}>20 sep 2017</Text>
            </View>
          </View>
         
          </View>
          
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <Text h1>Waranty </Text>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <Text h1>RETURN</Text>
        </TabView.Item>
      </TabView>
     
    </SafeAreaView>
  );
};
