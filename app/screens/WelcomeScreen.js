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
  SafeAreaView,
} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../assets/background.jpg")}
    >
      <View style={style.container}>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              style={{ height: 90, width: 90 }}
              source={require("../assets/logo-red.png")}
            />
            <Text>See what you don't need</Text>
          </View>
          <View style={{ flex: 1 }}>{/* <Text>here</Text> */}</View>
        </SafeAreaView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <AppButton color={"#fc5c65"} title={"Login"} />
          <AppButton color={"#4ECDC4"} title={"Register"} />
        </View>
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
