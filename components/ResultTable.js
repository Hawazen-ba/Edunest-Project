// components/ResultsTable.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useColors from "../assets/styles/colors";

const ResultsTable = ({ results }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    table: {
      margin: 16,
      backgroundColor: "#fff",
      borderRadius: 8,
      elevation: 2,
      borderColor: Colors.primary,
      borderWidth: 2,
    },
    headerRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#eee",
      padding: 12,
    },
    headerCell: {
      flex: 1,
      fontWeight: "bold",
      fontSize: 16,
    },
    row: {
      flexDirection: "row",
      padding: 12,
      borderBottomWidth: 1,
      borderColor: "#f0f0f0",
    },
    cell: { flex: 1, fontSize: 15 },
  });
  return (
    <View style={styles.table}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Subject</Text>
        <Text style={styles.headerCell}>Grade</Text>
        <Text style={styles.headerCell}>Observation</Text>
      </View>
      {results.map((res, idx) => (
        <View key={idx} style={styles.row}>
          <Text style={styles.cell}>{res.subject}</Text>
          <Text style={styles.cell}>{res.grade}</Text>
          <Text style={styles.cell}>{res.remarks}</Text>
        </View>
      ))}
    </View>
  );
};

export default ResultsTable;
