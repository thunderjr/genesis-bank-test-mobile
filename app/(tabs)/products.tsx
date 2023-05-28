import { Alert, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";

import { ProductCard } from "../../components/product-card";
import { apiRequester } from "../../helpers/api-requester";
import { IProduct } from "../../validation/productSchema";
import { Container } from "../../components/container";

export default function ProductsPage() {
  const navigation = useNavigation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = async (pageNum: number) => {
    try {
      const res = await apiRequester(`/product?page=${pageNum}`);
      setProducts(res.data.items);
    } catch (error) {
      Alert.alert("Ops!", "Não foi possível buscar os produtos!", [
        {
          text: "Ok",
          onPress: () => {},
        },
      ]);
    }
  };

  useEffect(() => {
    fetchData(page);

    const unsubscribe = navigation.addListener("focus", () => {
      fetchData(page);
    });

    return unsubscribe;
  }, []);

  return (
    <Container>
      <Text>{page}</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </Container>
  );
}
