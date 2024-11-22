import { useState } from "react";
import { StyleSheet, TextInput, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { API_BASE_URL } from "@/components/Constants";
import { router } from "expo-router";

// API: Llamada al servidor POST
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
  },

  title: {
    fontSize: 20,
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
  },
  

  button: {
    width:100,
    height:40,
    margin:5,
    alignSelf: 'center',
    
    backgroundColor: '#FAFBFC',
    borderColor: 'black', //rgba(27, 31, 35, 0.15)
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1B1F23',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 0,
  },
})
