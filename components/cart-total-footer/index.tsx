import { useEffect, useState } from "react";
import { View } from "react-native";

import { currencyFormat } from "../../helpers/currency-format";
import { useCart } from "../../context/cart-context";
import { Container, Title, Text } from "./styles";

export const CartTotalFooter = () => {
  const [total, setTotal] = useState<number>(0);
  const { cartItems } = useCart();

  useEffect(() => {
    const cartItemsSum = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    );
    setTotal(cartItemsSum);
  }, [cartItems]);

  return (
    <Container>
      <Text>
        {cartItems.length
          ? `${cartItems.length} produto${cartItems.length > 1 ? "s" : ""}`
          : "Nenhum produto"}
      </Text>
      <Title>Total</Title>
      <Text style={{ textAlign: "right" }}>{currencyFormat(total)}</Text>
    </Container>
  );
};
