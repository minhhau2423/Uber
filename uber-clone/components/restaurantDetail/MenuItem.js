import { View, Text, StyleSheet, Image, ScrollView, FlatList} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

const foodsTest=[
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
export default function MenuItem({restaurantName, foods, hideCheckBox}) {
    foods?foods=foods:foods=foodsTest;
    const dispatch = useDispatch();
    const selectedItem = (item, checkboxValue) => 
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            ...item,
            restaurantName:restaurantName,
            checkboxValue:checkboxValue,
        }
    });

    const cartItems = useSelector((state)=>state.cartReducer.selectedItem.items);
    const isFoodCart = (food, cartItems) => Boolean(cartItems.find((item)=>item.title===food.title));
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {foods.map((food, index)=>(
                <View key={index}>
                    <View  style={styles.MenuItem}>
                        {hideCheckBox?(<></>):
                        (<BouncyCheckbox
                            iconStyle={{
                                borderRadius: 5,
                                borderColor:"gray"
                            }}
                            fillColor="green"
                            onPress={(checkboxValue)=>selectedItem(food, checkboxValue)}
                            isChecked={isFoodCart(food, cartItems)}
                        />)
                        }
                        <FoodInfo food={food}/>
                        <FoodImage food={food}/>
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}}/>
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