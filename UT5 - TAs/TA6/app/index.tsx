import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

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

    swipeable: {
      height: 100,
      width: 350,
      margin: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'black',
      alignItems: 'center',
    },

    deleteButton: {
      backgroundColor: 'red',
      fontSize: 20,
      textAlign: 'center',
    }
  })

  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAdd() {
    setTasks([...tasks, taskTitle]);
    setTaskTitle('');
  }

  function handleDelete(indexToDelete: number) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  const renerRightActions = (index: number) => (
    <View>
      <TouchableOpacity onPress={() => handleDelete(index)}>
        <Text style={styles.deleteButton}>Eliminar</Text>
      </TouchableOpacity>
    </View>

  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>TA6 - Implementar una lista de elementos con la opción de eliminar mediante un gesto de swipe (hacer una copia de lo hecho en la TA 3).</Text>
        <TextInput style={styles.textInput} placeholder="Nueva tarea..." onChangeText={setTaskTitle} value={taskTitle}></TextInput>
        <Button title="Agregar Tarea" onPress={handleAdd}></Button>
        <Text>Lista de tareas:</Text>

        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            <GestureHandlerRootView>
              <Swipeable
                containerStyle={styles.swipeable}
                friction={2}
                enableTrackpadTwoFingerGesture
                rightThreshold={40}
                renderRightActions={() => renerRightActions(index)}>
                <View>
                  <Text>{item}</Text>
                </View>
              </Swipeable>
            </GestureHandlerRootView>
          }>
        </FlatList>
      </View>
    </SafeAreaView>
  );
}
