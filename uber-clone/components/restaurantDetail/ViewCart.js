import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';
import firebase from '../../firebase';
import LottieView from 'lottie-react-native';

export default function ViewCart({navigation}) {
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModelVisible] = useState(false);
    const {items, restaurantName} = useSelector((state)=>state.cartReducer.selectedItem);
    const total =  items.map((item)=>Number(item.price.replace("$",""))).reduce((prev,curr)=>prev+curr,0);
    const totalRound = Math.round(total * 100) / 100
    // const totalUSD = total.toLocaleString("en",{
    //     style:"currency",
    //     currency:"USD"
    // });
    const addOrderToFirebase = () => {
        const db = firebase.firestore();
        db.collection("Orders").add({
            items:items,
            restaurantName:restaurantName,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(()=>{
            setTimeout(() => {
                setLoading(false);
                navigation.navigate("OrderCompleted");
            }, 2000);
        });
     
        
    }
    const checkModalContent = ()=>{
        return(
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index)=>(
                            <OrderItem key={index} item = {item}/>
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>subtotal</Text>
                            <Text>${totalRound}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"center"}}>
                            <TouchableOpacity
                                style={{
                                    marginTop:20,
                                    backgroundColor:"black",
                                    alignItems:"center",
                                    padding:13,
                                    borderRadius:30,
                                    width:300,
                                    position:"relative"
                                }}
                                onPress={()=>{
                                    setLoading(true);
                                    setModelVisible(false);
                                    addOrderToFirebase()
                                }}
                            >
                                <Text style={{color:"white", fontSize:18}}>Checkout</Text>
                                <Text style={{color:"white", fontSize:14, position:"absolute", right:20, top:17}}>${totalRound}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
        <Modal
            animationType='slide'
            visible={modalVisible}
            transparent={true}
            onRequestClose={()=>setModelVisible(false)}
        >
            {checkModalContent()}
        </Modal>

        {total?(
            <View style={{
                flex:1,
                alignItems:'center',
                flexDirection:"row",
                position:"absolute",
                bottom:10,
                
            }}>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    width:"100%",
                }}>
                    <TouchableOpacity style={{
                        marginTop:20,
                        flexDirection:"row",
                        backgroundColor:"black",
                        justifyContent:"flex-end",
                        alignItems:"center",
                        padding: 13,
                        borderRadius: 30,
                        width:280,
                        position:"relative"
                    }}
                        onPress={()=>{
                            setModelVisible(true);
                        }}
                    >
                        <Text style={{color:"white" ,fontSize:18, marginRight: 60}}>View Cart</Text>
                        <Text style={{color:"white", fontSize:18,}}>${totalRound}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ):(<></>)
    }       
    {
        loading?(
          <View style={{
              backgroundColor:"black",
              position:"absolute",
              opacity:0.6,
              justifyContent:"center",
              alignSelf:"center",
              alignItems:"center",
              flex:1,
              width:"100%",
              height:"100%",
          }}>
                <LottieView
                    style={{height:200}}
                    source={require("../../assets/animations/scanner.json")}
                    autoPlay
                    speed={3}
                />
          </View>  
        ):(<></>)
    }
         </>

    )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckoutContainer:{
        backgroundColor:"white",
        padding:16,
        height:500,
        borderWidth:1
    },
    restaurantName:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18,
        marginBottom:10,
    },
    subtotalContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15,
    },
    subtotalText:{
        textAlign:"left",
        fontWeight:"bold",
        fontSize:15,
        marginBottom:10
    }
})