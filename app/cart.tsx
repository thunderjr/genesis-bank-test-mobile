import { FlatList, Platform, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useCart } from "../context/cart-context";
import { CartItemComponent } from "../components/cart-item";

export default function CartScreen() {
  const { cartItems, addToCart } = useCart();

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => `cart-${index}`}
        renderItem={({ item }) => (
          <CartItemComponent addToCart={addToCart} item={item} />
        )}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
