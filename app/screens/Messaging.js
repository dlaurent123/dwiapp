import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

const messagesArr = [
  {
    id: 1,
    title: "Hey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare pulvinar purus, non bibendum felis pharetra eget. Integer malesuada facilisis nisl et finibus. Vestibulum pellentesque risus nec molestie tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae nisi nulla. Vestibulum vestibulum, sapien in convallis fringilla, enim nunc tempor felis, vel rhoncus est nulla id nunc. In bibendum ornare iaculis. Phasellus laoreet purus eget viverra efficitur. Duis suscipit metus ac dapibus feugiat. Ut id ligula eget neque euismod consectetur. Duis vitae ornare velit, malesuada commodo nisi. Fusce et libero vitae est ultricies suscipit.",
    image: require("../assets/man-image.webp"),
  },
  {
    id: 2,
    title: "Hello",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare pulvinar purus, non bibendum felis pharetra eget. Integer malesuada facilisis nisl et finibus. Vestibulum pellentesque risus nec molestie tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vitae nisi nulla. Vestibulum vestibulum, sapien in convallis fringilla, enim nunc tempor felis, vel rhoncus est nulla id nunc. In bibendum ornare iaculis. Phasellus laoreet purus eget viverra efficitur. Duis suscipit metus ac dapibus feugiat. Ut id ligula eget neque euismod consectetur. Duis vitae ornare velit, malesuada commodo nisi. Fusce et libero vitae est ultricies suscipit.",
    image: require("../assets/man-image.webp"),
  },
];

const Messaging = ({ navigation }) => {
  const [messages, setMessages] = useState(messagesArr);
  const [refreshing, setRefreshing] = useState(false);
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
            onPress={() => navigation.navigate(routes.MY_MESSAGES)}
            image={item.image}
            subTitle={item.description}
            title={item.title}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        data={messages}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/man-image.webp"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default Messaging;
