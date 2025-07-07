import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ func, buttonColor, textColor, label }) => {
  const styles = StyleSheet.create({
    signInButton: {
      backgroundColor: buttonColor,
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    signInButtonText: {
      color: textColor,
      fontSize: 18,
      fontWeight: "600",
    },
  });

  return (
    <TouchableOpacity style={styles.signInButton} onPress={func}>
      <Text style={styles.signInButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
