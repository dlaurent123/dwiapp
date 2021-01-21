import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import Progress from "react-native-progress/Bar";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress > 1 ? (
          <Progress color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView source={require("../assets/animations/done.json")} />
        )}
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
