import React, { useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import MessageRow from "../../components/MessageRow";
import FeatureRow from "../../components/FeatureRow";
// import {
//   SpotlightTourProvider,
//   AttachStep,
//   TourBox,
//   useSpotlightTour,
// } from "react-native-spotlight-tour";
import useColors from "../../assets/styles/colors";
import { StatusBar } from "react-native";

const features = [
  {
    title: "Assignments",
    icon: require("../../assets/assignment.png"),
    screen: "AddAssignments",
  },
  {
    title: "Course material",
    icon: require("../../assets/homework.png"),
    screen: "AddCourse",
  },
  {
    title: "Online Classes",
    icon: require("../../assets/online-learning.png"),
    screen: "Online",
  },
  {
    title: "Schedule",
    icon: require("../../assets/calendar.png"),
    screen: "Schedule",
  },

  {
    title: "Financial statement",
    icon: require("../../assets/icon2.png"),
    screen: "Financial",
  },
  //   {
  //     title: "Private Lessons",
  //     icon: require("../../assets/teacher (1).png"), // Add a new icon to assets if needed
  //     screen: "PrivateLessons",
  //   },
];

// const tourSteps = [
//   {
//     render: ({ next }) => (
//       <TourBox title="Messages">
//         <Text>This section shows your latest messages and notifications.</Text>
//         <Text style={{ marginTop: 10 }}>
//           Tap "Next" to see the main features.
//         </Text>
//         <Text
//           style={{ marginTop: 10, color: "#102363", fontWeight: "bold" }}
//           onPress={next}
//         >
//           Next
//         </Text>
//       </TourBox>
//     ),
//   },
//   {
//     render: ({ next, previous }) => (
//       <TourBox title="Features">
//         <Text>
//           This section gives you quick access to all main features of the app.
//         </Text>
//         <Text style={{ marginTop: 10 }}>
//           Tap "Next" to see the navigation bar.
//         </Text>
//         <View style={{ flexDirection: "row", marginTop: 10 }}>
//           <Text
//             style={{ color: "#102363", fontWeight: "bold", marginRight: 20 }}
//             onPress={previous}
//           >
//             Previous
//           </Text>
//           <Text style={{ color: "#102363", fontWeight: "bold" }} onPress={next}>
//             Next
//           </Text>
//         </View>
//       </TourBox>
//     ),
//   },
//   {
//     render: ({ previous, stop }) => (
//       <TourBox title="Navigation Bar">
//         <Text>
//           Use the bottom navigation bar to switch between Home, Contact,
//           Suggestions, and Profile screens.
//         </Text>
//         <View style={{ flexDirection: "row", marginTop: 10 }}>
//           <Text
//             style={{ color: "#102363", fontWeight: "bold", marginRight: 20 }}
//             onPress={previous}
//           >
//             Previous
//           </Text>
//           <Text style={{ color: "#102363", fontWeight: "bold" }} onPress={stop}>
//             Finish
//           </Text>
//         </View>
//       </TourBox>
//     ),
//   },
// ];

const HomeScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
  });
  return (
    <View style={{ flex: 1, marginBottom: "7%" }}>
      <Header />
      <SubHeader />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <MessageRow />
        <FeatureRow data={features} column={3} />
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
