import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, Image} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import RestaurantItems from '../components/RestaurantItems';
import Loading from '../components/Loading';


const YELP_API_KEY = "PgmgmJ9yZUNFZd57oK0m8SmAsZSyWCUAXCKkh9FBsfBxaAFvYE0JeOS1JLSsLn_0lgtjbx2bG9KxbRiZ6jfCmDzJz55XHE-Q55xQd3NYQ-KpEqJySz0nbFQe898sYnYx";

export default function Home() {

  const [restaurantData, setRestaurantData] = useState();
  const getRestaurantsFromYelp = () =>{
    const url = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=NYC";
    const apiOptions = {
      headers:{
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
  
    return fetch(url, apiOptions)
        .then((res)=>res.json())
        .then(json=>setRestaurantData(json.businesses));
  }


  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar/>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        {restaurantData?
          <RestaurantItems restaurantData={restaurantData}/>
          :
          <Loading/>
        }
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#aaa",
  },
  header:{
    padding: 15,
    backgroundColor:"white",
  }
});

