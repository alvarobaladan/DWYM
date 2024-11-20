import Card from "@/components/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";


const fetchPlanets = async () => {
  try {
    console.log('Entro fetch');
    const response = await axios.get(`http://localhost:8000/planets`, {
      headers: {}
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default function Index() {
  const [planets, setPlanets] = useState<any[]>([]);

  useEffect(() => {
    const getPlanets = async () => {
      const data = await fetchPlanets();
      setPlanets(data);
    };
    getPlanets();
  }, []);

  return (
    <View style={{flex: 1, alignItems:'center'}}>
      <Text>Este es el Home</Text>
      <FlatList
        data={planets}
        renderItem={({ item }) => (
          <Card name={item.name} image={item.image}></Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
