import { Provider } from "react-redux";
import Navigation from "./src/Navigation";
import store from "./src/redux/store";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar />
        <Navigation />
      </GestureHandlerRootView>
    </Provider>
  );
}
