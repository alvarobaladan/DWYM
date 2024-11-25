import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { router } from 'expo-router';
import { API_BASE_URL } from "./Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles.js';


// API: GET BY ID
const getDestinationById = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'GET' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

// API: PUT BY ID
const putDestinationById = async (id: string, dataJSON: any) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataJSON)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

export default function CardDetails() {
    const [id, setId] = useState<any>('');

    const [destination, setDestination] = useState<any>([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [favourite, setFavourite] = useState(false);


    // Obtener información de ID
    useEffect(() => {
        const handleGetData = async () => {
            var destinationID = await AsyncStorage.getItem('currentDestinationID');
            setId(destinationID);
        }
        handleGetData();
    });

    useEffect(() => {
        const getDestination = async () => {
            const data = await getDestinationById(id);
            setDestination(data);

            setName(data.name || '');
            setDescription(data.description || '');
            setDifficulty(data.difficulty || '');
            setFavourite(data.favourite || false);
        };
        getDestination();
    }, [id]);

    function handlePut() {
        console.log('Entro handlePUT');
        const updateDestination = {
            name: name,
            description: description,
            difficulty: difficulty,
            favourite: favourite,
        }

        putDestinationById(id, updateDestination);
        console.log('Actualizo destination correctamente');
        router.navigate(`/`);
    }

    return (
        <View>
            <View style={{ display: 'flex' }}>
                <View style={styles.card_container}>
                    <View style={{ margin: 5 }}>
                        <Text>Nombre</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setName}
                            value={name}
                            placeholder="Nombre del destino...">
                        </TextInput>

                        <Text>Descripción</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setDescription}
                            value={description}
                            placeholder="Descripción del destino...">
                        </TextInput>

                        <Text>Dificultad</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setDifficulty}
                            value={difficulty}
                            placeholder="Dificultad del destino...">
                        </TextInput>

                        <TouchableOpacity style={styles.button} onPress={handlePut}>
                            <Text>Actualizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}