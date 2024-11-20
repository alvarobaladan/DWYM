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
        <Text>Esta es la pagina de detalles</Text>
      </View>
    </SafeAreaView>
  );
}
