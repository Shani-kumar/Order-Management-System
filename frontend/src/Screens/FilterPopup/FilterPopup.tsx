import { View, Text } from 'react-native'
import React from 'react'
import Filter from '../../Components/FilterPopup/Filter/Filter'
import FilterHeader from '../../Components/FilterPopup/FilterHeader/FilterHeader'
import FilterFooter from '../../Components/FilterPopup/FilterFooter/FilterFooter'
import { useState } from 'react'

export default function FilterPopup() {

const [selectedCategory, setSelectedCategory] = useState<string | null>('Brand');
const [selectedValues, setSelectedValues] = useState<Map<string, Set<string | number>>>(new Map());
  return (
    <View style={{flex:1}}>
      <FilterHeader setSelectedValues={setSelectedValues}/>
      <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedValues={selectedValues} setSelectedValues={setSelectedValues}/>
      <FilterFooter/>
    </View>
  )
}