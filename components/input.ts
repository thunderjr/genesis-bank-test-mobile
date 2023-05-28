import styled from "styled-components/native";

export const SInput = styled.TextInput<{ full?: boolean }>`
  padding: 12px;
  border: 1px solid #00000044;
  background-color: white;
  border-radius: 6px;
  ${({ full }) => full && "flex: 1;"}
`;
