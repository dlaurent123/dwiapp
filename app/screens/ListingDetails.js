import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ListItem from "../components/ListItem";
const ListingDetails = ({ props }) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.details}>
        <Text style={styles.title}>{"Chair for sale"}</Text>
        <Text style={styles.price}>{"$100"}</Text>
        <View style={styles.userContainer}>
          <ListItem
            subTitle={"5 Listings"}
            title={"Nasir Dara"}
            image={require("../assets/man-image.webp")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },

  details: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  price: {
    color: "green",
  },

  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetails;
