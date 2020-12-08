import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={"inverted"} />
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <View
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          backgroundColor: "#f8f4f4",
          padding: 20,
          paddingTop: 100,
        }}
      >
        <Card
          subTitle={"$100"}
          title={"Chair for sale"}
          image={require("./app/assets/chair.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
