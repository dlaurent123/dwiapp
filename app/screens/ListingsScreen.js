import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Couch for sale",
    price: 1000,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Jacket for sale",
    price: 100,
    image: require("../assets/jackett.webp"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        renderItem={({ item }) => (
          <Card
            subTitle={`$${item.price}`}
            image={item.image}
            title={item.title}
          />
        )}
        keyExtractor={(listings) => listings.id.toString()}
        data={listings}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
