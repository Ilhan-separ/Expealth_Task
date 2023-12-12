import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import React, { useState } from "react";

import { useNavigation, useTheme } from "@react-navigation/native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { CheckBox } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addPatient } from "../redux/reducers";
import { generateUniqueId } from "../utils/generate-unique-id";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import MeasurText from "../components/MeasurText";
import SubHeader from "../components/SubHeader";
import DatePickerButton from "../components/DatePickerButton";
import SupportButton from "../components/SupportButton";
import MultipleInput from "../components/MultipleInput";
import Seperator from "../components/Seperator";
import CustomButton from "../components/CustomButton";
import dieasesData from "../data/disease";
import CustomTextInput from "../components/CustomTextInput";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from "../theme/metrics";

const AddPatientScreen = () => {
  //
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { colors } = useTheme();

  //TextInput State
  const [patientName, setPatientName] = useState("");
  const [patientSurname, setPatientSurname] = useState("");
  const [errorText, setErrorText] = useState("");

  //Doğum Tarihi DatePicker State
  const [date, setDate] = useState(moment(new Date()).format("DD/MM/YYYY"));
  //DatePicker func
  const tempDate = moment(new Date()).format("DD/MM/YYYY");
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = moment(selectedDate).format("DD/MM/YYYY");
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

  //Multiple Input State Control

  //Height
  const [heightValues, setHeightValues] = useState<string[]>([""]);
  const [selectedHeightDates, setSelectedHeightDates] = useState<Date[]>([
    new Date(),
  ]);
  const [showHeightDatePicker, setShowHeightDatePicker] = useState(false);
  const [selectedHeightIndex, setSelectedHeightIndex] = useState<number | null>(
    null
  );
  //Weight
  const [weightValues, setWeightValues] = useState<string[]>([""]);
  const [selectedWeightDates, setSelectedWeightDates] = useState<Date[]>([
    new Date(),
  ]);
  const [showWeightDatePicker, setShowWeightDatePicker] = useState(false);
  const [selectedWeightIndex, setSelectedWeightIndex] = useState<number | null>(
    null
  );

  //Handele MultipleInputs functions
  const handleHeightTextChange = (index: number, newValue: string) => {
    setHeightValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue;
      return updatedValues;
    });
  };
  const handleWeightTextChange = (index: number, newValue: string) => {
    setWeightValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue;
      return updatedValues;
    });
  };

  const handleHeightDateChange = (index: number, newDate: Date) => {
    setSelectedHeightDates((prevSelectedDates) => {
      const updatedSelectedDates = [...prevSelectedDates];
      updatedSelectedDates[index] = newDate;
      return updatedSelectedDates;
    });
    setShowHeightDatePicker(false);
    setSelectedHeightIndex(null);
  };

  const handleWeightDateChange = (index: number, newDate: Date) => {
    setSelectedWeightDates((prevSelectedDates) => {
      const updatedSelectedDates = [...prevSelectedDates];
      updatedSelectedDates[index] = newDate;
      return updatedSelectedDates;
    });
    setShowWeightDatePicker(false);
    setSelectedWeightIndex(null);
  };

  const addHeightOption = () => {
    setHeightValues((prevValues) => [...prevValues, ""]);
    setSelectedHeightDates((prevSelectedDates) => [
      ...prevSelectedDates,
      new Date(),
    ]);
  };

  const addWeightOption = () => {
    setWeightValues((prevValues) => [...prevValues, ""]);
    setSelectedWeightDates((prevSelectedDates) => [
      ...prevSelectedDates,
      new Date(),
    ]);
  };

  const removeHeightOption = (index: number) => {
    setHeightValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues.splice(index, 1);
      return updatedValues;
    });

    setSelectedHeightDates((prevSelectedDates) => {
      const updatedSelectedDates = [...prevSelectedDates];
      updatedSelectedDates.splice(index, 1);
      return updatedSelectedDates;
    });
  };

  const removeWeightOption = (index: number) => {
    setWeightValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues.splice(index, 1);
      return updatedValues;
    });

    setSelectedWeightDates((prevSelectedDates) => {
      const updatedSelectedDates = [...prevSelectedDates];
      updatedSelectedDates.splice(index, 1);
      return updatedSelectedDates;
    });
  };

  const showDatePickerForHeightIndex = (index: number) => {
    setSelectedHeightIndex(index);
    setShowHeightDatePicker(true);
  };

  const showDatePickerForWeightIndex = (index: number) => {
    setSelectedWeightIndex(index);
    setShowWeightDatePicker(true);
  };

  //Toast func
  const showToast = () => {
    ToastAndroid.showWithGravity(
      "Hasta Eklendi",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  //Redux dispatch
  const handleAddPatient = () => {
    const uniqueId = generateUniqueId();
    const mergedHeightList = heightValues.map((value, index) => ({
      value,
      date: moment(selectedHeightDates[index]).format("YYYY-MM-DD"),
    }));
    console.log("HH", mergedHeightList);
    const mergedWeightList = weightValues.map((value, index) => ({
      value,
      date: moment(selectedWeightDates[index]).format("YYYY-MM-DD"),
    }));
    console.log("WW", mergedWeightList);
    if (!patientName.trim() || !patientSurname.trim() || date === tempDate) {
      Alert.alert(
        "Hasta Ekleme Başarısız",
        "Lütfen gerekli boşlukları doldurun.",
        [
          {
            text: "Tamam",
          },
        ]
      );
      setErrorText("*Lütfen doldurun");
      return;
    }
    if (patientName && patientSurname && date !== tempDate) {
      const patient = {
        id: uniqueId,
        name: patientName + " " + patientSurname,
        birthDay: date,
        diseases: selectedCheckBox.map((item) => item.name),
        heightData: mergedHeightList,
        weightData: mergedWeightList,
      };
      const success = dispatch(addPatient(patient));
      if (success) {
        showToast();
        navigation.goBack();
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <SubHeader text="İsim Soyisim" />
        <CustomTextInput
          placeholder="Hasta ismi"
          onChangeText={(text) => setPatientName(text)}
        />
        <Text style={[styles.errorTestStyle, { color: colors.card }]}>
          {errorText}
        </Text>
        <CustomTextInput
          placeholder="Hasta Soyismi"
          onChangeText={(text) => setPatientSurname(text)}
        />
        <Text style={[styles.errorTestStyle, { color: colors.card }]}>
          {errorText}
        </Text>
        <View style={styles.birthDateContainer}>
          <Text style={[styles.dateText, { color: colors.text }]}>
            Doğum Tarihi
          </Text>
          <DatePickerButton date={date} onPress={showDatepicker} />
        </View>
        <Text
          style={[
            styles.errorTestStyle,
            {
              color: colors.card,
              marginLeft: "auto",
              marginRight: verticalScale(86),
            },
          ]}
        >
          {errorText}
        </Text>
        <Seperator />
        <SubHeader text="Şikayetler" />
        <View style={styles.marginVertival}>
          {diseases.map((item) => (
            <CheckBox
              key={item.id}
              title={item.name}
              checked={item.isChecked}
              onPress={() => handleCheckBoxChange(item.id)}
              checkedColor={colors.primary}
              uncheckedColor={"gray"}
              textStyle={[styles.checkBoxText, { color: colors.text }]}
              containerStyle={[
                styles.checkBoxContainer,
                {
                  backgroundColor: colors.background,
                },
              ]}
            />
          ))}
        </View>
        <Seperator />
        <SubHeader text="Boy Ölçümleri" />
        <MeasurText text1="Sonuç (örn 182)" />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled
          style={{ maxHeight: verticalScale(170) }}
        >
          {heightValues.map((value, index) => (
            <MultipleInput
              index={index}
              value={value}
              handleTextChange={handleHeightTextChange}
              contentValues={heightValues}
              removeOption={removeHeightOption}
              selectedHeightDates={selectedHeightDates}
              showDatePickerForIndex={showDatePickerForHeightIndex}
            />
          ))}
        </ScrollView>
        <SupportButton
          text="Girdi Ekle"
          onPress={addHeightOption}
          style={styles.addButton}
        />
        {showHeightDatePicker && selectedHeightIndex !== null && (
          <DateTimePicker
            value={selectedHeightDates[selectedHeightIndex]}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, newDate) => {
              setShowHeightDatePicker(false);
              setSelectedHeightIndex(null);
              handleHeightDateChange(
                selectedHeightIndex!,
                newDate || new Date()
              );
            }}
          />
        )}

        <Seperator />
        <SubHeader text="Kilo Ölçümleri" />
        <MeasurText text1="Sonuç (örn 76)" />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled
          style={{ maxHeight: verticalScale(170) }}
        >
          {weightValues.map((value, index) => (
            <MultipleInput
              value={value}
              index={index}
              handleTextChange={handleWeightTextChange}
              contentValues={weightValues}
              removeOption={removeWeightOption}
              selectedHeightDates={selectedWeightDates}
              showDatePickerForIndex={showDatePickerForWeightIndex}
            />
          ))}
        </ScrollView>
        <SupportButton
          text="Girdi Ekle"
          onPress={addWeightOption}
          style={styles.addButton}
        />
        {showWeightDatePicker && selectedWeightIndex !== null && (
          <DateTimePicker
            value={selectedWeightDates[selectedWeightIndex]}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, newDate) => {
              setShowWeightDatePicker(false);
              setSelectedWeightIndex(null);
              handleWeightDateChange(
                selectedWeightIndex!,
                newDate || new Date()
              );
            }}
          />
        )}
        <CustomButton
          text={"Ekle"}
          position="relative"
          onPress={() => {
            handleAddPatient();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default AddPatientScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(18),
  },
  birthDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: verticalScale(10),
  },
  dateText: {
    fontSize: moderateScale(16),
    fontWeight: "500",
  },

  errorTestStyle: {
    fontWeight: "300",
    fontSize: moderateScale(12),
    marginTop: verticalScale(2),
    marginLeft: horizontalScale(10),
  },
  marginVertival: {
    marginVertical: verticalScale(10),
  },

  checkBoxContainer: {
    marginVertical: verticalScale(1),
    borderWidth: 0,
  },
  checkBoxText: {
    fontWeight: "400",
  },
  removeButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: horizontalScale(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  removeButtonText: {
    color: "white",
  },
  addButton: {
    width: horizontalScale(100),
    padding: 10,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: horizontalScale(10),
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(40),
    borderRadius: moderateScale(5),
    marginVertical: verticalScale(16),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  addButtonText: {
    color: "white",
  },
});
