import { useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { API_BASE_URL } from "@/components/Constants";
import { router } from "expo-router";
import styles from "@/components/styles";

// API: POST
const postDestination = async (dataJSON: any) => {
  console.log("Entro postDestination");
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST', headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(dataJSON)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}


export default function Add() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [favourite, setFavourite] = useState(false);


  function handleAdd() {
    const newDestination = {
      name: name,
      description: description,
      difficulty: difficulty,
      favourite: favourite,
    }

    postDestination(newDestination);

    // Limpiar inputs
    setName('');
    setDescription('');
    setDifficulty('');
    setFavourite(false);

    console.log('Se agrego un nuevo destino');
    router.navigate(`/`);
  }

  return (

    <View>
      <Text style={{fontSize: 20, alignSelf:'center'}}>Agregar un nuevo Destino</Text>

      <View>
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
          onChangeText={setDifficulty} value={difficulty}
          placeholder="Dificultad del destino...">
        </TextInput>

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}