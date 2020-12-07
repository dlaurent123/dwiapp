import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  ImageBackground,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../assets/background.jpg")}
    ></ImageBackground>
  );
};

export default WelcomeScreen;
