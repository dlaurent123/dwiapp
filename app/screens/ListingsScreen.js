import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsAPI from "../api/listings";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useAPI from "../hooks/useAPI";

const ListingsScreen = ({ navigation }) => {
  const { data: listings, hasError, isLoading, request: loadListings } = useAPI(
    listingsAPI.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <Screen style={styles.screen}>
        {hasError && (
          <>
            <Text>Couldn't retrieve the listings. </Text>
            <AppButton title="retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          renderItem={({ item }) => (
            <Card
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              imageUrl={item.images[0].url}
              subTitle={`$${item.price}`}
              title={item.title}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
          keyExtractor={(listings) => listings.id.toString()}
          data={listings}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
