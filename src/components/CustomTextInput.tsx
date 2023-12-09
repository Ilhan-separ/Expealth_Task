import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { moderateScale, verticalScale } from "../theme/metrics";
import { useTheme } from "@react-navigation/native";

type CustomTextInputProps = {
  placeholder: string;
} & TextInputProps;

const CustomTextInput = ({
  placeholder,

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
          width: "80%",
          borderRadius: moderateScale(16),
        },
      ]}
      cursorColor={colors.notification}
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
