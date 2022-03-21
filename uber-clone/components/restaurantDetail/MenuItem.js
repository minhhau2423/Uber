import { View, Text, StyleSheet, Image, ScrollView, FlatList} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
const foods=[
    {
        title: "Test 1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
    {
        title: "Test 2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
    {
        title: "Test 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
    {
        title: "Test 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
    {
        title: "Test 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
    {
        title: "Test 6",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
    {
        title: "Test 7",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
    {
        title: "Test 8",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price:"$10.05",
        image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
    },
]

export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {foods.map((food, index)=>(
                <View key={index}>
                    <View  style={styles.MenuItem}>
                        <FoodInfo food={food}/>
                        <FoodImage food={food}/>
                    </View>
                    <Divider width={0.5}/>
                </View>
            ))} 
        </ScrollView>
       
    )
}

const FoodInfo = (props)=>(
    <View style={styles.foodInfo}>
        <Text style={styles.title}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props)=>(
    <View>
        <Image
            source={{uri:props.food.image}}
            style={styles.foodImage}
        />
    </View> 
)


const styles = StyleSheet.create({
    MenuItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:20
    },
    title:{
        fontSize:19,
        fontWeight:"bold",
    },
    foodInfo:{
        width:200, 
        justifyContent:"space-evenly"
    },
    foodImage:{
        width:100,
        height:100,
        borderRadius:8
    }
})