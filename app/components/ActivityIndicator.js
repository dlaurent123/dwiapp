import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay={true}
      loop={true}
      source={require("../assets/animations/loader.json")}
      style={{ height: 275 }}
    />
  );
}

export default ActivityIndicator;
