import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const SProductCard = styled.View`
  width: ${Dimensions.get("window").width / 2 - 20}px;
  background-color: rgba(100, 100, 100, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 5px;
`;

export const ProductContainer = styled.View`
  padding: 10px;
`;

export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  color: green;
  font-weight: bold;
`;
