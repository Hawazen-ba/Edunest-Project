import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";

const Assignments = [
  {
    id: "1",
    title: "Math Homework 1",
    subject: "Math",
    teacher: "Mr. Smith",
    description: "Solve exercises 1-10 on page 23.",
    pdfUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "2",
    title: "Science Project",
    subject: "Science",
    teacher: "Ms. Johnson",
    description: "Prepare a poster about the solar system.",
    pdfUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    id: "3",
    title: "History Essay",
    subject: "History",
    teacher: "Mr. Brown",
    description: "Write an essay on World War II.",
    pdfUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

const AssignmentsScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.assignment}
      onPress={() =>
        navigation.navigate("AssignmentDetail", { assignment: item })
      }
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>
        {item.subject} - {item.teacher}
      </Text>
    </TouchableOpacity>
  );
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      alignSelf: "center",
    },
    assignment: {
      padding: 16,
      borderWidth: 1,
      borderColor: Colors.primary,
      marginVertical: 10,
      borderRadius: 15,
    },
    title: { fontSize: 18, fontWeight: "bold" },
    subtitle: { fontSize: 14, color: "#666" },
    content: { padding: 16 },
  });
  return (
    <View style={styles.container}>
      <GeneralHeader title={"Assignments"} showBackArrow={true} />
      <View style={styles.content}>
        <Text style={styles.header}> This week's assignments</Text>
        <FlatList
          data={Assignments}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default AssignmentsScreen;
