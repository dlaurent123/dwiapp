import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";

const Card = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          resizeMode={"center"}
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <View style={styles.detail}>
          <Text numberOfLines={4}>{title}</Text>
          <Text style={{ color: "green" }}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
