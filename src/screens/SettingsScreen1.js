import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-paper';


const SettingsScreen1 = () => {
    const navigation = useNavigation();
    return (
        <View >
            <Button
                
                title="Ir a home 2"
                onPress={() => navigation.navigate("Home2")}
            >
                <Text>Este es Settings</Text>

            </Button>
        </View>
    );

};

export default SettingsScreen1;