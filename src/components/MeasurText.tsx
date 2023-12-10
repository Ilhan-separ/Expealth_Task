import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import { useTheme } from "@react-navigation/native";

type MeasurTextType = {
  text1: string;
};

const MeasurText = ({ text1 }: MeasurTextType) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: verticalScale(10),
      }}
    >
      <Text style={[styles.dropDownHeaderText, { color: colors.text }]}>
        {text1}
      </Text>
      <Text
        style={[
          styles.dropDownHeaderText,
          { color: colors.text, marginLeft: horizontalScale(60) },
        ]}
      >
        Ölçüm Tarihi
      </Text>
    </View>
  );
};

export default MeasurText;

const styles = StyleSheet.create({
  dropDownHeaderText: {
    fontSize: moderateScale(13),
    fontWeight: "400",
    paddingLeft: horizontalScale(4),
    paddingBottom: verticalScale(3),
  },
});
