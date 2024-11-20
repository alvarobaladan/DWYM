import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { useEffect, useState } from 'react';
import { useNavigation } from "expo-router";
import { API_BASE_URL } from "./Constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const getPlanetById = async (id: string) => {
    console.log("Entro getPlanetById");
    const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'GET' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(response);

    return await response.json();
}

export default function CardDetails({ id }: { id: string }) {
    const navigation = useNavigation();

    const [planet, setPlanet] = useState<any>([]);

    useEffect(() => {
        const getPlanet = async () => {
            const data = await getPlanetById(id);
            setPlanet(data);
        };
        getPlanet();
    }, []);

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

const styles = StyleSheet.create({
    card_container: {
        flexDirection: 'row',
        margin: 5,
        boxSizing: 'border-box',
        width: windowWidth * 0.85,
        height: windowHeight * 0.75,
        backgroundColor: 'rgba(217, 217, 217, 0.58)',
        borderColor: 'black',
        borderWidth: 2,
        borderBlockColor: 'solid white',
        boxShadow: '5px 5px 3px rgba(0, 0, 0, 0.22)',
        borderRadius: 17,
        //backgroundImage: 'linear-gradient(to right, #051937, #444964, #808195, #bfbec8, #ffffff);',
    },

    title: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
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

    button: {
        width: 60,
        height: 40,
        borderColor: 'black',
        backgroundColor: '#24b4fb',
        borderRadius: 17,
        padding: 'auto',
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'flex-end',
    },
});