import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const STNDBYText = () => {
  return <Text style={styles.stndby}>STNDBY</Text>;
};

const styles = StyleSheet.create({
  stndby: {
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.capriolaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 347,
    height: 212,
  },
});

export default STNDBYText;
