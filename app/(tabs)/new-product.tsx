import { useForm } from "react-hook-form";
import { View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProductForm } from "../../components/product-form";
import { IProduct, productSchema } from "../../validation/productSchema";

export default function NewProductScreen() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>({
    defaultValues: {
      category: "",
      description: "",
      name: "",
      price: "" as any,
      image:
        "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg",
    },
    resolver: zodResolver(productSchema),
  });

  return (
    <View>
      <ProductForm
        resetForm={reset}
        errors={errors}
        control={control}
        handleSubmit={handleSubmit}
      />
    </View>
  );
}
