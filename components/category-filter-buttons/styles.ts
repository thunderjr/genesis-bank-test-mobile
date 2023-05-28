import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;

export const CategoriesList = styled.FlatList`
  align-self: center;
  margin-bottom: 10px;
  flex-direction: row;
  max-height: 50px;
  padding: 10px;
`;

export const CategoryCard = styled.TouchableOpacity`
  background-color: red;
  padding: 6px;
  padding-left: 20px;
  padding-right: 20px;
  margin-horizontal: 4px;
  background-color: rgb(65, 46, 191);
  border-radius: 10px;
  font-size: 18px;
`;
