import { FlatList, Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { CartTotalFooter } from "../components/cart-total-footer";
import { CartItemComponent } from "../components/cart-item";
import { useCart } from "../context/cart-context";
import { AntDesign } from "@expo/vector-icons";

export default function CartScreen() {
  const { cartItems, addToCart } = useCart();

  return (
    <View style={{ height: "100%" }}>
      {cartItems.length ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => `cart-${index}`}
          renderItem={({ item }) => (
            <CartItemComponent addToCart={addToCart} item={item} />
          )}
        />
      ) : (
        <View
          style={{
            height: "80%",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.15,
          }}
        >
          <AntDesign name="shoppingcart" size={100} />
        </View>
      )}

      <CartTotalFooter />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
