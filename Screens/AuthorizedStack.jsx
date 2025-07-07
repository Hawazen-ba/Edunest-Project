import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./Main/ProfileScreen";
import HomeScreen from "./Main/HomeScreen";
import ContactScreen from "./Main/ContactScreen";
import SuggestionsScreen from "./Main/SuggestionsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SettingsScreen from "./Main/SettingsScreen";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import SubContactScreen from "./Main/SubContactScreen";
import MessageDetailScreen from "./Main/MessageDetailScreen";
import ResultsScreen from "./Main/ResultScreen";
import AssignmentsScreen from "./Main/AssignmentsScreen";
import AssignmentDetailScreen from "./Main/AssignmentDetailScreen";
import ScheduleScreen from "./Main/ScheduleScreen";
import CourseMaterialScreen from "./Main/CourseMaterialScreen";
import SubjectMaterialsScreen from "./Main/SubjectMaterialsScreen";
import FinancialStatementScreen from "./Main/FinancialStatementScreen";
import AbsenceScreen from "./Main/AbsenceScreen";
import SuggestionDetailAdministration from "./Main/SuggestionDetailAdministration";
import SuggestionDetailEducation from "./Main/SuggestionDetailEducation";
import SuggestionDetailInfrastructure from "./Main/SuggestionDetailInfrastructure";
import SuggestionDetailClubs from "./Main/SuggestionDetailClubs";
import MessagesScreen from "./Main/MessagesScreen";
import PrivateLessonsScreen from "./Main/PrivateLessonsScreen";
import GeneralHeader from "../components/GeneralHeader";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
const AuthorizedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Suggestions"
        component={SuggestionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubContact"
        component={SubContactScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Result"
        component={ResultsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageDetail"
        component={MessageDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Assignments"
        component={AssignmentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AssignmentDetail"
        component={AssignmentDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseMaterial"
        component={CourseMaterialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubjectMaterials"
        component={SubjectMaterialsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Finance"
        component={FinancialStatementScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Abscence"
        component={AbsenceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuggestionDetailAdministration"
        component={SuggestionDetailAdministration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuggestionDetailEducation"
        component={SuggestionDetailEducation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuggestionDetailInfrastructure"
        component={SuggestionDetailInfrastructure}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuggestionDetailClubs"
        component={SuggestionDetailClubs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrivateLessons"
        component={PrivateLessonsScreen}
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
export default AuthorizedStack;
