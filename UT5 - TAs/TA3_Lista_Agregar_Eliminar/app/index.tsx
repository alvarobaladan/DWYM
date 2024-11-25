import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList } from "react-native";
import { useState } from 'react';

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      margin: 5,
    },

    title: {
      fontSize: 20,
    },

    textResult: {
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

  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);


  function handleAdd() {
    setTasks([...tasks, taskTitle]);
    setTaskTitle('');
  }

  function handleDelete(indexToDelete: number){
      setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>TA3 - Crear una lista de tareas donde se pueda añadir y eliminar elementos.</Text>
        <TextInput style={styles.textInput} placeholder="Nueva tarea..." onChangeText={setTaskTitle} value={taskTitle}></TextInput>
        <Button title="Agregar Tarea" onPress={handleAdd}></Button>
        <Text>Lista de tareas:</Text>

        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            <View>
              <Text>{item}</Text>
              <Button title='Eliminar' onPress={() => handleDelete(index)}></Button>
            </View>
          }>
        </FlatList>
      </View>
    </SafeAreaView>
  );
}
