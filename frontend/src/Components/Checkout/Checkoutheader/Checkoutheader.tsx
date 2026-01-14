import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import BackIcon from '../../../assets/BackIcon'
import { RootStackParamList } from '../../../Navigator/AppNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
type checkoutheaderprops={
    navigation:NativeStackNavigationProp<RootStackParamList>;
}
const Checkoutheader = ({navigation}:checkoutheaderprops) => {
  return (
    <View style={{ justifyContent:'flex-start', width:"100%",  padding:20, borderBottomWidth:1, borderBottomColor:'#E3E3E3' , backgroundColor:'#FFFFFF'}}>
        <TouchableOpacity onPress={()=>{navigation.popToTop()}}>
        <BackIcon/>
        </TouchableOpacity>
      
    </View>
  )
}

export default Checkoutheader