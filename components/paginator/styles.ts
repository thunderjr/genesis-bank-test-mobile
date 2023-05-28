import styled from "styled-components/native";

export const NumberCard = styled.TouchableOpacity<{ selected: boolean }>`
  padding-horizontal: 15px;
  padding-vertical: 5px;
  background-color: rgb(75, 0, 130);
  ${({ selected }) => selected && "background-color: rgba(75, 0, 130, 0.4);"}
  border-radius: 10px;
  margin: 5px;
`;

export const NumberCardText = styled.Text`
  font-size: 24px;
  color: white;
`;

export const CardsWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const SText = styled.Text`
  font-size: 20px;
  text-align: center;
`;
