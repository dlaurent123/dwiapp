import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import Progress from "react-native-progress/Bar";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ progress = 0, onDone, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
            source={require("../assets/animations/done.json")}
          />
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
  animation: {
    width: 150,
  },
});

export default UploadScreen;
