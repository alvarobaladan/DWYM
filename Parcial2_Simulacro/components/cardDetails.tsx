import { useEffect, useState } from 'react';
import { Text, View, Image } from "react-native";
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

export default function CardDetails() {
    const [id, setId] = useState<any>('');
    useEffect(() => {
      const handleGetData = async () => {
        console.log('Entro HandleGetData');
        var idAsync = await AsyncStorage.getItem('currentPlanetID');
        console.log(idAsync);
        setId(idAsync);
        console.log('Actualizo Details');
      }
      handleGetData();
    });

    console.log(id);

    const [planet, setPlanet] = useState<any>([]);

    useEffect(() => {
        const getPlanet = async () => {
            const data = await getPlanetById(id);
            setPlanet(data);
        };
        getPlanet();
    }, [id]);

    return (
        <View>
            {planet &&
                <View style={styles.card_container}>
                    <Image source={{ uri: planet.image }} style={styles.image} />
                    <View style={{ margin: 5}}>
                        <Text style={{ fontSize: 20 }}>{planet.name}</Text>
                        <Text style={{ fontSize: 12 }}>{planet.description}</Text>
                        <Text style={{ fontSize: 12 }}>Lunas: {planet.moons}</Text>
                        <Text style={{ fontSize: 12 }}>Nombre de Lunas: {planet.moon_names}</Text>
                    </View>
                </View>
            }
        </View>
    );
}