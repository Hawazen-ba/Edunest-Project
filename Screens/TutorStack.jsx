import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView, StyleSheet } from "react-native";
import useColors from "../assets/styles/colors";
import GeneralHeader from "../components/GeneralHeader";
import HomeScreen from "./Tutor/HomeScreen";
import AddAssignmentScreen from "./Tutor/AddAssignmentScreen";
import ProfileScreen from "./Main/ProfileScreen";
import SuggestionsScreen from "./Main/SuggestionsScreen";
import ContactScreen from "./Main/ContactScreen";
import AddCourseMaterialScreen from "./Tutor/AddCourseMaterialScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddOnlineClassScreen from "./Tutor/AddOnlineClassScreen";
import FinancialScreen from "./Tutor/FinancialScreen";
import FinancialInfoScreen from "./Tutor/FinancialInfoScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          const iconColor = focused ? "#FFFFFF" : "#102363";
          const iconSize = 24;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Contact") {
            iconName = focused ? "call" : "call-outline"; // Better for contact
          } else if (route.name === "Suggestions") {
            iconName = focused ? "bulb" : "bulb-outline"; // More appropriate for suggestions
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline"; // Fixed from person to settings
          } else if (route.name === "Assignments") {
            iconName = focused ? "document" : "document-outline";
          }
          return (
            <SafeAreaView
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Ionicons name={iconName} size={iconSize} color={iconColor} />
            </SafeAreaView>
          );
        },
        tabBarLabelStyle: {
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#102363",
        tabBarInactiveTintColor: "#102363",
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 80,
          borderRadius: 50,
          paddingTop: 12,
          marginBottom: 25,
          position: "absolute",
          marginHorizontal: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        initialParams={{ role: "teacher" }}
        options={{
          headerShown: true,
          header: () => <GeneralHeader title={"Contacts"} />,
        }}
      />
      <Tab.Screen
        name="Suggestions"
        component={SuggestionsScreen}
        options={{
          headerShown: true,
          header: () => <GeneralHeader title={"Suggestions"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          header: () => <GeneralHeader title={"Profile"} />,
        }}
      />
    </Tab.Navigator>
  );
};

const TutorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAssignments"
        component={AddAssignmentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCourse"
        component={AddCourseMaterialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Online"
        component={AddOnlineClassScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Financial"
        component={FinancialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinancialInfo"
        component={FinancialInfoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#102363",
  },
  activeIconContainer: {
    backgroundColor: "#102363",
    borderWidth: 0,
  },
});
export default TutorStack;
