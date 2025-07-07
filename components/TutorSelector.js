import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TutorSelector = ({ tutors, onSelect, onBack, Colors }) => {
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
    itemText: { color: Colors.text, fontSize: 16, fontWeight: "500" },
    backRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    backText: {
      color: Colors.subtitle,
      fontWeight: "500",
      fontSize: 16,
      marginLeft: 6,
    },
    content: {
      padding: 20,
    },
  });
  return (
    <View style={styles.content}>
      <View style={styles.backRow}>
        <TouchableOpacity
          onPress={onBack}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="arrow-back" size={22} color={Colors.subtitle} />
          <Text style={styles.backText}>Back to Subjects</Text>
        </TouchableOpacity>
      </View>
      {tutors.map((tutor) => (
        <TouchableOpacity
          key={tutor.name}
          style={styles.item}
          onPress={() => onSelect(tutor)}
        >
          <Text style={styles.itemText}>{tutor.name}</Text>
          <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TutorSelector;
