import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            margin: 5,
        },

        title: {
            fontSize: 20,
        },

        textInput: {
            margin: 5,
            textAlign: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'grey',
            borderRadius: 5,
            minHeight: 50,
            minWidth: 300,
            maxWidth: 800,
        },

        button: {
            margin: 10,
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'black',
            height: 50,
            width:200,
            alignSelf: 'flex-start',
          },
    })

    const [info, setInfo] = useState('');
    const [text, setText] = useState('');
    const handleStoreData = async (value) => {
        try {
            // En caso de querer salvar un objeto diferente a un string, se usa JSON.stringify(value);
            // const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('my-key', value);

            setInfo('Datos guardados.');
        } catch (e) {
            console.log(e);
        }
    };

    const [storageData, setStorageData] = useState('');
    const handleGetData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-key');
            if (value !== null) {
                setStorageData(value);

                setInfo('Datos cargados.');
            } else {
                setInfo('No se encontraron datos.');
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleRemoveValue = async () => {
        try {
            await AsyncStorage.removeItem('my-key');

            setInfo('Datos eliminados.');
            setStorageData('');
        } catch (e) {
            console.log(e);
        }

        console.log('Done.')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>TA14</Text>
                <TextInput style={styles.textInput} placeholder="Texto a guardar..." onChangeText={setText} value={text}></TextInput>

                <View>
                        <TouchableOpacity style={styles.button} onPress={() => handleStoreData(text)}>
                                <Text>Guardar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => handleGetData()}>
                                <Text>Cargar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => handleRemoveValue()}>
                                <Text>Eliminar</Text>
                        </TouchableOpacity>
                </View>

                <Text style={styles.title}>Datos del storage:</Text>
                <Text>{info}</Text>
                <Text>{storageData}</Text>
            </View>
        </SafeAreaView>
    );
}