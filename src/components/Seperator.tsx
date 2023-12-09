import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

const Seperator = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{ height: 0.5, width: "100%", backgroundColor: colors.primary }}
    ></View>
  );
};

export default Seperator;
