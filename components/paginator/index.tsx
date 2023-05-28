import type { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";

import { CardsWrapper, NumberCard, NumberCardText, SText } from "./styles";

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
  itemsPerPage: number;
  currentPage: number;
  total: number;
};

export const Paginator = ({
  currentPage,
  itemsPerPage,
  setPage,
  total,
}: Props) => {
  if (total)
    return (
      <View>
        <SText>Página</SText>
        <CardsWrapper>
          {Array(Math.ceil((total || itemsPerPage) / itemsPerPage))
            .fill(null)
            .map((_, i) => (
              <NumberCard
                selected={currentPage === i + 1}
                onPress={() => setPage(i + 1)}
                key={i}
              >
                <NumberCardText>{i + 1}</NumberCardText>
              </NumberCard>
            ))}
        </CardsWrapper>
      </View>
    );

  return <></>;
};
