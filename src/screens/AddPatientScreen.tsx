import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../components/TextInput'
import { horizontalScale, moderateScale, verticalScale } from '../theme/metrics'
import { useTheme } from '@react-navigation/native'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



const AddPatientScreen = () => {
  const {colors} = useTheme();

  const [date, setDate] = useState(new Date());

  const onChange = (event: any, selectedDate: any)=>{
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour:true,
    });
  }

  const showDatepicker = () => {
    showMode('date');
  }

  return (
    <View style={styles.mainContainer}>
     <CustomTextInput placeholder='Hasta ismi'/>
     <CustomTextInput placeholder='Hasta Soyismi'/>
     <Text style={[styles.dateText,{color:colors.text}]}>Doğum Tarihi</Text>
     
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
  )
}

export default AddPatientScreen

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    marginTop: verticalScale(80),
    marginLeft: horizontalScale(18),
    
  },
  dateText:{
    marginTop: verticalScale(10),
    fontSize: moderateScale(16),
    fontWeight:'500'
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
})