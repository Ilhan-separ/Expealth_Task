import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import { useRoute, useTheme } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import LineChartCustom from "../components/LineChartCustom";

const DetailScreen = () => {
  const { colors } = useTheme();

  const route = useRoute();
  const data = (route.params as Record<string, any>)?.data;

  const heightData = data?.heightData;
  const onlyHeightDates = heightData.map((item) => item.date);
  const onlyHeight = heightData.map((item) => parseFloat(item.value));
  const weightData = data?.weightData;
  const onlyWeightDates = weightData.map((item) => item.date);
  const onlyWeight = weightData.map((item) => parseFloat(item.value));

  return (
    <ScrollView>
      <View style={styles.headerCurvedBackground}>
        <View
          style={[
            styles.headerCurvedBackgroundChild,
            { backgroundColor: colors.primary },
          ]}
        >
          <Text style={[styles.headerDataText]}>{data.name}</Text>
          <Text style={[styles.subText]}>{data.birthDay}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginVertical: verticalScale(10),
        }}
      >
        {data.diseases.map(
          (disease: any, index: React.Key | null | undefined) => (
            <View
              key={index}
              style={{
                borderRadius: moderateScale(18),
                marginHorizontal: horizontalScale(5),
                marginVertical: verticalScale(5),
                backgroundColor: colors.background,
                borderColor: colors.primary,
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  fontSize: moderateScale(14),
                  padding: 10,
                  fontWeight: "400",
                }}
              >
                {disease}
              </Text>
            </View>
          )
        )}
      </View>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
          borderRadius: moderateScale(18),
        }}
      >
        <Text
          style={[
            styles.subText,
            { color: colors.text, marginTop: verticalScale(7) },
          ]}
        >
          Boy Grafiği
        </Text>
        <LineChartCustom dates={onlyHeightDates} values={onlyHeight} />
        <Text
          style={[
            styles.subText,
            { color: colors.text, marginTop: verticalScale(7) },
          ]}
        >
          Kilo Grafiği
        </Text>
        <LineChartCustom dates={onlyWeightDates} values={onlyWeight} />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  headerCurvedBackground: {
    height: verticalScale(220),
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: moderateScale(200),
    borderBottomEndRadius: moderateScale(200),
    overflow: "hidden",
  },
  headerCurvedBackgroundChild: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],
    paddingLeft: horizontalScale(50),
    paddingTop: verticalScale(30),
    backgroundColor: "yellow",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerDataText: {
    fontWeight: "600",
    color: "white",
    fontSize: moderateScale(24),
  },
  subText: {
    fontWeight: "400",
    color: "white",
    fontSize: moderateScale(16),
  },
});
