import { Text, View, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { API_BASE_URL } from "./Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";

// API: DELETE
const deletePlanet = async (id: string) => {
    console.log("Entro deletePlanet");
    const response = await fetch(`${API_BASE_URL}` + "/" + id, { method: 'DELETE' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

export default function Card({ id, name, image }: { id: string, name: string, image: string }) {

    function handleDelete() {
        deletePlanet(id);
    }

    const navigateToDeatils = async () => {
        await AsyncStorage.setItem('currentPlanetID', id);
        await AsyncStorage.setItem('isEdit', 'false');
        router.navigate(`/details`);
    }

    const navigateToDeatilsAndEdit = async () => {
        await AsyncStorage.setItem('currentPlanetID', id);
        await AsyncStorage.setItem('isEdit', 'true');
        router.navigate(`/details`);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => navigateToDeatils()}>
                <View style={{ ...styles.card_container, height: 115 }}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={{ fontSize: 20, flex:1 }}>{name}</Text>

                    <View style={{alignSelf:'flex-end'}}>
                        <TouchableOpacity style={styles.button} onPress={navigateToDeatilsAndEdit}>
                            <Text>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={handleDelete}>
                            <Text>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

