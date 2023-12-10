import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import { useRoute, useTheme } from "@react-navigation/native";
import LineChartCustom from "../components/LineChartCustom";
import { LineChart } from "react-native-chart-kit";

const DetailScreen = () => {
  const { colors } = useTheme();

  const route = useRoute();
  const data = (route.params as Record<string, any>)?.data;

  if (!data) {
    // Handle the case where data is not available
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No data available</Text>
      </View>
    );
  }

  const heightData = data?.heightData || [];
  const filteredHeightData = heightData.filter(
    (item: { value: string }) => item.value !== ""
  );
  const onlyHeightDates = filteredHeightData.map(
    (item: { date: any }) => item.date
  );
  const onlyHeight = filteredHeightData.map((item: { value: string }) =>
    parseFloat(item.value)
  );

  const weightData = data?.weightData || [];
  const filteredWeightData = weightData.filter(
    (item: { value: string }) => item.value !== ""
  );
  const onlyWeightDates = filteredWeightData.map(
    (item: { date: any }) => item.date
  );
  const onlyWeight = filteredWeightData.map((item: { value: string }) =>
    parseFloat(item.value)
  );

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
      <View style={styles.diseasesChipContainer}>
        {data.diseases.map(
          (disease: any, index: React.Key | null | undefined) => (
            <View
              key={index}
              style={[
                styles.diseasesChip,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.primary,
                },
              ]}
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
        {onlyHeight && onlyHeight.length > 0 ? (
          <LineChart
            data={{
              labels: onlyHeightDates,
              datasets: [
                {
                  data: onlyHeight,
                },
              ],
            }}
            width={horizontalScale(350)}
            height={verticalScale(250)}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: colors.notification,
              backgroundGradientTo: colors.notification,
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(88, 86, 214, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: colors.primary,
              },
            }}
            bezier
            style={{
              marginVertical: 20,
              borderRadius: moderateScale(22),
            }}
          />
        ) : (
          <Text style={[styles.ifNotText, { color: colors.text }]}>
            Boy Bilgileri Girilmemiştir
          </Text>
        )}

        <Text
          style={[
            styles.subText,
            { color: colors.text, marginTop: verticalScale(7) },
          ]}
        >
          Kilo Grafiği
        </Text>

        {onlyWeight && onlyWeight.length > 0 ? (
          <LineChart
            data={{
              labels: onlyWeightDates,
              datasets: [
                {
                  data: onlyWeight,
                },
              ],
            }}
            width={horizontalScale(350)}
            height={verticalScale(250)}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: colors.notification,
              backgroundGradientTo: colors.notification,
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(88, 86, 214, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: colors.primary,
              },
            }}
            bezier
            style={{
              marginVertical: 20,
              borderRadius: moderateScale(22),
            }}
          />
        ) : (
          <Text style={[styles.ifNotText, { color: colors.text }]}>
            Kilo Bilgileri Girilmemiştir.
          </Text>
        )}
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
  diseasesChipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(10),
  },
  diseasesChip: {
    borderRadius: moderateScale(18),
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(5),
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
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
  ifNotText: {
    fontWeight: "300",
    fontSize: moderateScale(12),
    marginVertical: verticalScale(10),
  },
});
