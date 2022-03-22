import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import React,{useEffect,useState} from 'react'
import LottieView from 'lottie-react-native';
import firebase from '../firebase';
import MenuItem from '../components/restaurantDetail/MenuItem'
export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items:[
            {
                title: "Test 1",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                price:"$10.05",
                image: "https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
            }
        ]
        
    });
    const {items, restaurantName} = useSelector((state)=>state.cartReducer.selectedItem);
    const total =  items.map((item)=>Number(item.price.replace("$",""))).reduce((prev,curr)=>prev+curr,0);
    const totalRound = Math.round(total * 100) / 100;

    useEffect(() => {
       const db=firebase.firestore();
       const getLastOrder = db.collection('Orders')
        .orderBy('createAt','desc')
        .limit(1)
        .onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                setLastOrder(doc.data())
            })
       })
       return getLastOrder;
    }, []);

    return (
        <View style={{flex:1, backgroundColor:"#ffff"}}>
            <LottieView
                style={{
                    height:100,
                    alignSelf:"center",
                    marginBottom:20,
                }}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false}
            />
            <Text style={{marginHorizontal:15}}>Your order at {restaurantName} has been places for ${totalRound}</Text>
            <ScrollView>
                <MenuItem foods={lastOrder.items} hideCheckBox={true}/>
                <LottieView
                    style={{
                        height:100,
                        alignSelf:"center",
                        marginBottom:20,
                    }}
                    source={require("../assets/animations/cooking.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
            </ScrollView>
        </View>
    )
}