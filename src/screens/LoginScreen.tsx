import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import CustomTextInput from "../components/TextInput";
import LoginButton from "../components/LoginButton";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View
          style={{
            paddingVertical: verticalScale(10),
            paddingHorizontal: horizontalScale(10),
          }}
        >
          <View
            style={{
              backgroundColor: colors.primary,
              marginTop: verticalScale(45),
              width: horizontalScale(300),
              height: verticalScale(285),
              borderTopLeftRadius: moderateScale(400),
              borderTopRightRadius: moderateScale(50),
              borderBottomLeftRadius: moderateScale(50),
              borderBottomRightRadius: moderateScale(100),
            }}
          ></View>
          <View
            style={{
              backgroundColor: colors.card,
              width: horizontalScale(300),
              height: verticalScale(270),
              borderTopLeftRadius: moderateScale(300),
              borderTopRightRadius: moderateScale(50),
              borderBottomLeftRadius: moderateScale(50),
              borderBottomRightRadius: moderateScale(100),
              position: "absolute",
              top: verticalScale(50),
              right: horizontalScale(10),
            }}
          ></View>
        </View>
        <Text style={[styles.loginHeaderText, { color: colors.primary }]}>
          Login
        </Text>
        <View style={{ alignItems: "center" }}>
          <CustomTextInput placeholder={"Email"} />
          <CustomTextInput placeholder={"Password"} />
          <LoginButton
            text="Login"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  loginHeaderText: {
    fontSize: moderateScale(40),
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(40),
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});

export default LoginScreen;
