import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import { AuthContext } from "../context";
import { logOut } from "../utiliy/firebaseFunctions";

const menueItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    targetScreen: "Messages",
  },
];

const MyaccountScreen = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ListItem
          image={require("../assets/man-image.webp")}
          subTitle={currentUser.email}
          title={currentUser.name}
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
        onPress={() => logOut()}
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
