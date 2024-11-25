import { Text, TextInput, View, SafeAreaView, StyleSheet } from "react-native";
import { useState } from 'react';

export default function Index() {
  const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      margin: 5,
    },

    title:{
      fontSize: 20,
    },

    textResult:{
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontFamily: 'Calibri',
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
  })

  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>TA2 - Capturar y mostrar el texto ingresado por el usuario.</Text>
        <TextInput style={styles.textInput} onChangeText={setText} value={text} placeholder="Ingrese un texto..."></TextInput>
        <Text>Texto ingresado en el input:</Text>
        <Text style={styles.textResult}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}
