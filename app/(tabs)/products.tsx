import { Alert, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";

import { ProductCard } from "../../components/product-card";
import { apiRequester } from "../../helpers/api-requester";
import { IProduct } from "../../validation/productSchema";
import { Container } from "../../components/container";
import { Paginator } from "../../components/paginator";
import { PaginatedResult } from "../../server/types/pagination";
import { ProductSearchBox } from "../../components/search-box";
import { CategoryFilterButtons } from "../../components/category-filter-buttons";
import { SButton } from "../../components/search-box/styles";

export type FilterProductsReturnType = PaginatedResult<IProduct> & {
  categories: string[];
};

const PRODUCTS_LIMIT = 4;

export default function ProductsPage() {
  const navigation = useNavigation();

  const [page, setPage] = useState<number>(1);
  const [productsData, setProductsData] = useState<FilterProductsReturnType>({
    total: 0,
    items: [],
    categories: [],
  });

  const [nameQuery, setNameQuery] = useState<string>();
  const [categoryQuery, setCategoryQuery] = useState<string>();

  const handleNameSearch = (name: string) => setNameQuery(name);

  const fetchProducts = async () => {
    try {
      const res = await apiRequester<FilterProductsReturnType>(
        `/product?page=${page}&limit=${PRODUCTS_LIMIT}&name=${
          nameQuery || ""
        }&category=${categoryQuery || ""}`
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

  const resetFilters = () => {
    setPage(1);
    setNameQuery("");
    setCategoryQuery("");
  };

  useEffect(() => {
    fetchProducts();
    const unsubscribe = navigation.addListener("focus", () => fetchProducts());
    return unsubscribe;
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [page, nameQuery, categoryQuery]);

  useEffect(() => {
    setPage(1);
  }, [nameQuery, categoryQuery]);

  return (
    <Container>
      <ProductSearchBox handleSearch={handleNameSearch} />

      {(nameQuery || categoryQuery) && (
        <SButton style={{ marginBottom: 20 }} onPress={resetFilters}>
          <Text style={{ color: "white" }}>Limpar filtros</Text>
        </SButton>
      )}

      <CategoryFilterButtons
        categories={productsData.categories}
        handleSearch={setCategoryQuery}
      />

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
