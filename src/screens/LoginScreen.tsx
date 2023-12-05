import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { DarkColors } from "../theme/colors";

const LoginScreen = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text style={{ color: DarkColors.colors.text }}>Baban</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
