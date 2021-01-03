import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require("../assets/images/images/reverse.png")}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
