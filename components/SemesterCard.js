import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useColors from "../assets/styles/colors";

const SemesterCard = ({ semester, paid, remaining, total, period }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 18,
      marginBottom: 18,
      borderColor: Colors.primary,
      borderWidth: 2,
    },
    semester: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: Colors.primary,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 6,
    },
    label: {
      fontSize: 15,
      color: Colors.subtitle,
    },
    paid: {
      fontSize: 15,
      color: Colors.tertiary,
      fontWeight: "bold",
    },
    remaining: {
      fontSize: 15,
      color: Colors.color2,
      fontWeight: "bold",
    },
    total: {
      fontSize: 15,
      color: Colors.secondary,
      fontWeight: "bold",
    },
    period: {
      fontSize: 15,
      color: "#6c757d",
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.semester}>{semester}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Paid:</Text>
        <Text style={styles.paid}>{paid} USD</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Remaining:</Text>
        <Text style={styles.remaining}>{remaining} USD</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.total}>{total} USD</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Period:</Text>
        <Text style={styles.period}>{period}</Text>
      </View>
    </View>
  );
};

export default SemesterCard;
