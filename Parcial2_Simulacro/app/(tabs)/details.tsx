import CardDetails from "@/components/cardDetails";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

interface DetailsProps {
  item?: any
}

//export default function Details({item}: DetailsProps) {
export default function Details() {

  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize: 20}}>Detalles del Planeta</Text>
        <CardDetails />
      </View>
    </SafeAreaView>
  );
}
