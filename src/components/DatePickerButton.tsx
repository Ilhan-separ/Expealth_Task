import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";

type DatePickerButtonType = {
  date: string;
  onPress: (event: GestureResponderEvent) => void;
} & TouchableOpacityProps;

const DatePickerButton = ({
  date,
  onPress,
  style,
  ...props
}: DatePickerButtonType) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.datePickerButton,
        {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
        style,
      ]}
      {...props}
      onPress={onPress}
    >
      <Text style={styles.dateDataText}>{date}</Text>
    </TouchableOpacity>
  );
};

export default DatePickerButton;

const styles = StyleSheet.create({
  datePickerButton: {
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(40),
    width: horizontalScale(110),
    borderRadius: moderateScale(16),
    borderWidth: 2,
    marginVertical: verticalScale(16),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dateDataText: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    alignSelf: "center",
    color: "white",
  },
});
