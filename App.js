import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}
