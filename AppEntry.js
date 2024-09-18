import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LineChart} from "react-native-chart-kit";

const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
{
    data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
},
],
};

export default function App(){
return (

<View style={styles.AndroidSafeArea}>
    <View style={styles.mainContainer}>

    <ScrollView style={styles.ScrollView}>
                        <View style={styles.mainContainer}>
                                <StatusBar style="light"/>
                                <View >
                                    <StatusBar style="light"/>
                                    <View style= {styles.boxContainer}>
                                        <Pressable 
                                            onPress={(<Tabs/>)} style= {styles.pressable}

                                        >
                                            <Text>dolarBcv</Text>
                                        </Pressable>
                                    </View>

                                    <View style= {styles.boxContainer}>
                                        <Pressable style= {styles.pressable}>
                                            <Text>dolarParalelo</Text>
                                        </Pressable>
                                    </View>

                                    <View style= {styles.boxContainer}>
                                        <Pressable style= {styles.pressable}>
                                            <Text>dolar</Text>
                                        </Pressable>
                                    </View>
                                </View> 

                                <View style={styles.graphContainer}>
                                        <LineChart
                                                data={linedata}
                                                width={330} // from react-native
                                                height={180}
                                                margin={5}
                                                yAxisLabel={'$'}
                                                chartConfig={{
                                                    backgroundColor: '#ea8800',
                                                    backgroundGradientFrom: '#fb8c00',
                                                    backgroundGradientTo: '#ffa726',
                                                    decimalPlaces: 2, // optional, defaults to 2dp
                                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                                    style: {
                                                        borderRadius: 16
                                                    }
                                                }}

                                                bezier
                                                style={{
                                                    marginVertical: 8,
                                                    borderRadius: 16
                                                }}
                                        />                    
                                    </View>
                                <View style={styles.tableContainer}>
                                    <TableContainer/>
                                </View>
                            </View>
                        </ScrollView> 

    </View>
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
    borderRadius: 5,
    height:60,
    width: 400,
    margin: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'    
    },

pressable:{
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 0.5,
    borderRadius: 10,
    height:50,
    width: 375,
    margin: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'  
},

graphContainer: {
    width:400, 
    height:200,
    margin: 10,
    borderRadius: 4, 
    padding: 10,
    backgroundColor:"#ED1B1B", 
    alignItems:"center",
    justifyContent: 'center',
    },

    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        borderColor:"red",
        borderRadius:2,
    
    }

});
