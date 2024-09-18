import React, { useState} from 'react';
import { StyleSheet, Text, View, Pressable, Modal, Alert, ScrollView, TextInput, Image } from 'react-native';

const Modal1 = ({visible}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [monto, setMonto ] = React.useState(''); {/* Usado para BS ==> $ y Viceversa */}
    const [bcv, setBcv] = React.useState('');
    const [resultado, setResultado] = React.useState('');

    const operation =()=>{
        setResultado (parseFloat(monto) * parseFloat(bcv)).toFi
    }

    const operation2 =()=>{
        setResultado2 ((parseFloat(monto) / parseFloat(bcv)).toFixed(2))
    }

    const clear = () =>{
        setMonto("")
        setBcv("")
        setResultado("")
    }
    console.warn("FUNCIONA")

        return (
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={true}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!visible);
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
                                onPress={() => operation(true)}
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
export default Modal1({visible});