import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MAINPAGEloggedin = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mainpageloggedin}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={styles.mainpageloggedinChild} />
      <Pressable
        style={[styles.mainpageloggedinItem, styles.mainpageloggedinLayout]}
        onPress={() => navigation.navigate("KICSIPOGASLOGIN")}
      />
      <Pressable
        style={[styles.mainpageloggedinInner, styles.mainpageloggedinLayout]}
        onPress={() => navigation.navigate("STATICSloggedin")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.mainpageloggedinLayout]}
        onPress={() => navigation.navigate("SZABADSAGlogin")}
      />
      <View style={[styles.frameView, styles.viewPosition]} />
      <View style={[styles.rectangleView, styles.viewPosition]} />
      <View style={styles.mainpageloggedinChild1} />
      <Text style={[styles.dvzllekLszl, styles.szabadsgTypo]}>
        Üdvözöllek, László!
      </Text>
      <Text style={[styles.kicsipogs, styles.szabadsgTypo]}>Kicsipogás</Text>
      <Text style={[styles.statisztikim, styles.szabadsgTypo]}>
        Statisztikáim
      </Text>
      <Text style={[styles.szabadsg, styles.szabadsgTypo]}>Szabadság</Text>
      <Pressable
        style={styles.btn2}
        onPress={() => navigation.navigate("Loggedinerrorleave")}
      >
        <Text style={styles.kilps}>Kilépés</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainpageloggedinLayout: {
    height: 180,
    width: 640,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_171xl,
    left: "50%",
    position: "absolute",
  },
  viewPosition: {
    top: 47,
    position: "absolute",
  },
  szabadsgTypo: {
    width: 370,
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
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
  mainpageloggedinChild: {
    top: -19,
    width: 969,
    height: 969,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_171xl,
    left: "50%",
    marginLeft: -484,
    position: "absolute",
  },
  mainpageloggedinItem: {
    top: 141,
    marginLeft: -484,
    width: 640,
  },
  mainpageloggedinInner: {
    marginLeft: -504,
    top: 353,
  },
  rectanglePressable: {
    marginLeft: -554,
    top: 565,
  },
  frameView: {
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
  mainpageloggedinChild1: {
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
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
    top: 57,
  },
  kicsipogs: {
    marginLeft: -215,
    top: 208,
  },
  statisztikim: {
    top: 420,
    marginLeft: -234,
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
  },
  szabadsg: {
    marginLeft: -260,
    top: 632,
  },
  kilps: {
    marginLeft: -28.5,
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
  mainpageloggedin: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default MAINPAGEloggedin;
