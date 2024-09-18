import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Alert, ScrollView, TextInput, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-paper';
import { LineChart} from "react-native-chart-kit";
import TableContainer, {dolarBCV} from '../../components/TableContainer.js';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import Firebase from '../../utils/Firebase.js';
//import dolarBCV from 'C:/Users/cesar/Desktop/Programm/React Native/dolar-app/components/variables.js'

const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
    {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2, // optional
    },
    ],
};

    function login(){
        Firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                console.log("Usuario logeado")
            }
            else{
                console.log("Usuario No logeado")
            }
            user ? console.log("Usuario Logeado Exitosamente") : console.log("Usuario No Logeado")
        })
    }

const calculadora_logo = '../../assets/calculadora.png';


const HomeScreen1 = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);    //Modal de $ ==> BS
    const [modalVisible2, setModalVisible2] = useState(false);  //Modal de BS ==> $
    const [monto, setMonto, ] = React.useState(''); {/* Usado para BS ==> $ y Viceversa */}
    const [bcv, setBcv] = React.useState('');
    const [resultado, setResultado] = React.useState('');


    const operation =()=>{
        setResultado (parseFloat(monto) * parseFloat(bcv)).toFi
    }

    const operation2 =()=>{
        setResultado ((parseFloat(monto) / parseFloat(bcv)).toFixed(2))
    }

    const clear = () =>{
        setMonto("")
        setBcv("")
        setResultado("")
    }

        return (
            
            <View style={styles.mainContainer}>
                <ScrollView style={styles.ScrollView}>
                        {/* MODAL 1) BS ==> $ */}
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                                }
                            }>
                            
                            <View style={styles.containerModal}>
                                <View style={styles.modalView}>
                                    <Text style={styles.headerDivisas}>CONVERTIDOR DE DIVISAS {"\n"}  $ == BS. </Text>
                                    <View style={styles.row_inputs}>
                                        <Text style={{ borderWidth:1, borderRadius:10, padding:8, fontSize:18, fontWeight:'bold', color:"green"}}>$</Text>
                                            <TextInput
                                                style={styles.input_monto}
                                                    value={monto}
                                                    onChangeText={setMonto}
                                                    placeholder="Monto a convertir"
                                                    keyboardType="numeric"
                                            />
                                        <Text style={{borderWidth:1, borderRadius:10, padding:8, fontSize:18, fontWeight:'bold', color:"green"}}>BS.</Text>
                                            <TextInput
                                                style={styles.input_bcv}
                                                    name="bcv"
                                                    value={bcv}
                                                    onChangeText={setBcv}
                                                    placeholder="Tasa de cambio BCV"
                                                    keyboardType="numeric"
                                            />
                                    </View>
                                    <View style={styles.row_inputs_2}>
                                        <Text style={{ borderWidth:1, borderRadius:10, padding:8, fontSize:18, fontWeight:'bold', color:"green"}}>BS.</Text>
                                            <TextInput
                                                style={styles.input_resultado}
                                                value={resultado}
                                                //onChangeText={setResultado}
                                                placeholder="Monto convertido"
                                                keyboardType="numeric"
                                                />
                                    </View>  
                                    
                                    <View style={styles.row_buttons_modal}>
                                        <Pressable
                                            style={[styles.button_calculate]}
                                            onPress={operation}
                                        >
                                            <Text style={{fontWeight:'bold'}}>Calcular</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button_closeModal]}
                                            onPress={clear}>
                                                <Text style={{fontWeight:'bold'}}>Limpiar</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button_closeModal]}
                                            onPress={() => {clear("Limpiar inputs")
                                                    
                                                    setModalVisible(!modalVisible)
                                                    }
                                                }>
                                                <Text style={{fontWeight:'bold'}}>Cerrar</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        {/* MODAL 2) $ ==> BS */}
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible2}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible2(!modalVisible2);
                                }
                            }>
                            
                            <View style={styles.containerModal}>
                                <View style={styles.modalView}>
                                <Text style={styles.headerDivisas}>CONVERTIDOR DE DIVISAS {"\n"}  BS == $. </Text>
                                    <View style={styles.row_inputs}>
                                        <Text style={{ borderWidth:1, borderRadius:10, padding:8, fontSize:16, fontWeight:'bold', color:"green"}}>BS.</Text>
                                            <TextInput
                                                style={styles.input_monto}
                                                    value={monto}
                                                    onChangeText={setMonto}
                                                    placeholder="Monto a convertir"
                                                    keyboardType="numeric"
                                            />
                                        <Text style={{borderWidth:1, borderRadius:10, padding:8, fontSize:16, fontWeight:'bold', color:"green"}}>BS.</Text>
                                            <TextInput
                                                style={styles.input_bcv}
                                                    name="bcv"
                                                    value={bcv}
                                                    onChangeText={setBcv}
                                                    placeholder="Tasa de cambio BCV"
                                                    keyboardType="numeric"
                                                    
                                            />
                                    </View>
                                    <View style={styles.row_inputs_2}>
                                        <Text style={{ borderWidth:1, borderRadius:10, padding:8, fontSize:20, fontWeight:'bold', color:"green"}}>$</Text>
                                            <TextInput
                                                style={styles.input_resultado}
                                                value={resultado}
                                                //onChangeText={setResultado}
                                                placeholder="Monto convertido"
                                                keyboardType="numeric"
                                                />
                                    </View>  
                                    
                                    <View style={styles.row_buttons_modal}>
                                        <Pressable
                                            style={[styles.button_calculate]}
                                            onPress={operation2}
                                        >
                                            <Text style={{fontWeight:'bold'}}>Calcular</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button_closeModal]}
                                            onPress={clear}>
                                                <Text style={{fontWeight:'bold'}}>Limpiar</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button_closeModal]}
                                            onPress={() => {clear("Limpiar inputs")
                                                    
                                                    setModalVisible2(!modalVisible2)
                                                    }
                                                }>
                                                <Text style={{fontWeight:'bold'}}>Cerrar</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>


                    {/*3 BOTONES PRINCIPALES */}

                    <View style={styles.row_buttons}>
                        
                        <View  style= {styles.boxContainer}>
                            <Pressable
                                style={({pressed}) => [ {
                                        backgroundColor:"red",
                                        ...(pressed ? styles.button_pressed : styles.button)
                                        }
                                    ]
                                }
                                onPress={() => setModalVisible(true)}
                            >
                                {({pressed}) => ( 
                                    <Text style={{fontWeight: "bold"}}>{pressed ? 'Pressed!' : 'Dolar BCV'}</Text>) }
                                </Pressable>
                        </View> 

                        <Pressable 
                            onPress={() => setModalVisible(true)}>
                            <Image style={styles.calculator_logo} source={require(calculadora_logo)}/>
                        </Pressable>
                        
                    </View> 
                    
                    <View style={styles.row_buttons}>
                        
                        <View  style= {styles.boxContainer}>
                            <Pressable
                                style={({pressed}) => [ {
                                        backgroundColor:"red",
                                        ...(pressed ? styles.button_pressed : styles.button)
                                        }
                                        ]
                                }
                                onPress={() => setModalVisible(true)}
                            >
                                {({pressed}) => ( 
                                    <Text style={{fontWeight: "bold"}}>{pressed ? 'Pressed!' : 'Dolar Paralelo'}</Text>) }
                                </Pressable>
                        </View> 
                        <Pressable 
                            onPress={() => setModalVisible(true)}>
                            <Image style={styles.calculator_logo} source={require(calculadora_logo)}/>
                        </Pressable>
                    </View>

                    <View style={styles.row_buttons}>
                        
                        <View  style= {styles.boxContainer}>
                            <Pressable
                                style={({pressed}) => [ {
                                        backgroundColor:"red",
                                        ...(pressed ? styles.button_pressed : styles.button)
                                        }
                                    ]
                                }
                                onPress={() => setModalVisible2(true)}
                            >
                                {({pressed}) => ( 
                                    <Text style={{fontWeight: "bold"}}>{pressed ? 'Pressed!' : 'BS. ==> $'}</Text>) }
                                </Pressable>
                        </View> 
                        <Pressable 
                            onPress={() => setModalVisible2(true)}>
                            <Image style={styles.calculator_logo} source={require(calculadora_logo)}/>
                        </Pressable>
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
                    
                    {/* TABLA */}
                    <View style={styles.tableContainer}>
                        <TableContainer/>
                    </View> 
                </ScrollView>
            </View>

        
        );

};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        alignContent:'center',
        justifyContent: 'center',
        paddingTop:30,
},

    boxContainer:{
        backgroundColor:'#ED1B1B',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 5,
        height:60,
        width: 300,
        margin: 5,
        marginLeft: 10,
        
        alignItems: 'center',
        justifyContent: 'center'    
    },

    button:{
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 0.5,
        borderRadius: 10,
        height:50,
        width: 250,
        margin: 5,
        marginLeft: 10,
        
        alignItems: 'center',
        justifyContent: 'center'  
    },

    button_pressed: {
        backgroundColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 0.5,
        borderRadius: 10,
        height:50,
        width: 250,
        margin: 5,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button_closeModal: {
        backgroundColor: '#D4D4D4',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 0.5,
        borderRadius: 10,
        height:50,
        width: 100,
        marginStart:5,
        marginBottom: 10,
        
        alignItems: 'center',
        justifyContent: 'center'
    },

    button_calculate: {
        backgroundColor: '#26D100',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 0.5,
        borderRadius: 10,
        height:50,
        width: 100,
        marginEnd:5,
        marginBottom: 10,
        
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerDivisas:{
        height:70,
        width: 360,
        paddingTop:10,
        marginBottom: 10,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: "#021173",
        fontSize:18,
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        color:"white"
    },

    modalView: {
        //flex:1,
        height:250,
        width: 360,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        alignContent:'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    containerModal: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(28, 28, 28, 0.5)'
    },

    row_inputs:{
        
        flexDirection:"row",
        marginTop:10,
        justifyContent:'space-between',
        justifyContent: 'center',
        alignItems: 'center',
    },

    row_inputs_2:{
        flex: 1,
        flexDirection:"row",
        padding: 5,
        alignItems: 'center',
        justifyContent:'space-between'
    },

    row_buttons_modal:{
        flex: 1,
        flexDirection:"row",
        height: 40,
        padding: 5,
        fontWeight:'bold',
        justifyContent:'space-between',
        
    },

    row_buttons:{
        flex: 1,
        flexDirection:"row",
        height: 60,
        padding: 5,
        marginTop:10,
        justifyContent:'space-between'
    },

    calculator_logo:{
        width: 50,
        height: 50,
        marginTop:10,
    },

    input_monto: {
        flex:1,
        height: 40,
        width:130,
        //margin: 10,
        marginEnd:10,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        fontSize:12,
        fontWeight:'bold'
    },

    input_bcv: {
        flex:1,
        height: 40,
        width:130,
        //margin: 10,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        fontSize:12,
        fontWeight:'bold'
    },

    input_resultado: {
        flex:1,
        height: 40,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        fontSize: 14,
        fontSize:12,
        fontWeight:'bold'
    },

    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },

    graphContainer: {
        width:360, 
        height:200,
        margin: 10,
        borderRadius: 10, 
        padding: 10,
        backgroundColor:"#ED1B1B", 
        alignItems:"center",
        justifyContent: 'center',
        },
});
export default HomeScreen1;