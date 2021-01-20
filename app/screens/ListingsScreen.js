import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsAPI from "../api/listings";
import AppButton from "../components/AppButton";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState();
  const [hasError, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadListings = async () => {
    const res = await listingsAPI.getListings();
    setIsLoading(false);

    if (!res.ok) return setError(true);

    setError(false);
    setListings(res.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {hasError && (
        <>
          <Text>Couldn't retrieve the listings. </Text>
          <AppButton title="retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator animating={isLoading} />
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
