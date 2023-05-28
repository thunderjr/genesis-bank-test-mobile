import { Controller, type Control } from "react-hook-form";
import { View, type TextStyle } from "react-native";
import styled from "styled-components/native";

import { STextInput } from "./styles";

type Props = {
  control: Control<any, Record<string, any>>;
  name: string;
  placeholder: string;
  rules: Record<string, any>;
  errors: Record<string, any> | undefined;
  multiline?: boolean;
  style?: TextStyle;
  isNumberInput?: boolean;
  keyboardType?: "default" | "numeric";
};

const ErrorText = styled.Text`
  color: red;
`;

export const Input = ({
  control,
  name,
  placeholder,
  rules,
  errors,
  keyboardType,
  isNumberInput = false,
  multiline = false,
  style = {},
}: Props) => (
  <View>
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <STextInput
          placeholder={placeholder}
          placeholderTextColor={"#AAAAAAAA"}
          onBlur={onBlur}
          onChangeText={(value) =>
            onChange(isNumberInput ? Number(value) : value)
          }
          value={String(value)}
          keyboardType={keyboardType}
          multiline={multiline}
          style={multiline ? Object.assign(style, { height: 80 }) : style}
        />
      )}
      name={name}
    />
    {errors && <ErrorText>Este campo é obrigatório!</ErrorText>}
  </View>
);
