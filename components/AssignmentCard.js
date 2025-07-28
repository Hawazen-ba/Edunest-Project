import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import useColors from "../assets/styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const AssignmentCard = ({ name, description, leftIcon, onDelete }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 16,
      marginBottom: 14,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
      flexDirection: "row",
      alignItems: "center",
    },
    leftSection: {
      marginRight: 14,
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
      color: Colors.primary,
    },
    description: {
      fontSize: 15,
      color: Colors.secondary,
    },
    rightSection: {
      marginLeft: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    trashIcon: {
      padding: 6,
    },
  });
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        {leftIcon && (
          <Image source={leftIcon} style={{ width: 40, height: 40 }} />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {onDelete && (
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.trashIcon} onPress={onDelete}>
            <Icon name="trash" size={22} color={Colors.color2} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AssignmentCard;
