import { TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import { Container, Title, FlexText, BuyButtonText } from "./styles";
import { currencyFormat } from "../../helpers/currency-format";
import { useCart } from "../../context/cart-context";

export const CartTotalFooter = () => {
  const [total, setTotal] = useState<number>(0);
  const { cartItems, submitCart } = useCart();

  useEffect(() => {
    const cartItemsSum = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    );
    setTotal(cartItemsSum);
  }, [cartItems]);

  return (
    <Container>
      <FlexText>{currencyFormat(total)}</FlexText>

      <Title>
        {cartItems.length
          ? `${cartItems.length} produto${cartItems.length > 1 ? "s" : ""}`
          : "Total"}
      </Title>

      {cartItems.length ? (
        <TouchableOpacity onPress={submitCart} style={{ flex: 1 }}>
          <BuyButtonText>Comprar</BuyButtonText>
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1 }}></View>
      )}
    </Container>
  );
};
