import React from 'react'; 
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper';
import {dolarBCV, dolarParalelo, aux, i} from 'C:/Users/cesar/Desktop/Programm/React Native/dolar-app/components/variables.js'

const TableContainer = () => { 
    return ( 
    <DataTable style={styles.container}> 
        <DataTable.Header style={styles.tableHeader}> 
            <DataTable.Title style={styles.textAlineation}>Día</DataTable.Title> 
            <DataTable.Title style={styles.textAlineation}>Precio</DataTable.Title> 
            <DataTable.Title style={styles.textAlineation}>Tasa</DataTable.Title> 
        </DataTable.Header>
    
        <DataTable.Row > 
            <DataTable.Cell style={styles.textAlineation}>1</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarBCV}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>BCV</DataTable.Cell> 
        </DataTable.Row> 
    
        <DataTable.Row> 
            <DataTable.Cell style={styles.textAlineation}>1</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarParalelo}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>Paralelo</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell style={styles.textAlineation}>2</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarBCV}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>BCV</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell style={styles.textAlineation}>2</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarParalelo}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>Paralelo</DataTable.Cell> 
        </DataTable.Row>
        <DataTable.Row> 
            <DataTable.Cell style={styles.textAlineation}>3</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarBCV}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>BCV</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell style={styles.textAlineation}>3</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarParalelo}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>Paralelo</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell style={styles.textAlineation}>4</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarBCV}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>BCV</DataTable.Cell> 
        </DataTable.Row> 
        <DataTable.Row> 
            <DataTable.Cell style={styles.textAlineation}>4</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>{dolarParalelo}</DataTable.Cell> 
            <DataTable.Cell style={styles.textAlineation}>Paralelo</DataTable.Cell> 
        </DataTable.Row> 
    </DataTable> 
    ); 
}; 

export default TableContainer; 
const styles = StyleSheet.create({ 
    container: { 
        width: 360,
        justifyContent:'center',
        textAlign:'center'
    }, 
    
    tableHeader: { 
        backgroundColor: '#DCDCDC',
        textAlign: 'center',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginLeft:10,
        justifyContent:'center'
    },

    textAlineation:{
        justifyContent:'center'
    }
});