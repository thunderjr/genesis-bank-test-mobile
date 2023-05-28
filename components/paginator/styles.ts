import styled from "styled-components/native";

export const NumberCard = styled.TouchableOpacity<{ selected: boolean }>`
  padding-horizontal: 13px;
  padding-vertical: 5px;
  background-color: rgb(65, 46, 191);
  ${({ selected }) => selected && "background-color: rgba(65, 46, 191, 0.6);"}
  border-radius: 10px;
  margin: 3px;
`;

export const NumberCardText = styled.Text`
  font-size: 18px;
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
