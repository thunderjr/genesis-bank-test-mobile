import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;

const CartIcon = () => (
  <Link href="/cart" asChild>
    <Pressable>
      {({ pressed }) => (
        <FontAwesome
          name="cart-plus"
          size={30}
          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
        />
      )}
    </Pressable>
  </Link>
);

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => <CartIcon />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Produtos",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="box-open" color={color} />
          ),
          headerRight: () => <CartIcon />,
        }}
      />
      <Tabs.Screen
        name="new-product"
        options={{
          title: "Novo produto",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
