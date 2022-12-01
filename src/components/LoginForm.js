import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Button title="Enviar" onPress={() => console.log("Enviado")} />
    </View>
  );
}
