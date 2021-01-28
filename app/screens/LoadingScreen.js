import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/splash.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default LoadingScreen;
