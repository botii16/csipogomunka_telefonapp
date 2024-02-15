const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SLIDETOCONFIRM from "./screens/SLIDETOCONFIRM";
import RDPIN from "./screens/RDPIN";
import SLIDEDONE from "./screens/SLIDEDONE";
import WELCOME from "./screens/WELCOME";
import SIKERCSIPOGAS from "./screens/SIKERCSIPOGAS";
import Loggedinerrorleave from "./screens/Loggedinerrorleave";
import SIKERCSIPOGASKILEPES from "./screens/SIKERCSIPOGASKILEPES";
import MAINPAGEloggedout from "./screens/MAINPAGEloggedout";
import MAINPAGEloggedin from "./screens/MAINPAGEloggedin";
import BECSIPOGASlogout from "./screens/BECSIPOGASlogout";
import STATICSLOGOUT from "./screens/STATICSLOGOUT";
import SZABADSAGlogout from "./screens/SZABADSAGlogout";
import STATICSloggedin from "./screens/STATICSloggedin";
import KICSIPOGASLOGIN from "./screens/KICSIPOGASLOGIN";
import NDPIN from "./screens/NDPIN";
import STPIN from "./screens/STPIN";
import STANDBY from "./screens/STANDBY";
import SZABADSAGlogin from "./screens/SZABADSAGlogin";
import CUsersHPDesktopvonattxtText from "./components/CUsersHPDesktopvonattxtText";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Capriola-Regular": require("./assets/fonts/Capriola-Regular.ttf"),
    "BrunoAceSC-Regular": require("./assets/fonts/BrunoAceSC-Regular.ttf"),
    "Cambay-Regular": require("./assets/fonts/Cambay-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SLIDETOCONFIRM"
              component={SLIDETOCONFIRM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RDPIN"
              component={RDPIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SLIDEDONE"
              component={SLIDEDONE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WELCOME"
              component={WELCOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SIKERCSIPOGAS"
              component={SIKERCSIPOGAS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loggedinerrorleave"
              component={Loggedinerrorleave}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SIKERCSIPOGASKILEPES"
              component={SIKERCSIPOGASKILEPES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MAINPAGEloggedout"
              component={MAINPAGEloggedout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MAINPAGEloggedin"
              component={MAINPAGEloggedin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BECSIPOGASlogout"
              component={BECSIPOGASlogout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STATICSLOGOUT"
              component={STATICSLOGOUT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SZABADSAGlogout"
              component={SZABADSAGlogout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STATICSloggedin"
              component={STATICSloggedin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KICSIPOGASLOGIN"
              component={KICSIPOGASLOGIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NDPIN"
              component={NDPIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STPIN"
              component={STPIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="STANDBY"
              component={STANDBY}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SZABADSAGlogin"
              component={SZABADSAGlogin}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
