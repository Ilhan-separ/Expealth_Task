import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Homescreen = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Homescreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Homescreen;
