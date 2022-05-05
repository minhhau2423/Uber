import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import RootNavigation from './navigation';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';


export default function App() {
  return (
    // navigation --feature 1
    <RootNavigation/>
  );
}


