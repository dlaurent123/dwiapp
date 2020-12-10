import React from "react";
import { StyleSheet, View, SafeAreaView, Image, Text } from "react-native";
import colors from "../config/colors";
const MyaccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.image}
          source={require("../assets/man-image.webp")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Nasir Dara</Text>
          <Text style={styles.email}>NasirD@gmail.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  userInfo: {
    backgroundColor: "white",
    width: "100%",
    height: 105,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    marginVertical: 20,
  },

  textContainer: {
    padding: 15,
  },

  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },

  name: {
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 5,
  },

  email: {
    fontSize: 15,
    color: "grey",
    fontWeight: "400",
  },
});

export default MyaccountScreen;
