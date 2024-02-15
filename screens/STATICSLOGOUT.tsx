import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const STATICSLOGOUT = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.staticslogout}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.staticslogoutChild, styles.staticslogoutPosition]} />
      <View style={[styles.staticslogoutItem, styles.staticslogoutPosition]} />
      <View style={[styles.staticslogoutInner, styles.rectangleViewPosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={styles.staticslogoutChild1} />
      <Text style={[styles.dvzllekLszl, styles.dvzllekLszlTypo]}>
        Üdvözöllek, László!
      </Text>
      <Text style={[styles.statisztikim, styles.dvzllekLszlTypo]}>
        Statisztikáim
      </Text>
      <Text style={[styles.dolgozottRk, styles.tlrkPosition]}>
        Dolgozott órák:
      </Text>
      <Text style={[styles.tlrk, styles.tlrkPosition]}>Túlórák:</Text>
      <Text style={[styles.szabadsgok, styles.tlrkPosition]}>Szabadságok:</Text>
      <Pressable
        style={styles.btn2}
        onPress={() => navigation.navigate("MAINPAGEloggedout")}
      >
        <Text style={styles.vissza}>Vissza</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  staticslogoutPosition: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_171xl,
    left: "50%",
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 47,
    position: "absolute",
  },
  dvzllekLszlTypo: {
    width: 370,
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    fontFamily: FontFamily.cambayRegular,
    left: "50%",
    position: "absolute",
  },
  tlrkPosition: {
    height: 46,
    width: 349,
    marginLeft: -264,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.cambayRegular,
    fontSize: FontSize.size_13xl,
    left: "50%",
    position: "absolute",
  },
  image1Icon: {
    top: -191,
    left: 155,
    width: 120,
    height: 183,
    opacity: 0,
    position: "absolute",
  },
  staticslogoutChild: {
    marginLeft: -484,
    top: -19,
    width: 969,
    height: 969,
  },
  staticslogoutItem: {
    marginLeft: -355,
    top: 141,
    width: 531,
    height: 613,
  },
  staticslogoutInner: {
    left: 121,
    width: 187,
    height: 187,
    overflow: "hidden",
  },
  rectangleView: {
    marginLeft: 126,
    backgroundColor: Color.colorWhite,
    width: 60,
    height: 60,
    opacity: 0.1,
    borderRadius: Border.br_171xl,
    top: 47,
    left: "50%",
  },
  staticslogoutChild1: {
    marginLeft: 136,
    borderRadius: Border.br_211xl,
    backgroundColor: Color.colorTomato_200,
    width: 40,
    height: 40,
    top: 57,
    left: "50%",
    position: "absolute",
  },
  dvzllekLszl: {
    marginLeft: -234,
    top: 57,
  },
  statisztikim: {
    marginLeft: -215,
    top: 208,
  },
  dolgozottRk: {
    top: 315,
  },
  tlrk: {
    top: 420,
  },
  szabadsgok: {
    top: 531,
  },
  vissza: {
    marginLeft: -25.5,
    top: 21,
    fontSize: FontSize.size_lg,
    color: Color.colorTomato_100,
    textAlign: "center",
    fontFamily: FontFamily.cambayRegular,
    left: "50%",
    position: "absolute",
  },
  btn2: {
    top: 821,
    left: 31,
    borderRadius: Border.br_221xl,
    backgroundColor: Color.colorCrimson,
    width: 369,
    height: 67,
    position: "absolute",
  },
  staticslogout: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default STATICSLOGOUT;
