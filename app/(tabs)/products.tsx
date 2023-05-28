import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { ProductCard } from "../../components/product-card";
import { apiRequester } from "../../helpers/api-requester";
import { IProduct } from "../../validation/productSchema";
import { Container } from "../../components/container";

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = async (pageNum: number) => {
    try {
      const res = await apiRequester(`/product?page=${pageNum}`);
      setProducts((prevProducts) => [...prevProducts, ...res.data.items]);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchData(page);
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
