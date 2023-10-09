import React,{useMemo} from "react"
import {View,Text,StatusBar,StyleSheet} from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import IntroScreen01 from "../screens/onBoardScreen/IntroScreen01";
import IntroScreen02 from "../screens/onBoardScreen/IntroScreen02"
import LogInScreen from "../screens/authScreens/LoginScreen";
import TabOneScreen from "./(tabs)";
export type RootStackParamList = {
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  LogInScreen: undefined;
  SignUpScreen:undefined;
  TabOneScreen:undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export default function App(){
    return(
      <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
        
        <RootStack.Screen name="TabOneScreen" component={TabOneScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });