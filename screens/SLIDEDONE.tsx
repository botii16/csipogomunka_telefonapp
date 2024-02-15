import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const SLIDEDONE = () => {
  return (
    <View style={styles.slidedone}>
      <View style={styles.slidedoneChild} />
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={styles.swipeToSend}>Swipe to Send</Text>
        <View style={styles.frameItem} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <View style={styles.slidedoneItem} />
      <Text style={styles.yourTransferOf}>
        Your Transfer of $300 is on the way!
      </Text>
      <View style={[styles.btn1, styles.btnLayout]}>
        <Text style={[styles.trackTransfer, styles.transferPosition]}>
          Track Transfer
        </Text>
      </View>
      <View style={[styles.btn2, styles.btnLayout]}>
        <Text style={[styles.cancelTransfer, styles.transferPosition]}>
          Cancel Transfer
        </Text>
      </View>
      <Text style={[styles.text, styles.textTypo3]}>1</Text>
      <Text style={[styles.text1, styles.textTypo3]}>4</Text>
      <Text style={[styles.text2, styles.textTypo3]}>7</Text>
      <Text style={[styles.text3, styles.textTypo2]}>8</Text>
      <Text style={[styles.text4, styles.textTypo2]}>0</Text>
      <Text style={styles.text5}>.</Text>
      <Text style={[styles.text6, styles.textTypo1]}>9</Text>
      <Text style={[styles.text7, styles.textTypo2]}>5</Text>
      <Text style={[styles.text8, styles.textTypo1]}>6</Text>
      <Text style={[styles.text9, styles.textTypo]}>2</Text>
      <Text style={[styles.text10, styles.text10Position]}>3</Text>
      <Text style={[styles.pin, styles.pinTypo]}>PIN:</Text>
      <Text style={[styles.text11, styles.pinTypo]}>1234</Text>
      <Image
        style={[styles.image1Icon, styles.text10Position]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 105,
    width: 390,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btnLayout: {
    height: 67,
    width: 369,
    borderRadius: Border.br_221xl,
    left: 31,
    position: "absolute",
  },
  transferPosition: {
    top: 21,
    textAlign: "center",
    fontFamily: FontFamily.brunoAceSCRegular,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  textTypo3: {
    height: 49,
    width: 26,
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    left: 83,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo2: {
    left: 202,
    height: 49,
    width: 26,
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo1: {
    left: 321,
    height: 49,
    width: 26,
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo: {
    height: 45,
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    top: 356,
    textAlign: "center",
    color: Color.colorWhite,
  },
  text10Position: {
    left: 313,
    width: 42,
    position: "absolute",
  },
  pinTypo: {
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    position: "absolute",
  },
  slidedoneChild: {
    marginLeft: 137,
    top: 809,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 17,
    height: 17,
    opacity: 0,
    borderRadius: Border.br_171xl,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    marginLeft: -195,
    top: 0,
    backgroundColor: Color.colorWhite,
    opacity: 0.1,
    borderRadius: Border.br_171xl,
    left: "50%",
    width: 390,
  },
  swipeToSend: {
    top: 39,
    left: 255,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.brunoAceSCRegular,
    fontSize: FontSize.size_lg,
    opacity: 0,
    position: "absolute",
  },
  frameItem: {
    top: 9,
    left: 294,
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
    right: "10.13%",
    bottom: "40.86%",
    left: "87.54%",
  },
  vectorIcon1: {
    height: "3.81%",
    width: "6.46%",
    top: "50.48%",
    right: "10.21%",
    bottom: "45.71%",
    left: "83.33%",
  },
  rectangleParent: {
    top: 765,
    left: 20,
    overflow: "hidden",
  },
  slidedoneItem: {
    top: 43,
    left: 29,
    width: 371,
    height: 271,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  yourTransferOf: {
    marginLeft: -108.9,
    top: 608,
    fontSize: 19,
    width: 218,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.brunoAceSCRegular,
    opacity: 0,
    left: "50%",
    position: "absolute",
  },
  trackTransfer: {
    marginLeft: -90.5,
    color: Color.colorWhite,
  },
  btn1: {
    top: 1014,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
  },
  cancelTransfer: {
    marginLeft: -95.5,
    color: Color.colorTomato_100,
  },
  btn2: {
    top: 1099,
    backgroundColor: Color.colorCrimson,
  },
  text: {
    top: 356,
    height: 49,
  },
  text1: {
    top: 452,
  },
  text2: {
    top: 548,
  },
  text3: {
    top: 548,
  },
  text4: {
    top: 649,
  },
  text5: {
    top: 647,
    height: 37,
    width: 26,
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    left: 83,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  text6: {
    top: 548,
  },
  text7: {
    top: 452,
  },
  text8: {
    top: 452,
  },
  text9: {
    left: 194,
    width: 42,
    height: 45,
    position: "absolute",
  },
  text10: {
    height: 45,
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    top: 356,
    textAlign: "center",
    color: Color.colorWhite,
  },
  pin: {
    top: 76,
    left: 177,
    width: 77,
    height: 41,
    textAlign: "left",
  },
  text11: {
    top: 160,
    width: 264,
    height: 119,
    left: 83,
    fontFamily: FontFamily.capriolaRegular,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
  },
  image1Icon: {
    top: 655,
    height: 37,
  },
  slidedone: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default SLIDEDONE;
