import { StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";

type SubHeaderType = {
  text: string;
};

const SubHeader = ({ text }: SubHeaderType) => {
  const { colors } = useTheme();
  return (
    <Text
      style={[
        styles.subHeaderText,
        { color: colors.text, marginVertical: verticalScale(10) },
      ]}
    >
      {text}
    </Text>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  subHeaderText: {
    paddingTop: verticalScale(10),
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
});
