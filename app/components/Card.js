import React from "react";
import { View, StyleSheet, Image, Text, StatusBar } from "react-native";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image resizeMode={"center"} style={styles.image} source={image} />
      <View style={styles.detail}>
        <Text numberOfLines={4}>{title}</Text>
        <Text style={{ color: "green" }}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detail: {
    padding: 20,
  },
});

export default Card;
