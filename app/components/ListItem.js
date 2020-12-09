import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: "#6e6969",
  },
});

export default ListItem;
