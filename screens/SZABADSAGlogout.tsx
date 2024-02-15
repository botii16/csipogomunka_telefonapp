import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SZABADSAGlogout = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.szabadsaglogout}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View
        style={[styles.szabadsaglogoutChild, styles.szabadsaglogoutPosition]}
      />
      <View
        style={[styles.szabadsaglogoutItem, styles.szabadsaglogoutPosition]}
      />
      <View
        style={[styles.szabadsaglogoutInner, styles.rectangleViewPosition]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={styles.szabadsaglogoutChild1} />
      <Text style={[styles.dvzllekLszl, styles.szabadsgTypo]}>
        Üdvözöllek, László!
      </Text>
      <Text style={[styles.szabadsg, styles.szabadsgTypo]}>Szabadság</Text>
      <Pressable
        style={styles.btn2}
        onPress={() => navigation.navigate("MAINPAGEloggedout")}
      >
        <Text style={styles.vissza}>Vissza</Text>
      </Pressable>
      <View style={[styles.btn1, styles.btnLayout]}>
        <Text style={[styles.szabadsgBejelentse, styles.szabadsgPosition]}>
          Szabadság bejelentése
        </Text>
      </View>
      <View style={[styles.btn3, styles.btnLayout]}>
        <Text style={[styles.tpPnz, styles.szabadsgPosition]}>Táp pénz</Text>
      </View>
      <View style={[styles.btn4, styles.btnLayout]}>
        <Text style={[styles.szabadsgKrse, styles.szabadsgPosition]}>
          Szabadság kérése
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  szabadsaglogoutPosition: {
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_171xl,
    left: "50%",
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 47,
    position: "absolute",
  },
  szabadsgTypo: {
    width: 370,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.cambayRegular,
    fontSize: FontSize.size_13xl,
    left: "50%",
    position: "absolute",
  },
  btnLayout: {
    width: 227,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: 67,
    borderRadius: Border.br_221xl,
    position: "absolute",
  },
  szabadsgPosition: {
    top: 19,
    fontSize: FontSize.size_lg,
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
  szabadsaglogoutChild: {
    marginLeft: -484,
    top: -19,
    width: 969,
    height: 969,
  },
  szabadsaglogoutItem: {
    marginLeft: -355,
    top: 141,
    width: 531,
    height: 613,
  },
  szabadsaglogoutInner: {
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
  szabadsaglogoutChild1: {
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
  szabadsg: {
    marginLeft: -215,
    top: 208,
  },
  vissza: {
    marginLeft: -25.5,
    top: 21,
    color: Color.colorTomato_100,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.cambayRegular,
    left: "50%",
    position: "absolute",
  },
  btn2: {
    top: 821,
    left: 31,
    backgroundColor: Color.colorCrimson,
    width: 369,
    height: 67,
    borderRadius: Border.br_221xl,
    position: "absolute",
  },
  szabadsgBejelentse: {
    marginLeft: -89.5,
  },
  btn1: {
    top: 344,
    left: 71,
    width: 227,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  tpPnz: {
    marginLeft: -36.5,
  },
  btn3: {
    top: 432,
    left: 71,
    width: 227,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  szabadsgKrse: {
    marginLeft: -70.5,
  },
  btn4: {
    top: 520,
    left: 70,
  },
  szabadsaglogout: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SZABADSAGlogout;
