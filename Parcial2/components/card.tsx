import { Text, View, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { API_BASE_URL } from "./Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";

// API: DELETE
const deleteDestination = async (id: string) => {
    console.log("Entro deleteDestination");
    const response = await fetch(`${API_BASE_URL}` + "/" + id, { method: 'DELETE' });

    console.log("Se elimino destination correctamente");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

// API: PATCH (Para actualizar favorito)
const patchDestinationById = async (id: string, dataJSON: any) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataJSON)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

export default function Card({ id, name, difficulty, favourite }: { id: string, name: string, difficulty: string, favourite: boolean }) {

    function handleDelete() {
        deleteDestination(id);
    }

    function handleFavourite() {
        console.log('Entro handlePatch');
        const updateDestination = {
            favourite: !favourite,
        }

        patchDestinationById(id, updateDestination);
        console.log('Actualizo destination correctamente');
    }

    const navigateToDeatilsAndEdit = async () => {
        await AsyncStorage.setItem('currentDestinationID', id);
        router.navigate(`/details`);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => navigateToDeatilsAndEdit()}>
                <View style={{ ...styles.card_container, height: 115 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, flex: 1 }}>{name}</Text>

                        {/* Texto sin tags */}
                        {/* <Text style={{ fontSize: 12, flex: 2 }}>{difficulty}</Text> */}

                        {/* Agrego tags */}
                        {difficulty && difficulty === 'easy' ?
                            <Text style={{ fontSize: 12, flex: 2, backgroundColor: 'green', maxHeight: 20, width: 100, alignSelf: 'flex-start' }}>{difficulty}</Text> : <Text></Text>}
                        {difficulty && difficulty === 'medium' ?
                            <Text style={{ fontSize: 12, flex: 2, backgroundColor: 'yellow', maxHeight: 20, width: 100, alignSelf: 'flex-start' }}>{difficulty}</Text> : <Text></Text>}
                        {difficulty && difficulty === 'hard' ?
                            <Text style={{ fontSize: 12, flex: 2, backgroundColor: 'violet', maxHeight: 20, width: 100, alignSelf: 'flex-start' }}>{difficulty}</Text> : <Text></Text>}

                        {/* {favourite && favourite ? <Image source={require('@/assets/images/starBlack.png')} style={{ width: 24, height: 24 }} /> : <Image source={require('@/assets/images/star.png')} style={{ width: 24, height: 24 }} />} */}
                    </View>
                    <TouchableOpacity style={{ ...styles.button, width: 50 }} onPress={handleFavourite}>
                        {favourite && favourite ? <Image source={require('@/assets/images/starBlack.png')} style={{ width: 24, height: 24 }} /> : <Image source={require('@/assets/images/star.png')} style={{ width: 24, height: 24 }} />}
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'flex-end' }}>
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

