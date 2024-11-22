import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { useState } from 'react';
import { router } from "expo-router";
import { API_BASE_URL } from "./Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const deletePlanet = async (id: string) => {
    console.log("Entro deletePlanet");
    const response = await fetch(`${API_BASE_URL}` + "/" + id, { method: 'DELETE' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

export default function Card({ id, name, image }: { id: string, name: string, image: string }) {

    function handleDelete(){
        deletePlanet(id);
    }
    
    const navigateToDeatils = async ()  => {
        await AsyncStorage.setItem('currentPlanetID', id);
        var idAsync = await AsyncStorage.getItem('currentPlanetID');
        console.log(idAsync);
        console.log('Entro navigate');
        router.navigate(`/details`);
    }

    return (
        <View>
            {/* <TouchableOpacity onPress={() => navigation.navigate('details', { id })}> */}
            <TouchableOpacity onPress={() => navigateToDeatils()}>
                <View style={styles.card_container}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={styles.title}>{name}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleDelete}>
                        <Text>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        boxSizing: 'border-box',
        width: windowWidth * 0.85,
        height: 115,
        backgroundColor: 'rgba(217, 217, 217, 0.58)',
        borderColor: 'black',
        borderWidth: 2,
        borderBlockColor: 'solid white',
        boxShadow: '5px 5px 3px rgba(0, 0, 0, 0.22)',
        borderRadius: 17,
        //backgroundImage: 'linear-gradient(to right, #051937, #444964, #808195, #bfbec8, #ffffff);',
    },

    title: {
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        alignSelf:'center',
        fontSize: 20,
    },

    image: {
        alignSelf: 'flex-start',
        margin: 5,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderWidth: 2,
        borderRadius: 17,
    },

    button:{
        width:100,
        height:40,
        margin:5,
        alignSelf:'flex-end',

        backgroundColor: '#FAFBFC',
        borderColor: 'black', //rgba(27, 31, 35, 0.15)
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#1B1F23',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 0,
    }
});