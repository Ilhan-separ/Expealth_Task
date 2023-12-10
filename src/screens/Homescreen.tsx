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
import CustomButton from "../components/CustomButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// EXTRACT TO ANOTHER CLASS
const patientsData = [
  { id: "1", name: "Ahmet Yılmaz", details: "Ahmet's details" },
  { id: "2", name: "Ayşe Demir", details: "Ayşe's details" },
];

const Homescreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const patients = useSelector((state: RootState) => state.patients);
  console.log("Current Redux State: ", patients);

  return (
    <View style={styles.container}>
      {patients.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
          data={patients}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.patientItem,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => navigation.navigate("Details", { data: item })}
            >
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text style={[styles.patientName, { color: colors.text }]}>
                  {item.name}
                </Text>
                <View style={styles.subTextContainer}>
                  {item.diseases.map(
                    (disease: string, index: React.Key | null | undefined) => (
                      <Text
                        key={index}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.subText}
                      >
                        {disease}
                        {" - "}
                      </Text>
                    )
                  )}
                </View>
              </View>
              <AntDesign name="right" size={24} color={colors.text} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={{ color: colors.text }}>Henüz Hastanız Yok</Text>
      )}

      <CustomButton
        text="Hasta Ekle"
        position="absolute"
        onPress={() => navigation.navigate("AddPatient")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(20),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  patientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: moderateScale(24),
    borderWidth: 1,
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
    fontSize: moderateScale(15),
    fontWeight: "bold",
  },
  subTextContainer: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    width: horizontalScale(300),
  },
  subText: {
    fontSize: moderateScale(12),
    fontWeight: "300",
    color: "gray",
  },
});

export default Homescreen;
