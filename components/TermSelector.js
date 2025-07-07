import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import useColors from "../assets/styles/colors";

const terms = [
  { key: "first", label: "First Term" },
  { key: "second", label: "Second Term" },
];

const TermSelector = ({ selectedTerm, onSelect }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 10,
      gap: 12,
    },
    button: {
      paddingVertical: 5,
      paddingHorizontal: 22,
      marginHorizontal: 4,
      elevation: 2,
    },
    buttonSelected: {
      color: Colors.tertiary,
    },
    buttonText: {
      color: Colors.primary,
      fontWeight: "500",
      fontSize: 16,
    },
    buttonTextSelected: {
      color: Colors.tertiary,
    },
  });
  return (
    <View style={styles.row}>
      {terms.map((term) => (
        <TouchableOpacity
          key={term.key}
          style={[
            styles.button,
            selectedTerm === term.key && styles.buttonSelected,
          ]}
          onPress={() => onSelect(term.key)}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.buttonText,
              selectedTerm === term.key && styles.buttonTextSelected,
            ]}
          >
            {term.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TermSelector;
