import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const THPIN = () => {
  return (
    <View style={styles.thPin}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.hzzABejelentkezshez}>Húzz a bejelentkezéshez</Text>
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.thPinChild} />
      <Text style={styles.pin}>PIN:</Text>
      <Text style={styles.text}>1234</Text>
      <Text style={[styles.text1, styles.textTypo3]}>1</Text>
      <Text style={[styles.text2, styles.textTypo3]}>4</Text>
      <Text style={[styles.text3, styles.textTypo3]}>7</Text>
      <Text style={[styles.text4, styles.textTypo2]}>8</Text>
      <Text style={[styles.text5, styles.textTypo2]}>0</Text>
      <Text style={styles.text6}>.</Text>
      <Text style={[styles.text7, styles.textTypo1]}>9</Text>
      <Text style={[styles.text8, styles.textTypo2]}>5</Text>
      <Text style={[styles.text9, styles.textTypo1]}>6</Text>
      <Text style={[styles.text10, styles.textTypo]}>2</Text>
      <Text style={[styles.text11, styles.textTypo]}>3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    height: 49,
    width: 26,
    textAlign: "center",
    left: 83,
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    position: "absolute",
  },
  textTypo2: {
    left: 202,
    height: 49,
    width: 26,
    textAlign: "center",
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    position: "absolute",
  },
  textTypo1: {
    left: 321,
    height: 49,
    width: 26,
    textAlign: "center",
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    position: "absolute",
  },
  textTypo: {
    height: 45,
    width: 42,
    top: 356,
    textAlign: "center",
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    position: "absolute",
  },
  frameChild: {
    marginLeft: -195,
    top: 0,
    borderRadius: Border.br_171xl,
    backgroundColor: Color.colorWhite,
    opacity: 0.1,
    left: "50%",
    height: 105,
    width: 390,
    position: "absolute",
  },
  frameItem: {
    top: 9,
    left: 9,
    borderRadius: Border.br_211xl,
    backgroundColor: Color.colorGainsboro,
    width: 87,
    height: 87,
    position: "absolute",
  },
  vectorIcon: {
    height: "17.33%",
    width: "2.33%",
    top: "41.81%",
    right: "83.41%",
    bottom: "40.86%",
    left: "14.26%",
  },
  vectorIcon1: {
    height: "3.81%",
    width: "6.46%",
    top: "50.48%",
    right: "83.46%",
    bottom: "45.71%",
    left: "10.08%",
  },
  hzzABejelentkezshez: {
    marginLeft: -59,
    top: 44,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 765,
    left: 20,
    height: 105,
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  image1Icon: {
    left: 16,
    width: 398,
    height: 608,
    display: "none",
    top: 76,
    position: "absolute",
  },
  thPinChild: {
    top: 53,
    left: 24,
    width: 371,
    height: 271,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  pin: {
    left: 177,
    width: 77,
    height: 41,
    fontSize: FontSize.size_17xl,
    top: 76,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    position: "absolute",
  },
  text: {
    top: 160,
    width: 264,
    height: 119,
    textAlign: "center",
    left: 83,
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    position: "absolute",
  },
  text1: {
    top: 356,
    height: 49,
  },
  text2: {
    top: 452,
  },
  text3: {
    top: 548,
  },
  text4: {
    top: 548,
  },
  text5: {
    top: 649,
  },
  text6: {
    top: 647,
    height: 37,
    width: 26,
    textAlign: "center",
    left: 83,
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.capriolaRegular,
    position: "absolute",
  },
  text7: {
    top: 548,
  },
  text8: {
    top: 452,
  },
  text9: {
    top: 452,
  },
  text10: {
    left: 194,
  },
  text11: {
    left: 313,
  },
  thPin: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default THPIN;
