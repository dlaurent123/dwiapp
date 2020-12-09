import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const messagesArr = [
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
  const [messages, setMessages] = useState(messagesArr);

  const handleDelete = (message) => {
    setMessages(messages.filter((mess) => mess.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            rightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log()}
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
