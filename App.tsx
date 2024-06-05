import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import { NewGroup } from "@screens/NewGroup";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from "@components/Loading";

import { Routes } from "./src/routes/index"

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />} 
    </ThemeProvider>
  );
}