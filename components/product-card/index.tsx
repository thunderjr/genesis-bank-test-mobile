import { Image } from "react-native";

import { currencyFormat } from "../../helpers/currency-format";
import { IProduct } from "../../validation/productSchema";
import {
  ProductDescription,
  ProductContainer,
  ProductPrice,
  SProductCard,
  ProductName,
} from "./styles";

type Props = {
  product: IProduct;
};

export const ProductCard = ({ product }: Props) => {
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
      </ProductContainer>
    </SProductCard>
  );
};
