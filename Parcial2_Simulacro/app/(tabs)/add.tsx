import { useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { API_BASE_URL } from "@/components/Constants";
import { router } from "expo-router";
import styles from "@/components/styles";

// API: POST
const postPlanet = async (dataJSON: any) => {
  console.log("Entro postPlanet");
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

export default function Index() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [moons, setMoons] = useState('');
  const [moons_names, setMoon_Names] = useState('');
  const [image, setImage] = useState('');

  function handleAdd() {
    const newPlanet = {
      name: name,
      description: description,
      moons: moons,
      moons_names: moons_names,
      image: image,
    }

    postPlanet(newPlanet);

    // Limpiar inputs
    setName('');
    setDescription('');
    setMoons('');
    setMoon_Names('');
    setImage('');

    console.log('Se agrego un nuevo planeta');
    router.navigate(`/`);
  }

  return (
    <View>
      <Text style={{fontSize: 20, alignSelf:'center'}}>Agregar un nuevo planeta</Text>

      <View style={{ flex: 1 }}>
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
          onChangeText={setMoons} value={moons}
          placeholder="Ingrese la cantidad de lunas del planeta...">
        </TextInput>

        <Text>Lunas (Nombres)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setMoon_Names}
          value={moons_names}
          placeholder="Ingrese los nombres de las lunas...">
        </TextInput>

        <Text>Imagen:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setImage}
          value={image}
          placeholder="Ingrese la URL de la imagen del planeta...">
        </TextInput>

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
