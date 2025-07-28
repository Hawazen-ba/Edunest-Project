import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import Button from "./Button";

const AssignmentForm = ({
  name,
  title,
  setName,
  description,
  setDescription,
  showDescription = true,
  namePlaceholder = "Assignment Name",
  descriptionPlaceholder = "Description",
}) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 10,
      marginBottom: 15,
      fontSize: 16,
      backgroundColor: "#f9f9f9",
    },
  });

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={namePlaceholder}
        value={name}
        onChangeText={setName}
      />
      {showDescription && (
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder={descriptionPlaceholder}
          value={description}
          onChangeText={setDescription}
          multiline
        />
      )}
    </View>
  );
};

export default AssignmentForm;
