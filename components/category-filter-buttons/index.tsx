import type { Dispatch, SetStateAction } from "react";

import { CategoryCard, CategoriesList, Title } from "./styles";
import { Text, View } from "react-native";

type Props = {
  handleSearch: Dispatch<SetStateAction<string | undefined>>;
  categories: string[];
};

export const CategoryFilterButtons = ({
  categories = [],
  handleSearch,
}: Props) => {
  return (
    <View>
      <Title>Filtrar por categoria:</Title>
      <CategoriesList
        horizontal={true}
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard onPress={() => handleSearch(item as string)}>
            <Text style={{ color: "white" }}>{item as string}</Text>
          </CategoryCard>
        )}
        keyExtractor={(item, i) => `category-${i}`}
      />
    </View>
  );
};
