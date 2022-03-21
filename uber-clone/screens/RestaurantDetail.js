import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/restaurantDetail/MenuItem'

export default function RestaurantDetail() {
  return (
    <View>
      <About></About>
      <Divider width={1.8} style={{marginTop: 20}} />
      <MenuItem/>
    </View>
  )
}