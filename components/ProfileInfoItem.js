import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileInfoItem = ({ label, value, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.left}>
        <Ionicons name={icon} size={22} color="#102363" style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 16,
    marginHorizontal: 20,
    backgroundColor: "#fff",
  },
  left: { flexDirection: "row", alignItems: "center" },
  icon: { marginRight: 12 },
  label: { fontWeight: "bold", color: "#102363", fontSize: 16 },
  value: { color: "#444", fontSize: 16 },
});
export default ProfileInfoItem;
