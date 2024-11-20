import Card from "@/components/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";


const fetchPlanets = async () => {
  try {
    console.log('Entro fetch');
    const response = await axios.get(`http://192.168.1.9:8000/planets`, {
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
      <Text style={{fontSize: 20}}>Lista de Planetas</Text>
      <FlatList
        data={planets}
        renderItem={({ item }) => (
          <Card id={item.id} name={item.name} image={item.image}></Card>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
