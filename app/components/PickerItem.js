import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, { fontSize: 18, fontFamily: "Avenir" }]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
