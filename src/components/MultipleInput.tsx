import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomTextInput from "./CustomTextInput";
import DatePickerButton from "./DatePickerButton";
import SupportButton from "./SupportButton";
import { horizontalScale, verticalScale } from "../theme/metrics";
import moment from "moment";
import { useTheme } from "@react-navigation/native";

type MultipleInputType = {
  index: number;
  handleTextChange: (index: number, newValue: string) => void;
  showDatePickerForIndex: (index: number) => void;
  removeOption: (index: number) => void;
  selectedHeightDates: Date[];
  value: string;
  contentValues: string[];
};

const MultipleInput = ({
  index,
  handleTextChange,
  showDatePickerForIndex,
  removeOption,
  selectedHeightDates,
  value,
  contentValues: heightValues,
}: MultipleInputType) => {
  const { colors } = useTheme();
  return (
    <View key={index} style={styles.inputContainer}>
      <CustomTextInput
        style={{ width: horizontalScale(130), marginTop: 0 }}
        onChangeText={(newValue) => handleTextChange(index, newValue)}
        placeholder={`Girdi ${index + 1}`}
        value={value}
        keyboardType="numeric"
      />
      <DatePickerButton
        date={moment(selectedHeightDates[index]).format("DD/MM/YYYY")}
        onPress={() => showDatePickerForIndex(index)}
        style={{
          marginHorizontal: horizontalScale(20),
          marginVertical: 0,
        }}
      />
      {heightValues.length > 1 && (
        <SupportButton
          text="Sil"
          onPress={() => removeOption(index)}
          style={{ backgroundColor: colors.card }}
        />
      )}
    </View>
  );
};

export default MultipleInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
});
