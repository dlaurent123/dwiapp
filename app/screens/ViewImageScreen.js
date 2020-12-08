import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContent}>
        <View style={styles.buttonContainer}>
          <View style={styles.redButtonContainer}>
            <Button title={""} />
          </View>
          <View style={styles.greenButtonContainer}>
            <Button title={""} />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: "100%", width: "100%" }}
          resizeMode={"stretch"}
          source={require("../assets/chair.jpg")}
        />
      </View>
      <View style={{ flex: 0.25 }}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  buttonContent: {
    flex: 0.25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
  redButtonContainer: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  greenButtonContainer: {
    backgroundColor: "#4ECDC4",
    width: 50,
    height: 50,
    justifyContent: "center",
  },
});

export default ViewImageScreen;
