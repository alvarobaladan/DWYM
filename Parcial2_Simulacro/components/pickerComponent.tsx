import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet } from "react-native";

export default function pickerComponent() {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    picker: {
      flex: 1,
      height: 100,
      width: 300,

      margin: 5,
      textAlign: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'grey',
      borderRadius: 5,
    },
  });