import { type Control, Controller } from "react-hook-form";
import { type TextStyle, View } from "react-native";

import { STextInput } from "./styles";
import styled from "styled-components/native";

interface InputProps {
  control: Control<any, Record<string, any>>;
  name: string;
  placeholder: string;
  rules: Record<string, any>;
  errors: Record<string, any> | undefined;
  multiline?: boolean;
  style?: TextStyle;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
}

const ErrorText = styled.Text`
  color: red;
`;

export const Input: React.FC<InputProps> = ({
  control,
  name,
  placeholder,
  rules,
  errors,
  keyboardType,
  multiline = false,
  style = {},
}) => (
  <View>
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <STextInput
          placeholder={placeholder}
          placeholderTextColor={"#AAAAAAAA"}
          onBlur={onBlur}
          onChangeText={onChange}
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
