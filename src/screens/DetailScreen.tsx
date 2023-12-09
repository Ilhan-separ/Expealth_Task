import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DynamicTextInputExampleProps {}

const DynamicTextInputExample: React.FC<DynamicTextInputExampleProps> = () => {
  const [values, setValues] = useState<string[]>([""]);
  const [selectedDates, setSelectedDates] = useState<Date[]>([new Date()]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleTextChange = (index: number, newValue: string) => {
    setValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue;
      return updatedValues;
    });
  };

  const handleDateChange = (index: number, newDate: Date) => {
    setSelectedDates((prevSelectedDates) => {
      const updatedSelectedDates = [...prevSelectedDates];
      updatedSelectedDates[index] = newDate;
      return updatedSelectedDates;
    });
    setShowDatePicker(false);
    setSelectedIndex(null);
  };

  const showDatePickerForIndex = (index: number) => {
    setShowDatePicker(true);
    setSelectedIndex(index);
  };

  const addOption = () => {
    setValues((prevValues) => [...prevValues, ""]);
    setSelectedDates((prevSelectedDates) => [...prevSelectedDates, new Date()]);
  };

  const removeOption = (index: number) => {
    setValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues.splice(index, 1);
      return updatedValues;
    });

    setSelectedDates((prevSelectedDates) => {
      const updatedSelectedDates = [...prevSelectedDates];
      updatedSelectedDates.splice(index, 1);
      return updatedSelectedDates;
    });
  };

  return (
    <View style={styles.container}>
      {values.map((value, index) => (
        <View key={index} style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(newValue) => handleTextChange(index, newValue)}
            value={value}
            placeholder={`Option ${index + 1}`}
          />
          <TouchableOpacity
            onPress={() => showDatePickerForIndex(index)}
            style={styles.datePickerButton}
          >
            <Text style={styles.dateButtonText}>
              {selectedDates[index].toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {values.length > 1 && (
            <TouchableOpacity
              onPress={() => removeOption(index)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
      <TouchableOpacity onPress={addOption} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Option</Text>
      </TouchableOpacity>

      {showDatePicker && selectedIndex !== null && (
        <DateTimePicker
          value={selectedDates[selectedIndex]}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(event, newDate) =>
            handleDateChange(selectedIndex!, newDate || new Date())
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
  },
  datePickerButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  dateButtonText: {
    color: "white",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
  },
});

export default DynamicTextInputExample;
