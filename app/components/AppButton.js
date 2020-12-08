import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

const AppButton = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        height: 50,
        justifyContent: "center",
        borderRadius: 25,
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});

export default AppButton;
