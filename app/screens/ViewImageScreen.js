import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContent}>
        <View style={styles.buttonContainer}>
          <View style={styles.redButtonContainer}>
            <MaterialCommunityIcons size={35} color="white" name="close" />
          </View>
          <View style={styles.greenButtonContainer}>
            <MaterialCommunityIcons
              color="white"
              size={35}
              name="trash-can-outline"
            />
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
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  greenButtonContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
  },
});

export default ViewImageScreen;
