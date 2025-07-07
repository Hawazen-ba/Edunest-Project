import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SubjectSelector = ({ subjects, onSelect, Colors }) => {
  const styles = StyleSheet.create({
    item: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 12,
      paddingVertical: 17,
      backgroundColor: "white",
      marginVertical: 5,
      borderRadius: 8,
    },
    content: {
      padding: 20,
    },
    itemText: { color: Colors.text, fontSize: 16, fontWeight: "500" },
  });
  return (
    <View style={styles.content}>
      {subjects.map((subject) => (
        <TouchableOpacity
          key={subject}
          style={styles.item}
          onPress={() => onSelect(subject)}
        >
          <Text style={styles.itemText}>{subject}</Text>
          <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SubjectSelector;
