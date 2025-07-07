// Screens/ResultsScreen.jsx
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import ChildSelector from "../../components/ChildSelector";
import ResultsTable from "../../components/ResultTable";
import GeneralHeader from "../../components/GeneralHeader";
import TermSelector from "../../components/TermSelector";
import useColors from "../../assets/styles/colors";

const children = [
  {
    id: "1",
    name: "Ali",
    results: [
      {
        subject: "Math",
        grade: "A",
        term: "first",
        remarks: "Excellent performance in Math! Keep up the great work.",
      },
      {
        subject: "English",
        grade: "B+",
        term: "first",
        remarks: "Good effort in English. Aim for more consistency.",
      },
      {
        subject: "Math",
        grade: "A-",
        term: "second",
        remarks:
          "Slight dip from the first term, but still a strong performance.",
      },
      {
        subject: "English",
        grade: "A",
        term: "second",
        remarks: "Impressive improvement in English! Well done!",
      },
    ],
  },
  {
    id: "2",
    name: "Sara",
    results: [
      {
        subject: "Math",
        grade: "B",
        term: "first",
        remarks: "Decent performance, but there's room for improvement.",
      },
      {
        subject: "English",
        grade: "A",
        term: "first",
        remarks: "Outstanding work in English! Keep it up.",
      },
      {
        subject: "Math",
        grade: "B+",
        term: "second",
        remarks: "Slight improvement in Math—keep striving for more.",
      },
      {
        subject: "English",
        grade: "A-",
        term: "second",
        remarks: "A small drop, but still a strong grade.",
      },
    ],
  },
];

const ResultsScreen = () => {
  const [selectedChildId, setSelectedChildId] = useState(children[0].id);
  const [selectedTerm, setSelectedTerm] = useState("first");

  const selectedChild = children.find((child) => child.id === selectedChildId);
  const filteredResults = selectedChild.results.filter(
    (res) => res.term === selectedTerm
  );
  const Colors = useColors();
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    container: {
      paddingVertical: 15,
      flexGrow: 1,
    },
  });
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle={"light-content"} />
      <GeneralHeader title={"Results"} showBackArrow={true} />
      <ScrollView contentContainerStyle={styles.container}>
        <ChildSelector
          data={children}
          selectedValue={selectedChildId}
          onSelect={setSelectedChildId}
        />
        <TermSelector selectedTerm={selectedTerm} onSelect={setSelectedTerm} />
        <ResultsTable results={filteredResults} />
      </ScrollView>
    </View>
  );
};

export default ResultsScreen;
