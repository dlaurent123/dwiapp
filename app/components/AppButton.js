import React from "react";
import { Button, View } from "react-native";

const AppButton = ({ title, color }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        height: 70,
        justifyContent: "center",
      }}
    >
      <Button title={title} />
    </View>
  );
};

export default AppButton;
