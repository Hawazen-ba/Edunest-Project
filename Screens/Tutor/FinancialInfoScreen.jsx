import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";
import FinanceCard from "../../components/FinanceCard";

const mockInfo = {
  totalEarned: "1200 DT",
  pending: "300 DT",
  lastPayment: "2024-05-10",
  summary:
    "You have received payments for 3 months. 1 month is pending. Please contact the administration for any discrepancies.",
};

const FinancialInfoScreen = () => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    summarySection: {
      marginTop: 24,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 16,
      elevation: 1,
      marginHorizontal: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 6,
    },
    summary: {
      fontSize: 15,
      color: "#333",
      marginTop: 4,
    },
  });
  return (
    <View style={styles.container}>
      <GeneralHeader title="Financial Information" showBackArrow />
      <FinanceCard
        label="Total Earned"
        value={mockInfo.totalEarned}
        valueColor={Colors.primary}
      />
      <FinanceCard
        label="Pending Payments"
        value={mockInfo.pending}
        valueColor={mockInfo.pending > 0 ? "orange" : "green"}
      />
      <FinanceCard
        label="Last Payment Date"
        value={mockInfo.lastPayment}
        valueColor={Colors.tertiary}
      />
      <View style={styles.summarySection}>
        <Text style={styles.label}>Summary:</Text>
        <Text style={styles.summary}>{mockInfo.summary}</Text>
      </View>
    </View>
  );
};

export default FinancialInfoScreen;
