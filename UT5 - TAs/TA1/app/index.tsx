import { Text, Button, View, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Index() {

  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      textAlign: 'center',
    },

    buttonAdd: {
      backgroundColor: 'green',
    },

    buttonSubtract: {
      backgroundColor: 'red',
    },
  })

  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Contador</Text>
        <Text style={styles.text}>{counter}</Text>
        <Button color='green' title="Incrementar" onPress={() => setCounter((counter) => counter + 1)}></Button>
        <Button color='red' title="Decrementar" onPress={() => setCounter((counter) => counter - 1)}></Button>
      </View>
    </SafeAreaView>
  );


}
