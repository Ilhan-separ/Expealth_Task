import {
  Animated,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import { useTheme } from "@react-navigation/native";

type ButtonType = {
  text: string;
  position: "absolute" | "relative";
  onPress: (event: GestureResponderEvent) => void;
};

const CustomButton = (probs: ButtonType) => {
  const { text, position, onPress } = probs;
  const { colors } = useTheme();

  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={[
        styles.button,
        {
          backgroundColor: colors.primary,
          position: position,
          bottom: 0,
        },
      ]}
    >
      <Animated.View style={{ opacity: animated }}>
        <Text style={styles.buttonText}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: horizontalScale(150),
    marginVertical: verticalScale(30),
    padding: moderateScale(14),
    borderRadius: moderateScale(50),
    alignItems: "center",
    elevation: 1,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: moderateScale(14.6),
    letterSpacing: 0.5,
  },
});
