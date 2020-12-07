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

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../assets/background.jpg")}
    >
      <View style={style.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/logo-red.png")}
          />
        </SafeAreaView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={{ backgroundColor: "#fc5c65", height: 70 }}>
            <Button title={"buut"} />
          </View>
          <View style={{ backgroundColor: "#4ECDC4", height: 70 }}>
            <Button title={"buut"} />
          </View>
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
