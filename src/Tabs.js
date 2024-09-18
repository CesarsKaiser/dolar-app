import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { LineChart} from "react-native-chart-kit";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TableContainer from '../components/TableContainer.js';
import HomeStackScreen from './stacks/HomeStackScreen';
import SettingsStackScreen from './stacks/SettingsStackScreen';



const Tabs = () => {
    const Tab = createBottomTabNavigator();
        
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="HomeMenu" component={HomeStackScreen}/>
                    <Tab.Screen name="SettingsStack" component={SettingsStackScreen}/>
                    
                 
                
                    
                </Tab.Navigator>
            </NavigationContainer>    
    );
};




export default Tabs;