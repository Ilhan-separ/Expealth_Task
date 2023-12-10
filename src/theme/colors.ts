import { Theme } from "@react-navigation/native";

const DarkColors: Theme = {
  dark: true,
  colors: {
    primary: "#3164F4",
    card: "#E54B4B",
    text: "#F7EBE8",
    border: "#FFA987",
    background: "#28282F",
    notification: "#E3D8F0",
  },
};

const LightColors: Theme = {
  dark: false,
  colors: {
    primary: "#3164F4",
    card: "#E54B4B",
    text: "#000000",
    border: "#FFA987",
    background: "white",
    notification: "#E3D8F0",
  },
};

export { DarkColors, LightColors };
