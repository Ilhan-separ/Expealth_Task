import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
