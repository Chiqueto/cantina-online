import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="bg-blue-500 h-96"    >
      <Text>Não fique de fora, que tal um rango enquanto assiste essa partida!?</Text>
      <Redirect href={"/(auth)/login"} />
    </View>

  );
}
