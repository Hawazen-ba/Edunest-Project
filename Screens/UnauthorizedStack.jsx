import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignUpScreen from "./Authentication/SignUpScreen";
import SignInScreen from "./Authentication/SignInScreen";
import ForgotPasswordScreen from "./Authentication/ForgotPasswordScreen";
import CompleteYourProfile from "./Authentication/CompleteYourProfile";

const Stack = createNativeStackNavigator();
const UnauthorizedStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompleteProfile"
        component={CompleteYourProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UnauthorizedStack;
