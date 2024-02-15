import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const KICSIPOGASLOGIN = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.kicsipogaslogin}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View
        style={[styles.kicsipogasloginChild, styles.kicsipogasloginPosition]}
      />
      <View
        style={[styles.kicsipogasloginItem, styles.kicsipogasloginPosition]}
      />
      <View
        style={[styles.kicsipogasloginInner, styles.rectangleViewPosition]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={styles.kicsipogasloginChild1} />
      <Text style={[styles.dvzllekLszl, styles.kicsipogsTypo]}>
        Üdvözöllek, László!
      </Text>
      <Text style={[styles.kicsipogs, styles.kicsipogsTypo]}>Kicsipogás</Text>
      <Text style={[styles.rinthetedAKszlked, styles.visszaTypo]}>
        Érintheted a készüléked
      </Text>
      <Pressable
        style={styles.btn2}
        onPress={() => navigation.navigate("MAINPAGEloggedin")}
      >
        <Text style={[styles.vissza, styles.visszaTypo]}>Vissza</Text>
      </Pressable>
      <Pressable
        style={styles.citypng1}
        onPress={() => navigation.navigate("SIKERCSIPOGASKILEPES")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/citypng-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  kicsipogasloginPosition: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_171xl,
    left: "50%",
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 47,
    position: "absolute",
  },
  kicsipogsTypo: {
    width: 370,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.cambayRegular,
    fontSize: FontSize.size_13xl,
    left: "50%",
    position: "absolute",
  },
  visszaTypo: {
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
  kicsipogasloginChild: {
    marginLeft: -484,
    top: -19,
    width: 969,
    height: 969,
  },
  kicsipogasloginItem: {
    marginLeft: -355,
    top: 141,
    width: 531,
    height: 613,
  },
  kicsipogasloginInner: {
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
  kicsipogasloginChild1: {
    marginLeft: 136,
    borderRadius: Border.br_211xl,
    backgroundColor: Color.colorMediumseagreen,
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
  kicsipogs: {
    marginLeft: -215,
    top: 208,
  },
  rinthetedAKszlked: {
    marginLeft: -192,
    top: 359,
    width: 349,
    height: 46,
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    fontFamily: FontFamily.cambayRegular,
  },
  vissza: {
    marginLeft: -25.5,
    top: 21,
    fontSize: FontSize.size_lg,
    color: Color.colorTomato_100,
    textAlign: "center",
    fontFamily: FontFamily.cambayRegular,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  citypng1: {
    left: 72,
    top: 415,
    width: 252,
    height: 252,
    position: "absolute",
  },
  kicsipogaslogin: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default KICSIPOGASLOGIN;
