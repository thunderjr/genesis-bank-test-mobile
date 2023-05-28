import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const SProductCard = styled.View`
  margin: 5px;
  border-radius: 30px;
`;

export const ProductContainer = styled.View`
  flex-direction: column;
  padding: 10px;
  width: ${Dimensions.get("window").width / 2 - 20}px;
  background-color: #ccc;
`;

export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const ProductPrice = styled.Text`
  color: green;
  font-weight: bold;
`;
