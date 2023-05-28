import { PropsWithChildren } from "react";
import { Text, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const StyledTouchable = styled.TouchableOpacity`
  background-color: rgb(65, 46, 191);
  border-radius: 10px;
  padding-horizontal: 10px;
  padding-vertical: 8px;
`;

type Props = TouchableOpacityProps &
  PropsWithChildren<{
    text?: string;
  }>;

export const SButton = ({ text, children, ...props }: Props) => (
  <StyledTouchable {...props}>
    {text ? <Text style={{ color: "white" }}>{text}</Text> : children}
  </StyledTouchable>
);
