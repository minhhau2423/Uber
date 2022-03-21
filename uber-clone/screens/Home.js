import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import RestaurantItems from "../components/home/RestaurantItems";
import Loading from "../components/Loading";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";


const YELP_API_KEY =
  "PgmgmJ9yZUNFZd57oK0m8SmAsZSyWCUAXCKkh9FBsfBxaAFvYE0JeOS1JLSsLn_0lgtjbx2bG9KxbRiZ6jfCmDzJz55XHE-Q55xQd3NYQ-KpEqJySz0nbFQe898sYnYx";

export default function Home() {
  const [city, setCity] = useState("Little Saigon");
  const [restaurantData, setRestaurantData] = useState();
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const url = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=" + city;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar />
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {restaurantData ? (
          <RestaurantItems restaurantData={restaurantData} />
        ) : (
          <Loading />
        )}
      </ScrollView>
      <Divider width={1} />
      <BottomTabs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
  },
  header: {
    padding: 15,
    backgroundColor: "white",
  },
});
