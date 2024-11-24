import CardDetails from "@/components/cardDetails";
import { SafeAreaView, Text, View } from "react-native";

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
