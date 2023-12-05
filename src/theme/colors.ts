import { Theme } from "@react-navigation/native";

const DarkColors: Theme = {
  dark: true,
  colors: {
    primary: "#5856D6",
    card: "#5856D6",
    text: "#FFFFFF",
    border: "#5856D6",
    background: "#28282F",
    notification: "#FFFFFF",
  },
};

const LightColors: Theme = {
  dark: false,
  colors: {
    primary: "#5856D6",
    card: "#D5D4D7",
    text: "#000000",
    border: "#5856D6",
    background: "white",
    notification: "black",
  },
};

export { DarkColors, LightColors };
