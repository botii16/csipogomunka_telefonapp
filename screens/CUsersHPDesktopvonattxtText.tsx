import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily } from "../GlobalStyles";

const CUsersHPDesktopvonattxtText = () => {
  return (
    <Text style={styles.cusershpdesktopvonattxt}>
      "C:\Users\HP\Desktop\vonat.txt"
    </Text>
  );
};

const styles = StyleSheet.create({
  cusershpdesktopvonattxt: {
    fontSize: 12,
    fontFamily: FontFamily.capriolaRegular,
    color: "#000",
    textAlign: "left",
  },
});

export default CUsersHPDesktopvonattxtText;
