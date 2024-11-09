import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, Image, ScrollView } from "react-native";
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


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

        description: {
            margin: 50,
            fontSize: 15,
        },

        image: {
            width: 500,
            height: 400,
            resizeMode: 'contain',
        },
    });

    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
    const [image, setImage] = useState<string | null>(null);
    const [infoMessage, setInfoMessage] = useState('');

    const pickImage = async() => {
        if(!status?.granted){
            const permission = await requestPermission();
            if(!permission.granted){
                setInfoMessage("Es necesario permitir el acceso a la galería de imágenes para poder seleccionar una foto.");
                return;
            }
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Image Picker</Text>
                <Text style={styles.description}>Crear una aplicación que utilice la librería expo-image-picker para acceder al álbum de fotos del usuario, subir una a la aplicación, y mostrarla en pantalla.</Text>
                <Button title="Seleccionar imágen desde el álbum de fotos..." onPress={pickImage}/>
                <View>
                    <Text style={styles.title}>{infoMessage}</Text>
                </View>

                <View>
                    {image && <Image source={{ uri: image}} style={styles.image}/> }
                </View>
            </View>
        </SafeAreaView>
    );
}