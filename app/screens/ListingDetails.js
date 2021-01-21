import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ListItem from "../components/ListItem";
const ListingDetails = ({ route }) => {
  const listing = route.params;

  console.log(listing);
  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.details}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
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
