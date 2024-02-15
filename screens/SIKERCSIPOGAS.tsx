import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SIKERCSIPOGAS = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sikercsipogas}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={styles.sikercsipogasChild} />
      <Image
        style={styles.sikercsipogasItem}
        contentFit="cover"
        source={require("../assets/frame-1.png")}
      />
      <Text style={[styles.jMunktLszl, styles.jMunktLszlTypo]}>
        Jó munkát, László!
      </Text>
      <Text style={[styles.sikeresBelps, styles.jMunktLszlTypo]}>
        Sikeres belépés!
      </Text>
      <Pressable
        style={styles.btn1}
        onPress={() => navigation.navigate("MAINPAGEloggedin")}
      >
        <Text style={styles.tovbb}>Tovább</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  jMunktLszlTypo: {
    width: 370,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    color: Color.colorWhite,
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
  sikercsipogasChild: {
    marginLeft: -484,
    top: -19,
    borderRadius: Border.br_171xl,
    backgroundColor: Color.colorGray_200,
    width: 969,
    height: 969,
    left: "50%",
    position: "absolute",
  },
  sikercsipogasItem: {
    top: 47,
    left: 121,
    width: 187,
    height: 187,
    position: "absolute",
    overflow: "hidden",
  },
  jMunktLszl: {
    marginLeft: -185,
    top: 502,
  },
  sikeresBelps: {
    marginLeft: -184,
    top: 256,
  },
  tovbb: {
    marginLeft: -29.5,
    top: 19,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.cambayRegular,
    left: "50%",
    position: "absolute",
  },
  btn1: {
    top: 818,
    left: 31,
    borderRadius: Border.br_221xl,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 369,
    height: 67,
    position: "absolute",
  },
  sikercsipogas: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SIKERCSIPOGAS;
