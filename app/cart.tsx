import { Platform, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Container } from "../components/container";

export default function CartScreen() {
  return (
    <Container>
      <Text>Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Container>
  );
}
