import { Alert, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";

import { ProductCard } from "../../components/product-card";
import { apiRequester } from "../../helpers/api-requester";
import { IProduct } from "../../validation/productSchema";
import { Container } from "../../components/container";
import { Paginator } from "../../components/paginator";
import { PaginatedResult } from "../../server/types/pagination";

const PRODUCTS_LIMIT = 4;

export default function ProductsPage() {
  const navigation = useNavigation();

  const [page, setPage] = useState<number>(1);
  const [productsData, setProductsData] = useState<PaginatedResult<IProduct>>({
    total: 0,
    items: [],
  });

  const fetchData = async () => {
    try {
      const res = await apiRequester<PaginatedResult<IProduct>>(
        `/product?page=${page}&limit=${PRODUCTS_LIMIT}`
      );
      setProductsData(res.data);
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
    fetchData();
    const unsubscribe = navigation.addListener("focus", fetchData);
    return unsubscribe;
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Container>
      <Paginator
        currentPage={page}
        itemsPerPage={PRODUCTS_LIMIT}
        setPage={setPage}
        total={productsData.total}
      />

      <FlatList
        data={productsData.items}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </Container>
  );
}
