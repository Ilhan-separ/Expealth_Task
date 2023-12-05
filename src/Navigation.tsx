import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import { useColorScheme } from "react-native";
import { DarkColors, LightColors } from "./theme/colors";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const deviceTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={deviceTheme === "dark" ? DarkColors : LightColors}
    >
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
