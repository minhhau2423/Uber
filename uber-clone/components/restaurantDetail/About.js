import { View, Text, Image } from 'react-native'
import React from 'react'


const yelpResInfo = {
    name:"Farmhouse Kitchen Thai Cuisine",
    image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg",
    reviews:"2000",
    price:"$$",
    rating:"4.5",
    categories:[{title:"Thai"},{title:"Comfort Food"},]
};

export default function About(props) {
    const {name, image, price, reviews, rating, categories} = props.route.params;
    const formattedCat  = categories.map((cat)=>cat.title).join(" • ");
    const description = `${formattedCat} ${price? ' • ' + price : ''} • 🎟️ • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image = {image}/>
            <RestaurantTitle title = {name}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}


const RestaurantImage = (props)=>(
    <Image
        source = {{uri:props.image}} 
        style={{
            width:"100%", 
            height:150,
            
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
            fontSize: 13
        }}
    >
        {props.description}
    </Text>
)