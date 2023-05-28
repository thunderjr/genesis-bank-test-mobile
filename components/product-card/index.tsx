import { Image, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import { currencyFormat } from "../../helpers/currency-format";
import { IProduct } from "../../validation/productSchema";
import { CartItem, useCart } from "../../context/cart-context";
import { SButton } from "../button";
import { SInput } from "../input";
import {
  ProductDescription,
  ProductContainer,
  ProductPrice,
  SProductCard,
  ProductName,
  QuantityBox,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  product: IProduct;
};

export const ProductCard = ({ product }: Props) => {
  const [productFromCart, setProductFromCart] = useState<CartItem>();
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    setProductFromCart(
      cartItems.find(
        (cartItem: any) => cartItem.product._id === (product as any)._id
      )
    );
  }, [cartItems, product]);

  return (
    <SProductCard>
      <Image
        source={{ uri: product.image! }}
        style={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <ProductContainer>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{currencyFormat(product.price)}</ProductPrice>

        {productFromCart ? (
          <QuantityBox>
            <SButton onPress={() => addToCart(product, -1)} text=" - " />
            <SInput value={String(productFromCart?.quantity || 0)} />
            <SButton onPress={() => addToCart(product, 1)} text=" + " />
          </QuantityBox>
        ) : (
          <SButton
            style={{ marginLeft: "auto" }}
            onPress={() => addToCart(product, 1)}
          >
            <AntDesign name="shoppingcart" color="white" size={20} />
          </SButton>
        )}
      </ProductContainer>
    </SProductCard>
  );
};
