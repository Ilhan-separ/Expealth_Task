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
          color: colors.text,
          width: "80%",
          borderRadius: moderateScale(18),
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
    marginVertical: verticalScale(14),
    borderWidth: 1,
    padding: 10,
  },
});
