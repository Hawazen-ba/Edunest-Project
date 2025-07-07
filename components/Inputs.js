// components/FormInput.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useColors from "../assets/styles/colors";

const Inputs = ({
  label,
  value,
  onChangeText,
  onBlur,
  placeholder,
  placeholderTextColor = "rgba(255, 255, 255, 0.7)",
  keyboardType = "default",
  secureTextEntry = false,
  showPasswordToggle = false,
  onTogglePassword,
  error,
  touched,
  style,
  textColor = "white",
  borderColor = "white",
}) => {
  const isPassword = showPasswordToggle || secureTextEntry;
  const showError = touched && error;
  const Colors = useColors();
  const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 20,
    },
    inputLabel: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 5,
    },
    textInput: {
      borderBottomWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 16,
      fontSize: 16,
    },
    passwordContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderRadius: 12,
    },
    passwordInput: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
      fontSize: 16,
    },
    eyeIcon: {
      paddingHorizontal: 16,
    },
    errorInput: {
      borderColor: Colors.error,
    },
    errorText: {
      color: Colors.error,
      fontSize: 12,
      marginTop: 4,
    },
    successInput: {
      borderColor: Colors.success,
    },
  });
  return (
    <View style={[styles.inputContainer, style]}>
      {label && (
        <Text style={[styles.inputLabel, { color: textColor }]}>{label}</Text>
      )}

      {isPassword ? (
        <View
          style={[
            styles.passwordContainer,
            { borderColor: borderColor },
            showError ? styles.errorInput : null,
            touched && !error ? styles.successInput : null,
          ]}
        >
          <TextInput
            style={[styles.passwordInput, { color: textColor }]}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
          />
          {showPasswordToggle && (
            <TouchableOpacity onPress={onTogglePassword} style={styles.eyeIcon}>
              <Ionicons
                name={secureTextEntry ? "eye-outline" : "eye-off-outline"}
                size={20}
                color={textColor}
              />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TextInput
          style={[
            styles.textInput,
            { color: textColor, borderColor: borderColor },
            showError ? styles.errorInput : null,
            touched && !error ? styles.successInput : null,
          ]}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      )}

      {showError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Inputs;
