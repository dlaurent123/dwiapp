import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsAPI from "../api/listings";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState();

  const loadListings = async () => {
    const res = await listingsAPI.getListings();
    // debugger;

    setListings(res.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            imageUrl={item.images[0].url}
            subTitle={`$${item.price}`}
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
