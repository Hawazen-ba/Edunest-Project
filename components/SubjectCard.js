import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import useColors from "../assets/styles/colors";

const SubjectCard = ({ subject, onPress }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    card: {
      borderColor: Colors.primary,
      borderWidth: 2,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 20,
      marginBottom: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.title}>{subject.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubjectCard;
