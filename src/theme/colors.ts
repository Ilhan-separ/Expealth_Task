import { Theme } from "@react-navigation/native";

const DarkColors: Theme = {
  dark: true,
  colors: {
    primary: "#3164F4",
    card: "#EAEAEA",
    text: "#FFFFFF",
    border: "#3C3C45",
    background: "#28282F",
    notification: "#FFFFFF",
  },
};

const LightColors: Theme = {
  dark: false,
  colors: {
    primary: "#3164F4",
    card: "#EAEAEA",
    text: "#000000",
    border: "#EAEAEA",
    background: "white",
    notification: "black",
  },
};

export { DarkColors, LightColors };
