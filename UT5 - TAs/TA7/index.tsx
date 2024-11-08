import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, Image, ScrollView } from "react-native";
import axios from 'axios';
import { useState } from 'react';

const API_BASE_URL = 'https://www.omdbapi.com';
const API_KEY = "1c46cd0d";

export default function Index() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            margin: 1,
        },

        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },

        text: {
            fontSize: 18,
            fontFamily: 'Calibri',
            margin: 10,
            padding: 10,
            marginHorizontal: 50,
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

        image: {
            width: 500,
            height: 400,
            resizeMode: 'contain',
        },
    })

    const [movie, setMovie] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [moviePlot, setMoviePlot] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    const fetchMovie = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/?apikey=${API_KEY}&t=${movie}`);

            if (response.data.Response === "False") {
                setMovieTitle("");
                setMoviePoster("");
                setMoviePlot("");

                setInfoMessage(response.data.Error);
            } else {
                setMovieTitle(response.data.Title);
                setMoviePoster(response.data.Poster);
                setMoviePlot(response.data.Plot);

                setInfoMessage("");
            }

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    function handleSearch() {
        setInfoMessage("Buscando película...");
        fetchMovie();
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Buscador de Películas</Text>
                <TextInput style={styles.textInput} placeholder="Nombre de la película..." value={movie} onChangeText={setMovie}></TextInput>
                <Button title="Buscar..." onPress={handleSearch}></Button>

                <View>
                    <Text style={styles.title}>{infoMessage}</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>{movieTitle}</Text>
                    <Image style={styles.image} source={moviePoster ? { uri: moviePoster } : require('./assets/default-movie.png')} />
                    <Text style={styles.text}>{moviePlot}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}