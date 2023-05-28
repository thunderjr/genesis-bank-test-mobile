import styled from "styled-components/native";

export const SContainer = styled.View`
  padding: 20px;
  border-bottom-color: #33333333;
  border-bottom-width: 1px;
  flex-direction: row;
`;

export const LeftView = styled.View`
  justify-content: center;
`;

export const RightView = styled.View`
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

export const SubTotalView = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const QuantityBox = styled.View`
  height: 35px;
  flex-direction: row;
  gap: 5px;
`;

export const Title = styled.Text`
  font-size: 24px;
`;
