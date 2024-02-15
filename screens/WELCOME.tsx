import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const WELCOME = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.welcome}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={styles.welcomeChild} />
      <Image
        style={styles.welcomeItem}
        contentFit="cover"
        source={require("../assets/frame-1.png")}
      />
      <Text style={[styles.dvzllekLszl, styles.dvzllekLszlTypo]}>
        Üdvözöllek, László!
      </Text>
      <Text style={[styles.sikeresBejelentkezs, styles.dvzllekLszlTypo]}>
        Sikeres bejelentkezés!
      </Text>
      <Pressable
        style={[styles.btn1, styles.btnLayout]}
        onPress={() => navigation.navigate("MAINPAGEloggedout")}
      >
        <Text style={[styles.tovbb, styles.tovbbTypo]}>Tovább</Text>
      </Pressable>
      <Pressable
        style={[styles.btn2, styles.btnLayout]}
        onPress={() => navigation.navigate("STANDBY")}
      >
        <Text style={[styles.kilps, styles.tovbbTypo]}>Kilépés</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  dvzllekLszlTypo: {
    width: 370,
    textAlign: "center",
    fontFamily: FontFamily.cambayRegular,
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  btnLayout: {
    height: 67,
    width: 369,
    borderRadius: Border.br_221xl,
    left: 31,
    position: "absolute",
  },
  tovbbTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.cambayRegular,
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
  welcomeChild: {
    marginLeft: -484,
    top: -19,
    borderRadius: Border.br_171xl,
    backgroundColor: Color.colorGray_200,
    width: 969,
    height: 969,
    left: "50%",
    position: "absolute",
  },
  welcomeItem: {
    top: 47,
    left: 121,
    width: 187,
    height: 187,
    position: "absolute",
    overflow: "hidden",
  },
  dvzllekLszl: {
    marginLeft: -185,
    top: 502,
  },
  sikeresBejelentkezs: {
    marginLeft: -184,
    top: 256,
  },
  tovbb: {
    marginLeft: -29.5,
    top: 19,
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
  },
  btn1: {
    top: 736,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
  },
  kilps: {
    marginLeft: -28.5,
    top: 21,
    color: Color.colorTomato_100,
  },
  btn2: {
    top: 821,
    backgroundColor: Color.colorCrimson,
  },
  welcome: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default WELCOME;
