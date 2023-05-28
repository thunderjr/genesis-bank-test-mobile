import { Text, View } from "react-native";

import { CartItem, CartContextType } from "../../context/cart-context";
import { currencyFormat } from "../../helpers/currency-format";
import { SButton } from "../button";
import { SInput } from "../input";
import {
  SubTotalView,
  QuantityBox,
  SContainer,
  RightView,
  LeftView,
  Title,
} from "./styles";

type Props = {
  item: CartItem;
  addToCart: CartContextType["addToCart"];
};

export const CartItemComponent = ({
  item: { product, quantity },
  addToCart,
}: Props) => {
  return (
    <SContainer>
      <LeftView>
        <Title>{product.name}</Title>
        <Text>{product.category}</Text>
        <Text>{currencyFormat(product.price)}</Text>
      </LeftView>
      <RightView>
        <QuantityBox>
          <SButton onPress={() => addToCart(product, -1)} text=" - " />
          <SInput value={String(quantity)} />
          <SButton onPress={() => addToCart(product, 1)} text=" + " />
        </QuantityBox>
        <SubTotalView>
          <Text>Sub-Total:</Text>
          <Text>{currencyFormat(product.price * quantity)}</Text>
        </SubTotalView>
      </RightView>
    </SContainer>
  );
};
