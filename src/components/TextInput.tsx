import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "../theme/metrics";
import { useTheme } from "@react-navigation/native";

type TextInputType = {
  placeholder: string;
};

const CustomTextInput = ({ placeholder }: TextInputType) => {
  const { colors } = useTheme();
  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: colors.primary,
          backgroundColor: colors.background,
          color: colors.text,
          width: "80%",
          borderRadius: moderateScale(16),
        },
      ]}
      cursorColor={colors.notification}
      placeholderTextColor={"gray"}
      placeholder={placeholder}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: verticalScale(45),
    marginTop: verticalScale(16),
    borderWidth: 1,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
