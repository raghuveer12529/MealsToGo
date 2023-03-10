import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase/app";

import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDi--MUOjzpDeQwZyF4unoe-Irh1HCcBvg",
  authDomain: "mealstogo-1a64b.firebaseapp.com",
  projectId: "mealstogo-1a64b",
  storageBucket: "mealstogo-1a64b.appspot.com",
  messagingSenderId: "648380441951",
  appId: "1:648380441951:web:ef092c5e9dc4dcb30702ea",
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default function App() {
  const [oswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
