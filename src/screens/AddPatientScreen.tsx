import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/TextInput";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import { useTheme } from "@react-navigation/native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { CheckBox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const AddPatientScreen = () => {
  const { colors } = useTheme();

  const [date, setDate] = useState(new Date());
  const [check1, setCheck1] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      positiveButton: { label: "Tamam", textColor: colors.primary },
      negativeButton: { label: "İptal", textColor: "gray" },
      style: { backgroundColor: colors.primary },
    });
  };

  const showDatepicker = () => {
    showMode("default");
  };

  return (
    <View style={styles.mainContainer}>
      <CustomTextInput placeholder="Hasta ismi" />
      <CustomTextInput placeholder="Hasta Soyismi" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%", // ÇOK SAÇMA YÜZDE DEĞİL DİREK DEĞER VER.
        }}
      >
        <Text style={[styles.dateText, { color: colors.text }]}>
          Doğum Tarihi
        </Text>

        <TouchableOpacity
          style={[
            styles.patientItem,
            { backgroundColor: colors.background, borderColor: colors.primary },
          ]}
          onPress={showDatepicker}
        >
          <Text style={[styles.patientName, { color: colors.text }]}>
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "gray" }}
      ></View>
      <Text style={[styles.subHeaderText, { color: colors.text }]}>
        Şikayetler
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: horizontalScale(30),
          marginVertical: verticalScale(14),
        }}
      >
        <View>
          <CheckBox
            title={"Öksürük"}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            checkedColor={colors.primary}
            uncheckedColor={"gray"}
            containerStyle={{
              backgroundColor: colors.background,
              borderWidth: 0,
            }}
            textStyle={{ color: colors.text }}
          />
          <CheckBox
            title={"Öksürük"}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            uncheckedColor={"gray"}
            checkedColor={colors.primary}
            containerStyle={{
              backgroundColor: colors.background,
              borderWidth: 0,
            }}
            textStyle={{ color: colors.text }}
          />
          <CheckBox
            title={"Öksürük"}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            uncheckedColor={"gray"}
            checkedColor={colors.primary}
            containerStyle={{
              backgroundColor: colors.background,
              borderWidth: 0,
            }}
            textStyle={{ color: colors.text }}
          />
        </View>
        <View>
          <CheckBox
            title={"Öksürük"}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            uncheckedColor={"gray"}
            checkedColor={colors.primary}
            containerStyle={{
              backgroundColor: colors.background,
              borderWidth: 0,
            }}
            textStyle={{ color: colors.text }}
          />
          <CheckBox
            title={"Öksürük"}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            uncheckedColor={"gray"}
            checkedColor={colors.primary}
            containerStyle={{
              backgroundColor: colors.background,
              borderWidth: 0,
            }}
            textStyle={{ color: colors.text }}
          />
          <CheckBox
            title={"Öksürük"}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            uncheckedColor={"gray"}
            checkedColor={colors.primary}
            containerStyle={{
              backgroundColor: colors.background,
              borderWidth: 0,
            }}
            textStyle={{ color: colors.text }}
          />
        </View>
      </View>
      <Text style={[styles.subHeaderText, { color: colors.text }]}>
        Boy/Kilo Ölçümleri
      </Text>
    </View>
  );
};

export default AddPatientScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: verticalScale(80),
    paddingHorizontal: horizontalScale(18),
  },
  dateText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  subHeaderText: {
    paddingTop: verticalScale(10),
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  patientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: moderateScale(16),
    borderWidth: 2,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(16),
    width: horizontalScale(110),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "400",
  },
});
