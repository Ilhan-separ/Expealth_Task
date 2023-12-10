import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { horizontalScale } from "../theme/metrics";

type SupportButtonType = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
} & TouchableOpacityProps;

const SupportButton = ({
  text,
  onPress,
  style,
  ...props
}: SupportButtonType) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: colors.border },
        style,
      ]}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SupportButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: horizontalScale(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
