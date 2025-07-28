import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import GeneralStack from "./Screens/GeneralStack";
import UnauthorizedStack from "./Screens/UnauthorizedStack";
import useAuthStore from "./utils/AuthStore";
import useOnBoardingStore from "./utils/OnBoardingStore";
import OnboardingScreen from "./Screens/Authentication/OnBoardingScreen";
import SubContactScreen from "./Screens/Main/SubContactScreen";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import TutorStack from "./Screens/TutorStack";

const Stack = createNativeStackNavigator();

const App = () => {
  const { isFirstLaunched, checkFirstLaunch } = useOnBoardingStore();
  const { user, isLoggedIn } = useAuthStore();
  console.log(user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Authorized"
            component={TutorStack}
            // component={user?.role === "teacher" ? TutorStack : GeneralStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isFirstLaunched && (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          )}
          <Stack.Screen
            name="Unauthorized"
            component={UnauthorizedStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
