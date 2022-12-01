import { Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToSetting = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToSetting} title="Ir a Ajustes" />
    </SafeAreaView>
  );
}
