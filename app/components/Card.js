import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Card;
