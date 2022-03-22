import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetail({route, navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <About route={route}/>
      <Divider width={1.8} style={{marginTop: 20}} />
      <MenuItem restaurantName={route.params.name}/>
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </SafeAreaView>
  )
}