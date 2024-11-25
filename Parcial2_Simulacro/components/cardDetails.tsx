import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { router } from 'expo-router';
import { API_BASE_URL } from "./Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles.js';


// API: GET BY ID
const getPlanetById = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'GET' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

// API: PUT BY ID
const putPlanetById = async (id: string, dataJSON: any) => {
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
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const [planet, setPlanet] = useState<any>([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [moons, setMoons] = useState('');
    const [moon_names, setMoon_Names] = useState('');
    const [image, setImage] = useState('');

    // Obtener información de ID y de modo (Edit o View)
    useEffect(() => {
        const handleGetData = async () => {
            var idAsync = await AsyncStorage.getItem('currentPlanetID');
            var isEdit = await AsyncStorage.getItem('isEdit');
            isEdit === 'true' ? setIsEdit(true) : setIsEdit(false);
            setId(idAsync);
        }
        handleGetData();
    });

    useEffect(() => {
        const getPlanet = async () => {
            const data = await getPlanetById(id);
            setPlanet(data);

            setName(data.name || '');
            setDescription(data.description || '');
            setMoons(data.moons || '');
            setMoon_Names(data.moon_names || '');
            setImage(data.image || '');
        };
        getPlanet();
    }, [id]);

    function handlePut() {
        const updatePlanet = {
            name: name,
            description: description,
            moons: moons,
            // moon_names: moon_names,
            image: image,
        }

        putPlanetById(id, updatePlanet);
        router.navigate(`/`);
    }

    return (
        <View>
            {/* VIEW */}
            <View style={{ display: isEdit ? 'none' : 'flex' }}>
                <View style={styles.card_container}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontSize: 20 }}>{name}</Text>
                        <Text style={{ fontSize: 12 }}>{description}</Text>
                        <Text style={{ fontSize: 12 }}>Número Lunas: {moons}</Text>
                        <Text style={{ fontSize: 12 }}>Nombres Lunas: {moon_names}</Text>
                    </View>
                </View>
            </View>

            {/* EDIT */}
            <View style={{ display: isEdit ? 'flex' : 'none' }}>
                <View style={styles.card_container}>
                    <View style={{ margin: 5 }}>
                        <Text>Nombre</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setName}
                            value={name}
                            placeholder="Ingrese el nombre del planeta...">
                        </TextInput>

                        <Text>Descripción</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setDescription}
                            value={description}
                            placeholder="Ingrese la descripción del planeta...">
                        </TextInput>

                        <Text>Lunas (Cantidad)</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setMoons} 
                            value={moons}
                            placeholder="Ingrese la cantidad de lunas del planeta...">
                        </TextInput>

                        {/* <Text>Lunas (Nombres)</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setMoon_Names}
                            value={moon_names}
                            placeholder="Ingrese los nombres de las lunas...">
                        </TextInput> */}

                        <Text>Imagen:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setImage}
                            value={image}
                            placeholder="Ingrese la URL de la imagen del planeta...">
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