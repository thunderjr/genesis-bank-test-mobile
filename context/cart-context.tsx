import { createContext, useContext, useState } from "react";
import { useRouter } from "expo-router";

import { apiRequester } from "../helpers/api-requester";
import { IProduct } from "../validation/productSchema";
import { Alert } from "react-native";

export type CartItem = {
  product: IProduct;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: IProduct, quantity: number) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
  submitCart: () => Promise<void>;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  submitCart: async () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: IProduct, quantity: number) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product._id === product._id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;

      if (updatedCartItems[existingItemIndex].quantity <= 0) {
        updatedCartItems.splice(existingItemIndex, 1);
      }

      setCartItems(updatedCartItems);
    } else if (quantity > 0) {
      setCartItems((prevItems) => [...prevItems, { product, quantity }]);
    }
  };

  const removeFromCart = (product: IProduct) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product._id !== product._id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const submitCart = async () => {
    try {
      const cartData = cartItems.map((item) => ({
        productId: item.product._id,
        amount: item.quantity,
      }));

      await apiRequester.post("/purchase", cartData);

      clearCart();
      Alert.alert("Sucesso!", "Compra realizada com sucesso", [
        {
          text: "Voltar",
          onPress: router.back,
        },
      ]);
    } catch (error) {
      Alert.alert("Ops!", "Não foi possível finalizar a compra!", [
        {
          text: "Voltar",
          onPress: router.back,
        },
      ]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, submitCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
