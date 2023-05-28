import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

import { Container } from "./styles";
import { SButton } from "../button";
import { SInput } from "../input";

type Props = {
  handleSearch: (name: string) => void;
};

export const ProductSearchBox = ({ handleSearch }: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <Container>
      <SInput
        placeholder="Pesquisar pelo nome..."
        placeholderTextColor={"#AAAAAAAA"}
        onChangeText={(value) => setName(value)}
        full={true}
      />
      <SButton onPress={() => handleSearch(name)}>
        <FontAwesome name="search" size={24} color="white" />
      </SButton>
    </Container>
  );
};
