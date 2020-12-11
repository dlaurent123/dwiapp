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
import ListingDetails from "./app/screens/ListingDetails";
import ListingsScreen from "./app/screens/ListingsScreen";
import Messaging from "./app/screens/Messaging";
import MyaccountScreen from "./app/screens/MyaccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import AppInput from "./app/components/AppInput";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={"auto"} />
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetails /> */}
      {/* <Messaging /> */}
      {/* <MyaccountScreen /> */}
      {/* <ListingsScreen /> */}
      <Screen>
        <AppInput icon={"email"} placeholder={"Username"} />
      </Screen>
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
