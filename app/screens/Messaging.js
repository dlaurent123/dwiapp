import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/man-image.webp"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/man-image.webp"),
  },
];

const Messaging = () => {
  return (
    <Screen>
      <FlatList
        ItemSeparatorComponent={() => <ListItemSeparator />}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            subTitle={item.description}
            title={item.title}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        data={messages}
      />
    </Screen>
  );
};

export default Messaging;
