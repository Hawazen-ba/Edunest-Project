import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GeneralStack from "./Screens/GeneralStack";
import UnauthorizedStack from "./Screens/UnauthorizedStack";
import useAuthStore from "./utils/AuthStore";
import useOnBoardingStore from "./utils/OnBoardingStore";
import OnboardingScreen from "./Screens/Authentication/OnBoardingScreen";
import SubContactScreen from "./Screens/Main/SubContactScreen";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import TutorStack from "./Screens/TutorStack";

const Stack = createNativeStackNavigator();

const App = () => {
  const { isFirstLaunched, checkFirstLaunch } = useOnBoardingStore();
  const { user, isLoggedIn } = useAuthStore();
  useEffect(() => {
    checkFirstLaunch();
  }, []);

  if (isFirstLaunched === null) {
    // Still loading onboarding state
    return null; // Or a splash/loading component
  }

  return (
    <NavigationContainer>
      {isFirstLaunched ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
      ) : !isLoggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Unauthorized" component={UnauthorizedStack} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Authorized" component={TutorStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
