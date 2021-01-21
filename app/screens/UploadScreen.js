import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import Progress from "react-native-progress/Bar";
import colors from "../config/colors";

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress color={colors.primary} progress={progress} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
