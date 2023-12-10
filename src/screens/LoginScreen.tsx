import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps={"always"}
    >
      <View style={styles.mainContainer}>
        <View style={{ marginVertical: verticalScale(50) }}>
          <View
            style={{
              backgroundColor: colors.primary,
              width: horizontalScale(280),
              height: verticalScale(270),
              borderTopLeftRadius: moderateScale(300),
              borderTopRightRadius: moderateScale(150),
              borderBottomLeftRadius: moderateScale(1000),
              borderBottomRightRadius: moderateScale(180),
              position: "absolute",
              top: verticalScale(30),
              right: horizontalScale(10),
            }}
          ></View>
          <View
            style={{
              backgroundColor: colors.border,
              position: "absolute",
              left: horizontalScale(12),
              width: horizontalScale(300),
              height: verticalScale(285),
              borderTopRightRadius: moderateScale(80),
              borderTopLeftRadius: moderateScale(80),
              borderBottomLeftRadius: moderateScale(50),
              borderBottomRightRadius: moderateScale(500),
            }}
          ></View>
        </View>
        <Text style={[styles.loginHeaderText, { color: colors.text }]}>
          Login
        </Text>
        <View style={styles.fillerContainer}></View>
        <View style={{ alignItems: "center" }}>
          <CustomTextInput placeholder={"Email"} />
          <CustomTextInput placeholder={"Password"} />
        </View>
        <View style={{ marginTop: verticalScale(30) }}>
          <CustomButton
            text="Login"
            position="relative"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: verticalScale(20),
    justifyContent: "space-around",
    alignContent: "center",
  },

  loginHeaderText: {
    fontSize: moderateScale(48),
    marginHorizontal: horizontalScale(40),
    marginVertical: verticalScale(40),
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  fillerContainer: {
    height: verticalScale(250),
    width: "100%",
    display: "flex",
  },
});

export default LoginScreen;
