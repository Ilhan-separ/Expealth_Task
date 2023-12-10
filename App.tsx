import { Provider } from "react-redux";
import Navigation from "./src/Navigation";
import store from "./src/redux/store";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <Navigation />
    </Provider>
  );
}
