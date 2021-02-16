import React from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactSeller from "../components/Forms/ContactSeller";
import { useContext } from "react";
import { AuthContext } from "../context";
import colors from "../config/colors";

const ListingDetails = ({ route }) => {
  const listing = route.params;
  const { currentUser } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>{`$${listing.price}`}</Text>
          <View style={styles.userContainer}>
            <ListItem
              subTitle={"5 Listings"}
              title={currentUser.name}
              image={require("../assets/man-image.webp")}
            />
          </View>
        </View>
        {listing.userId !== currentUser.id && (
          <ContactSeller listing={listing} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  details: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },

  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetails;
