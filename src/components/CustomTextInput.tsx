import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { moderateScale, verticalScale } from "../theme/metrics";
import { useTheme } from "@react-navigation/native";

type CustomTextInputProps = {
  placeholder: string;
} & TextInputProps;

const CustomTextInput = ({
  placeholder,
  style,
  ...props
}: CustomTextInputProps) => {
  const { colors } = useTheme();
  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: colors.primary,
          backgroundColor: colors.background,
          color: colors.text,
          borderRadius: moderateScale(16),
        },
        style,
      ]}
      cursorColor={colors.text}
      placeholderTextColor={"gray"}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    height: verticalScale(40),
    marginTop: verticalScale(16),
    borderWidth: 1,
    width: "80%",
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
