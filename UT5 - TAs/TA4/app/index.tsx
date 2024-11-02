import { useState } from "react";
import { Text, Image, View, SafeAreaView, StyleSheet, Button, ScrollView } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      margin: 5,
    },

    title: {
      fontSize: 20,
    },

    image: {
      resizeMode: "contain",
    }
  })

  const [image, setImage] = useState(require('./images/img1.jpg'));
  function handleChangeImage() {
    const img1 = require('./images/img1.jpg');
    const img2 = require('./images/img2.jpg');

    image === img1 ? setImage(img2) : setImage(img1);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>TA4 - Cambiar una imagen al pulsar un botón.</Text>
        <Button title="Cambiar Imagen" onPress={handleChangeImage}></Button>
        <Image style={styles.image} source={image}></Image>
      </View>
    </SafeAreaView>
  );
}
