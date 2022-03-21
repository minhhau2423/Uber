import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Loading() {
  return (
    <View style={{
        height:600,
        backgroundColor:"#fff",
        marginTop:10
    }}>
        <Image
            source={require("../assets/images/loading.gif")}
            style={{
                width:"100%",
            }}
        />
    </View>
  );
}
