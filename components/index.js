import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit";
import BoxContainer from './components/BoxContainer';
import TableContainer from './components/TableContainer.js';
//import chartConfig from './components/chart.js';
import * as variables from "./components/variables.js";

const icon = require('../assets/images/icon.png')

export default function App(){
    return (

        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollView}>
                <StatusBar style="light"/>

                <View >
                    <StatusBar style="light"/>
                    <BoxContainer style= {styles.boxContainer}>
                        <Text>dolarBCV</Text>
                    </BoxContainer>

                    <BoxContainer style= {styles.boxContainer}>
                        <Text>dolarParalelo</Text>
                    </BoxContainer>

                    <BoxContainer style= {styles.boxContainer}>
                        <Text>variacion</Text>
                    </BoxContainer>
                </View> 

                <View style={styles.graphContainer}>
                    <Image source={icon} style={
                        {width: 20, 
                        height: 20}}
                    />
                </View>

                <View style={styles.tableContainer}>
                    <TableContainer/>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent:'center',
        justifyContent: 'center',
    },

    boxContainer:{
        backgroundColor:'#ED1B1B',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height:60,
        width: 400,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'    
        },
    
    graphContainer: {
        width:400, 
        height:100,
        margin: 10, 
        backgroundColor:"#ED1B1B", 
        alignItems:"center" 
    },

    tableContainer:{ 
        alignItems: 'center',
        justifyContent: 'center',
    }

    });

