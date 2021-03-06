import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Screen from "../components/Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  items,
  icon,
  numberOfColumns = 1,
  placeholder,
  PickerItemComponent = PickerItem,
  onSelectItem,
  selectedItem,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              size={20}
              color={colors.medium}
              name={icon}
            />
          )}
          <Text style={[styles.text, { color: placeholder && colors.medium }]}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            size={20}
            color={colors.medium}
            name={"chevron-down"}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
            numColumns={numberOfColumns}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    fontFamily: "Avenir",
    color: colors.medium,
  },

  text: {
    flex: 1,
  },

  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
