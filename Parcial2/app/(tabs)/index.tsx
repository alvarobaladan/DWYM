import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { API_BASE_URL } from "@/components/Constants";
import axios from "axios";
import Card from "@/components/card";

// Solo para referencia
// import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";

// API: GET ALL (FETCH)
const fetchDestinations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      headers: {}
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default function Index() {
  const [destinations, setDestinations] = useState<any[]>([]);

  useEffect(() => {
    const getDestinations = async () => {
      const data = await fetchDestinations();
      setDestinations(data);
    };
    getDestinations();
  });

  return (
    <View style={{flex: 1, alignItems:'center'}}>
      <Text style={{fontSize: 20}}>Lista de Destinos</Text>
      <FlatList
        data={destinations}
        renderItem={({ item }) => (
          <Card id={item.id} name={item.name} difficulty={item.difficulty} favourite={item.favourite}></Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
