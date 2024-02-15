import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text2 = () => {
  return <Text style={styles.text}>3</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.capriolaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 94,
    height: 90,
  },
});

export default Text2;
