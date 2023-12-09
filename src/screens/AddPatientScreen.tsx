import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import { useTheme } from "@react-navigation/native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { CheckBox } from "react-native-elements";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch } from "react-redux";
import { addPatient } from "../redux/reducers";
import { generateUniqueId } from "../utils/generate-unique-id";
import Seperator from "../components/Seperator";
import CustomButton from "../components/CustomButton";
import dieasesData from "../data/disease";
import moment from "moment";

import { AntDesign } from "@expo/vector-icons";

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
        name: patientName + " " + patientSurname,
        diseases: selectedCheckBox.map((item) => item.name),
      };
      dispatch(addPatient(patient));
    }

    setPatientName("");
  };

  //Dropdown state
  const drowDownUnitSize = [1, 2, 3, 4, 5, 6, 7];
  const kiloDropDownUnit = ["kg", "g"];

  const [selectedSize, setSelectedSize] = React.useState(1);

  const olay = [{}];

  const [dynamicContent, setDynamicContent] = useState([]);

  const [boyTextInputValues, setBoyTextInputValues] = useState([]);

  // useEffect(() => {
  //   setBoyTextInputValues(op)
  // })

  // const handleMultipleTextChange = (index:any,newValue:any) => {
  //   setBoyTextInputValues(prev => prev.map(val,i) => index === i ?newValue:val)
  // }

  const addDynamicContent = () => {
    // Add the desired JSX code dynamically
    const newContent = (
      <View
        key={dynamicContent.length}
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <SelectDropdown
          key={dynamicContent.length + 1}
          data={drowDownUnitSize}
          buttonStyle={{
            width: horizontalScale(80),
            height: verticalScale(40),
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: moderateScale(16),
            margin: 0,
            padding: 0,
          }}
          buttonTextStyle={{ color: colors.text }}
          onSelect={(selectedItem, index) => {
            setSelectedSize(selectedItem);
            console.log(selectedSize);
          }}
          defaultButtonText="1"
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={() => (
            <AntDesign
              name="down"
              size={moderateScale(10)}
              color={colors.text}
            />
          )}
        />
        <TextInput
          style={[
            styles.input,
            {
              borderColor: colors.primary,
              backgroundColor: colors.background,
              color: colors.text,
              width: horizontalScale(100),
              borderRadius: moderateScale(16),
              marginBottom: verticalScale(20),
            },
          ]}
          cursorColor={colors.notification}
          placeholderTextColor={"gray"}
          placeholder={"Sonuç"}
        />
        <TouchableOpacity
          key={dynamicContent.length + 3}
          style={[
            styles.datePickerButton,
            {
              backgroundColor: colors.background,
              borderColor: colors.primary,
              marginBottom: verticalScale(20),
            },
          ]}
          onPress={showDatepicker}
        >
          <Text style={[styles.dateDataText, { color: colors.text }]}>
            {date}
          </Text>
        </TouchableOpacity>
      </View>
    );

    // Update the state with the new content
    setDynamicContent((prevContent) => [...prevContent, newContent]);
  };

  return (
    <ScrollView>
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
              {
                backgroundColor: colors.background,
                borderColor: colors.primary,
              },
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

        {diseases.map((item) => (
          <CheckBox
            key={item.id}
            title={item.name}
            checked={item.isChecked}
            onPress={() => handleCheckBoxChange(item.id)}
            checkedColor={colors.primary}
            uncheckedColor={"gray"}
            containerStyle={[
              styles.checkBoxContainer,
              {
                backgroundColor: colors.background,
              },
            ]}
            textStyle={[styles.checkBoxText, { color: colors.text }]}
          />
        ))}

        <Seperator />
        <Text style={[styles.subHeaderText, { color: colors.text }]}>
          Boy/Kilo Ölçümleri
        </Text>
        <View
          style={{
            marginVertical: verticalScale(10),
          }}
        >
          <Text style={[styles.dropDownHeaderText, { color: colors.text }]}>
            Ölçüm miktarı
          </Text>
          <SelectDropdown
            data={drowDownUnitSize}
            buttonStyle={{
              width: verticalScale(80),
              backgroundColor: colors.background,
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: moderateScale(16),
            }}
            buttonTextStyle={{ color: colors.text }}
            onSelect={(selectedItem, index) => {
              setSelectedSize(selectedItem);
              console.log(selectedSize);
            }}
            defaultButtonText="1"
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={() => (
              <AntDesign
                name="down"
                size={moderateScale(14)}
                color={colors.text}
              />
            )}
          />
        </View>
        {dynamicContent.map((content, index) => (
          // Make sure to use a unique key for each dynamic content
          <View key={index}>{content}</View>
        ))}
        <View style={{ flexDirection: "row" }}></View>
        <CustomButton
          text={"Ekle"}
          position="relative"
          onPress={handleAddPatient}
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
  dateDataText: {
    fontSize: moderateScale(16),
    fontWeight: "400",
    alignSelf: "center",
  },

  checkBoxContainer: {
    marginVertical: verticalScale(1),
    borderWidth: 0,
  },
  checkBoxText: {
    fontWeight: "400",
  },
  dropDownHeaderText: {
    fontSize: moderateScale(13),
    fontWeight: "400",
    paddingLeft: horizontalScale(4),
    paddingBottom: verticalScale(3),
  },
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
