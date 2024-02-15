import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SZABADSAGlogin = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.szabadsaglogin}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View
        style={[styles.szabadsagloginChild, styles.szabadsagloginPosition]}
      />
      <View
        style={[styles.szabadsagloginItem, styles.szabadsagloginPosition]}
      />
      <View
        style={[styles.szabadsagloginInner, styles.rectangleViewPosition]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={styles.szabadsagloginChild1} />
      <Text style={[styles.dvzllekLszl, styles.szabadsgTypo]}>
        Üdvözöllek, László!
      </Text>
      <Text style={[styles.szabadsg, styles.szabadsgTypo]}>Szabadság</Text>
      <Text
        style={[styles.munkaKzbenNem, styles.szabadsgTypo]}
      >{`Munka közben nem tudsz
szabadságot kérni!`}</Text>
      <Pressable
        style={styles.btn2}
        onPress={() => navigation.navigate("MAINPAGEloggedin")}
      >
        <Text style={styles.vissza}>Vissza</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  szabadsagloginPosition: {
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
  szabadsagloginChild: {
    marginLeft: -484,
    top: -19,
    width: 969,
    height: 969,
  },
  szabadsagloginItem: {
    marginLeft: -355,
    top: 141,
    width: 531,
    height: 613,
  },
  szabadsagloginInner: {
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
  szabadsagloginChild1: {
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
  szabadsg: {
    marginLeft: -215,
    top: 208,
  },
  munkaKzbenNem: {
    marginLeft: -210,
    top: 413,
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
  szabadsaglogin: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SZABADSAGlogin;
