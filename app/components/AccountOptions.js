import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const AccountOptions = ({
  iconName,
  iconBackgroundColor = "black",
  iconColor,
  title,
}) => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <View
          style={[
            { backgroundColor: iconBackgroundColor },
            styles.iconContainer,
          ]}
        >
          <MaterialIcons
            title={title}
            color={iconColor}
            size={20}
            name={iconName}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer: {
    justifyContent: "center",
    marginHorizontal: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default AccountOptions;
