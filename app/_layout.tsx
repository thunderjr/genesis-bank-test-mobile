import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";
export { ErrorBoundary } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="cart" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
