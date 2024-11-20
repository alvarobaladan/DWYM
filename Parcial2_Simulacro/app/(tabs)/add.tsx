import { useState } from "react";
import { StyleSheet, TextInput, SafeAreaView, Text, View, TouchableOpacity } from "react-native";

// API: Llamada al servidor POST
const postPlanet = async (dataJSON: any) => {
  console.log("Entro postPlanet");
  const response = await fetch(`http://localhost:8000/planets`, {
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
  }

  return (
    <SafeAreaView>
      <Text>Este es la pagina de Add</Text>
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
    </SafeAreaView>
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
    maxWidth: 800,
  },

  button: {
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    height: 50,
    width: 200,
    alignSelf: 'center',
  },
})
