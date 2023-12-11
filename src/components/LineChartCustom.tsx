import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../theme/metrics";
import { useTheme } from "@react-navigation/native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

type LineChartType = {
  dates: string[];
  values: Float[];
};

const LineChartCustom = ({ dates, values }: LineChartType) => {
  const { colors } = useTheme();
  return (
    <LineChart
      data={{
        labels: dates,
        datasets: [
          {
            data: values,
          },
        ],
      }}
      width={horizontalScale(350)}
      height={verticalScale(250)}
      yLabelsOffset={20}
      segments={6}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        propsForLabels: {
          fontSize: moderateScale(10),
        },
        backgroundColor: "white",
        backgroundGradientFrom: colors.notification,
        backgroundGradientTo: colors.notification,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(88, 86, 214, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        useShadowColorFromDataset: false,
        barPercentage: 0.5,
        strokeWidth: 1.5,
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
  );
};

export default LineChartCustom;

const styles = StyleSheet.create({});
