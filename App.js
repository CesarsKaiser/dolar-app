import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { LineChart} from "react-native-chart-kit";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TableContainer from './components/TableContainer.js';
import Tabs from "./src/Tabs";

//function registerRootComponent(component) {
//  AppRegistry.registerComponent('main', () => component);
//}



export default function App() {
return (
  <View style={styles.AndroidSafeArea}>
    <Tabs/>
  </View>
  );
}

const styles = StyleSheet.create({
 
  AndroidSafeArea: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: "#3E3E3E",
      borderColor:"red",
      borderRadius:2,
  
  }

});
registerRootComponent(App)