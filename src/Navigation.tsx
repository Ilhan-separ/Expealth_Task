import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import { View, useColorScheme } from "react-native";
import { DarkColors, LightColors } from "./theme/colors";
import Homescreen from "./screens/Homescreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const deviceTheme = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <NavigationContainer
        theme={deviceTheme === "dark" ? DarkColors : LightColors}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Homescreen}
            options={{
              animation: "fade",

              headerShown: true,
              headerBackVisible: false,
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
