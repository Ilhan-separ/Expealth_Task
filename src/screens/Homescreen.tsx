import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import CustomButton from "../components/Button";


// EXTRACT TO ANOTHER CLASS
const patientsData = [
  { id: "1", name: "Ahmet Yılmaz", details: "Ahmet's details" },
  { id: "2", name: "Ayşe Demir", details: "Ayşe's details" },
  { id: "3", name: "Mustafa Kaya", details: "Mustafa's details" },
  { id: "4", name: "Zeynep Aksoy", details: "Zeynep's details" },
  { id: "5", name: "Mehmet Öztürk", details: "Mehmet's details" },
  { id: "6", name: "Elif Karahan", details: "Elif's details" },
  { id: "7", name: "Hakan Aydın", details: "Hakan's details" },
  { id: "8", name: "Mehmet Öztürk", details: "Mehmet's details" },
  { id: "9", name: "Elif Karahan", details: "Elif's details" },
  { id: "10", name: "Hakan Aydın", details: "Hakan's details" },
];

const Homescreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        data={patientsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.patientItem,
              { backgroundColor: colors.border, borderColor: colors.primary },
            ]}
          >
            <Text style={[styles.patientName, { color: colors.text }]}>
              {item.name}
            </Text>
            <AntDesign name="right" size={24} color={colors.notification} />
          </TouchableOpacity>
        )}
      />
      <CustomButton text="Add Patient" position="absolute" onPress={() => navigation.navigate("AddPatient")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(10),
    marginTop: verticalScale(100),
    paddingBottom: verticalScale(20),
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  patientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: moderateScale(24),
    borderWidth: 2,
    paddingVertical: verticalScale(28),
    paddingHorizontal: horizontalScale(16),
    marginBottom: verticalScale(16),
    width: "100%",
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
    fontWeight: "bold",
  },
});

export default Homescreen;
