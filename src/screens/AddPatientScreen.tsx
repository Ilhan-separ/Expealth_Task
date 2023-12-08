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
import { Button, CheckBox } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addPatient } from "../redux/reducers";
import { generateUniqueId } from "../utils/generate-unique-id";
import Seperator from "../components/Seperator";
import CustomButton from "../components/Button";
import dieasesData from "../data/disease";
import moment from "moment";

const AddPatientScreen = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  //TextInput State
  const [patientName, setPatientName] = useState("");
  const [patientSurname, setPatientSurname] = useState("");

  //DatePicker State
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  //DatePicker func
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = moment(selectedDate).format("DD-MM-YYYY");
    setDate(currentDate);
  };
  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: new Date(),
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
  //CheckBox State
  const [diseases, setDieases] = useState(dieasesData);

  const handleCheckBoxChange = (id: number) => {
    let temp = diseases.map((diease) => {
      if (id === diease.id) {
        return { ...diease, isChecked: !diease.isChecked };
      }
      return diease;
    });
    setDieases(temp);
  };

  let selectedCheckBox = diseases.filter((disease) => disease.isChecked);

  //Redux dispatch
  const handleAddPatient = () => {
    const uniqueId = generateUniqueId();
    if (patientName) {
      const patient = {
        id: uniqueId,
        name: patientName,
        diseases: selectedCheckBox.map((item) => item.name),
      };
      dispatch(addPatient(patient));
    }

    setPatientName("");
  };

  return (
    <View style={styles.mainContainer}>
      <CustomTextInput
        placeholder="Hasta ismi"
        onChangeText={(text) => setPatientName(text)}
      />
      <CustomTextInput
        placeholder="Hasta Soyismi"
        onChangeText={(text) => setPatientSurname(text)}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%", // ÇOK SAÇMA YÜZDE DEĞİL DİREK DEĞER VER.
        }}
      >
        <Text style={[styles.dateText, { color: colors.text }]}>
          Doğum Tarihi
        </Text>

        <TouchableOpacity
          style={[
            styles.datePickerButton,
            { backgroundColor: colors.background, borderColor: colors.primary },
          ]}
          onPress={showDatepicker}
        >
          <Text style={[styles.dateDataText, { color: colors.text }]}>
            {date}
          </Text>
        </TouchableOpacity>
      </View>
      <Seperator />
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
          {diseases.map((item) => (
            <CheckBox
              key={item.id}
              title={item.name}
              checked={item.isChecked}
              onPress={() => handleCheckBoxChange(item.id)}
              checkedColor={colors.primary}
              uncheckedColor={"gray"}
              containerStyle={{
                backgroundColor: colors.background,
                borderWidth: 0,
              }}
              textStyle={{ color: colors.text }}
            />
          ))}
        </View>
        <View></View>
      </View>
      <Seperator />
      <Text style={[styles.subHeaderText, { color: colors.text }]}>
        Boy/Kilo Ölçümleri
      </Text>
      <CustomButton
        text={"Ekle"}
        position="relative"
        onPress={handleAddPatient}
      />
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
  datePickerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    height: verticalScale(40),
    width: horizontalScale(110),
    paddingHorizontal: horizontalScale(10),
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
  patientName: {
    fontSize: 18,
    fontWeight: "400",
  },
  dateDataText: {
    fontSize: moderateScale(16),
    fontWeight: "400",
    alignSelf: "center",
  },
});
