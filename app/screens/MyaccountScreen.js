import React from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const menueItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    targetScreen: "Messaging",
  },
];

const MyaccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ListItem
          image={require("../assets/man-image.webp")}
          subTitle={"nasirdara@gmail.com"}
          title={"Nasir Dara"}
        />
      </View>
      <View style={styles.flatList}>
        <FlatList
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
            />
          )}
          keyExtractor={(item) => item.title}
          data={menueItems}
        />
      </View>

      <ListItem
        onPress={() => console.log("")}
        IconComponent={<Icon backgroundColor="#ffe66d" name="logout" />}
        title={"Log Out"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 15,
  },
  flatList: {
    marginVertical: 20,
  },
});

export default MyaccountScreen;
