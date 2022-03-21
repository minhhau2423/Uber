import { View, Text, Image } from 'react-native'
import React from 'react'


const image = "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg";
const title = "Tieu de abc abc";
const description = 'mo ta $$ ';
export default function About() {
    return (
        <View>
            <RestaurantImage image = {image}/>
            <RestaurantTitle title = {title}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}


const RestaurantImage = (props)=>(
    <Image
        source = {{uri:props.image}} 
        style={{
            width:"100%", 
            height:180
        }}
    >
    </Image>
)
const RestaurantTitle = (props)=>(
    <Text
        style={{
            fontSize:29,
            fontWeight:"bold",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >
        {props.title}
    </Text>
)
const RestaurantDescription = (props) =>(
    <Text
        style={{
            marginTop:10,
            marginHorizontal:15,
            fontWeight:"400",
            fontSize: 15.5
        }}
    >
        {props.description}
    </Text>
)