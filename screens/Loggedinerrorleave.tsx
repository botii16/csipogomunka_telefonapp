import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Loggedinerrorleave = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loggedinerrorleave}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={styles.loggedinerrorleaveChild} />
      <Image
        style={styles.loggedinerrorleaveItem}
        contentFit="cover"
        source={require("../assets/frame-12.png")}
      />
      <Text
        style={[styles.jelenlegBeVagy, styles.jelenlegBeVagyTypo]}
      >{`Jelenleg be vagy lépve
a munkahelyedre ahhoz hogy kijelentkezz csipogj ki a munkahelyedről!`}</Text>
      <Text style={[styles.sikertelenInterakci, styles.jelenlegBeVagyTypo]}>
        Sikertelen Interakció!
      </Text>
      <Pressable
        style={styles.btn1}
        onPress={() => navigation.navigate("MAINPAGEloggedin")}
      >
        <Text style={styles.megrtettem}>Megértettem</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  jelenlegBeVagyTypo: {
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
  loggedinerrorleaveChild: {
    marginLeft: -484,
    top: -19,
    borderRadius: Border.br_171xl,
    backgroundColor: Color.colorGray_200,
    width: 969,
    height: 969,
    left: "50%",
    position: "absolute",
  },
  loggedinerrorleaveItem: {
    top: 47,
    left: 121,
    width: 187,
    height: 187,
    position: "absolute",
    overflow: "hidden",
  },
  jelenlegBeVagy: {
    marginLeft: -185,
    top: 398,
  },
  sikertelenInterakci: {
    marginLeft: -184,
    top: 256,
  },
  megrtettem: {
    marginLeft: -51.5,
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
    borderColor: Color.colorMediumseagreen,
    borderWidth: 1,
    width: 369,
    height: 67,
    position: "absolute",
  },
  loggedinerrorleave: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Loggedinerrorleave;
