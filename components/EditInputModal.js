import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import useColors from "../assets/styles/colors";

const EditInputModal = ({
  visible,
  label,
  value,
  onCancel,
  onConfirm,
  secure = false,
}) => {
  const [input, setInput] = useState(value);

  useEffect(() => {
    setInput(value);
  }, [value, visible]);

  const handleSave = () => {
    onConfirm(input);
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    modal: {
      justifyContent: "center",
      marginBottom: 200,
    },
    sheet: {
      backgroundColor: "#fff",
      borderRadius: 24,
      padding: 24,
      paddingBottom: Platform.OS === "ios" ? 60 : 24,
      alignItems: "center",
    },
    title: {
      fontSize: 22,
      fontWeight: "500",
      color: "#222",
      marginBottom: 18,
    },
    divider: {
      height: 1,
      backgroundColor: "#eee",
      alignSelf: "stretch",
      marginBottom: 30,
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: Colors.primary,
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      marginBottom: 24,
      color: "#222",
    },
    actions: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
    cancelBtn: {
      flex: 1,
      backgroundColor: "#fff",
      borderColor: Colors.primary,
      borderWidth: 1.5,
      borderRadius: 22,
      paddingVertical: 12,
      marginRight: 8,
      alignItems: "center",
    },
    saveBtn: {
      flex: 1,
      backgroundColor: Colors.primary,
      borderRadius: 22,
      paddingVertical: 12,
      marginLeft: 8,
      alignItems: "center",
    },
    cancelText: {
      color: Colors.primary,
      fontWeight: "600",
      fontSize: 15,
    },
    saveText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 15,
    },
  });
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onCancel}
      style={styles.modal}
      backdropOpacity={0.25}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
    >
      <View style={styles.sheet}>
        <Text style={styles.title}>Edit {label}</Text>
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder={`Enter new ${label.toLowerCase()}`}
          secureTextEntry={secure}
          autoFocus
        />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditInputModal;
