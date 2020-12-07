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
      <View
        style={{
          flex: 0.25,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              backgroundColor: "#fc5c65",
              width: 50,
              height: 50,
              justifyContent: "center",
            }}
          >
            <Button title={""} />
          </View>
          <View
            style={{
              backgroundColor: "#4ECDC4",
              width: 50,
              height: 50,
              justifyContent: "center",
            }}
          >
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
});

export default ViewImageScreen;
