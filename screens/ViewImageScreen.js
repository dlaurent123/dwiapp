import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexGrow: 0.1,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ backgroundColor: "#fc5c65", width: 70, height: 70 }}>
            <Button title={"red"} />
          </View>
          <View style={{ backgroundColor: "#4ECDC4", width: 70, height: 70 }}>
            <Button title={"green"} />
          </View>
        </View>
      </View>
      <View style={{ flexGrow: 1.2 }}></View>
      <View style={{ flexGrow: 0.1 }}></View>
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
