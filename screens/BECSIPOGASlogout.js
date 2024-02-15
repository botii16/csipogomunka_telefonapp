import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const BECSIPOGASlogout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.becsipogaslogout}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View
        style={[styles.becsipogaslogoutChild, styles.becsipogaslogoutPosition]}
      />
      <View
        style={[styles.becsipogaslogoutItem, styles.becsipogaslogoutPosition]}
      />
      <View
        style={[styles.becsipogaslogoutInner, styles.rectangleViewPosition]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={styles.becsipogaslogoutChild1} />
      <Text style={[styles.dvzllekLszl, styles.dvzllekLszlTypo]}>
        Üdvözöllek, László!
      </Text>
      <Text style={[styles.becsippants, styles.dvzllekLszlTypo]}>
        Becsippantás
      </Text>
      <Text style={[styles.rinthetedAKszlked, styles.visszaTypo]}>
        Érintheted a készüléked
      </Text>
      <Pressable
        style={styles.btn2}
        onPress={() => navigation.navigate("MAINPAGEloggedout")}
      >
        <Text style={[styles.vissza, styles.visszaTypo]}>Vissza</Text>
      </Pressable>
      <Pressable
        style={styles.citypng1}
        onPress={() => navigation.navigate("SIKERCSIPOGAS")}
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
  becsipogaslogoutPosition: {
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
  becsipogaslogoutChild: {
    marginLeft: -484,
    top: -19,
    width: 969,
    height: 969,
  },
  becsipogaslogoutItem: {
    marginLeft: -355,
    top: 141,
    width: 531,
    height: 613,
  },
  becsipogaslogoutInner: {
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
  becsipogaslogoutChild1: {
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
  becsippants: {
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
  becsipogaslogout: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default BECSIPOGASlogout;
