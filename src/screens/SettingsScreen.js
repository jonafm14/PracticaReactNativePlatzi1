import { Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>Estamos en SettingsScreen</Text>
      <Button onPress={() => goToHome("Home")} title="Ir a Home" />
    </SafeAreaView>
  );
}
