import { Alert, Button } from "react-native";
import { useRouter } from "expo-router";
import type {
  UseFormHandleSubmit,
  FieldErrors,
  Control,
  UseFormReset,
} from "react-hook-form";

import { IProduct } from "../../validation/productSchema";
import { ProductFormContainer } from "./styles";
import { Input } from "../form-input";
import { apiRequester } from "../../helpers/api-requester";

type Props = {
  control: Control<IProduct, Record<string, any>>;
  handleSubmit: UseFormHandleSubmit<IProduct>;
  resetForm: UseFormReset<IProduct>;
  errors: FieldErrors<IProduct>;
};

export const ProductForm = ({
  control,
  errors,
  handleSubmit,
  resetForm,
}: Props) => {
  const router = useRouter();

  const onSubmit = async (data: IProduct) => {
    const response = await apiRequester.post("/product", data).catch((err) => {
      console.log(err.response.data);
      throw err;
    });
    const isSuccess = response.status === 201;

    Alert.alert(
      isSuccess ? "Sucesso!" : "Ops!",
      isSuccess
        ? "O produto foi criado com sucesso!"
        : "Não foi possível criar o produto!",
      [
        {
          text: "Voltar",
          onPress: () => {
            resetForm();
            router.push("/products");
          },
        },
      ]
    );
  };

  return (
    <ProductFormContainer>
      <Input
        control={control}
        name="name"
        placeholder="Nome"
        rules={{ required: true }}
        errors={errors.name}
      />

      <Input
        control={control}
        name="description"
        placeholder="Descrição do produto"
        rules={{ required: true }}
        errors={errors.description}
        multiline={true}
      />

      <Input
        control={control}
        name="category"
        placeholder="Categoria"
        rules={{ required: true }}
        errors={errors.category}
      />

      <Input
        control={control}
        name="price"
        placeholder="Preço"
        keyboardType="numeric"
        isNumberInput={true}
        rules={{ required: true }}
        errors={errors.price}
      />

      <Input
        control={control}
        name="image"
        placeholder="URL da Imagem"
        rules={{ required: false }}
        errors={errors.image}
        style={{ marginTop: 24 }}
      />

      <Button title="Criar" onPress={handleSubmit(onSubmit)} />
    </ProductFormContainer>
  );
};
