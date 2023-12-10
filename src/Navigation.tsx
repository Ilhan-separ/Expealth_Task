import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import { View, useColorScheme } from "react-native";
import { DarkColors, LightColors } from "./theme/colors";
import Homescreen from "./screens/Homescreen";
import AddPatientScreen from "./screens/AddPatientScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const deviceTheme = useColorScheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: deviceTheme === "dark" ? "black" : "white",
      }}
    >
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

              headerBackVisible: false,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor:
                  deviceTheme === "dark"
                    ? DarkColors.colors.background
                    : LightColors.colors.background,
              },
            }}
          />
          <Stack.Screen
            name="AddPatient"
            component={AddPatientScreen}
            options={({ route }) => ({
              title: "Hasta Ekle",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor:
                  deviceTheme === "dark"
                    ? DarkColors.colors.background
                    : LightColors.colors.background,
              },
              animation: "fade_from_bottom",
              presentation: "modal",
              data: route.params?.data,
            })}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{
              title: "",
              animation: "fade",
              headerBackVisible: true,
              headerTransparent: true,
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
