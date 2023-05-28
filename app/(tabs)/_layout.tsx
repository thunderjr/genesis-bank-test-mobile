import type { Icon } from "@expo/vector-icons/build/createIconSet";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

const TabBarIcon = ({
  Component = FontAwesome,
  ...props
}: {
  name: React.ComponentProps<typeof FontAwesome & typeof FontAwesome5>["name"];
  color: string;
  Component?: Icon<any, any>;
}) => <Component size={28} style={{ marginBottom: -3 }} {...props} />;

const CartIcon = () => (
  <Link href="/cart" asChild>
    <Pressable>
      {({ pressed }) => (
        <AntDesign
          name="shoppingcart"
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
            <TabBarIcon
              Component={FontAwesome5}
              name="box-open"
              color={color}
            />
          ),
          headerRight: () => <CartIcon />,
        }}
      />
      <Tabs.Screen
        name="new-product"
        options={{
          title: "Novo produto",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="plus-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
