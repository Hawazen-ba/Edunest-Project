import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import { useNavigation } from "@react-navigation/native";
import FinanceCard from "../../components/FinanceCard";
import Button from "../../components/Button";
import useColors from "../../assets/styles/colors";

const mockFinancialData = {
  isPaid: false,
  isReady: true,
  paidMonths: ["January", "February", "March"],
  unpaidMonths: ["April", "May", "June"],
};

const FinancialScreen = () => {
  const [financial, setFinancial] = useState(mockFinancialData);
  const navigation = useNavigation();
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    content: {
      backgroundColor: "white",
      padding: 20,
      margin: 20,
      borderRadius: 20,
    },
    section: {
      marginBottom: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    label: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 6,
    },
    value: {
      fontSize: 16,
      marginBottom: 6,
    },
    month: {
      fontSize: 16,
      marginLeft: 12,
      marginBottom: 2,
    },
    reportButton: {
      backgroundColor: "#4A90E2",
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 20,
    },
    reportButtonText: {
      color: "#fff",
      fontSize: 17,
      fontWeight: "bold",
    },
    button: {
      marginHorizontal: 20,
    },
  });
  return (
    <View style={styles.container}>
      <GeneralHeader title="Financial Status" showBackArrow />
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>Payment Status:</Text>
          <Text
            style={[
              styles.value,
              { color: financial.isPaid ? Colors.color3 : Colors.color2 },
            ]}
          >
            {financial.isPaid ? "Paid" : "Not Paid"}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Money Ready to Withdraw:</Text>
          <Text
            style={[
              styles.value,
              { color: financial.isReady ? Colors.tertiary : "orange" },
            ]}
          >
            {financial.isReady ? "Ready" : "Not Ready"}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Months Paid For:</Text>
          <Text
            style={[
              styles.month,
              { color: Colors.tertiary, flex: 1, flexWrap: "wrap" },
            ]}
          >
            {financial.paidMonths.length > 0
              ? financial.paidMonths.join(", ")
              : "None"}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Months Not Paid For:</Text>
          <Text
            style={[
              styles.month,
              { color: Colors.color2, flex: 1, flexWrap: "wrap" },
            ]}
          >
            {financial.unpaidMonths.length > 0
              ? financial.unpaidMonths.join(", ")
              : "None"}
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          func={() => navigation.navigate("FinancialInfo")}
          textColor={"white"}
          buttonColor={Colors.primary}
          label={"View Yearly Report"}
        />
      </View>
    </View>
  );
};

export default FinancialScreen;
