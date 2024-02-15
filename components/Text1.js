import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text1 = () => {
  return <Text style={styles.text}>4</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.capriolaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 120,
    height: 90,
  },
});

export default Text1;
