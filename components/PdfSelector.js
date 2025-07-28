import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  Alert,
  Linking,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";

const PdfSelector = ({ pdf, onUpload, colors }) => {
  const styles = StyleSheet.create({
    pdfButton: {
      backgroundColor: "#102363",
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      marginBottom: 10,
    },
    pdfButtonText: {
      color: "#fff",
      fontSize: 16,
    },
    fileRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    fileLabel: {
      fontWeight: "bold",
      color: "#4caf50",
      paddingRight: 5,
    },
    fileName: {
      color: colors.primary,
      fontSize: 16,
      textDecorationLine: "underline",
    },
  });

  const handleOpenFile = async () => {
    if (!pdf) return;

    try {
      if (Platform.OS === "android") {
        const permissions =
          await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
        if (!permissions.granted) {
          Alert.alert(
            "Permission required",
            "Please grant storage access to open the file"
          );
          return;
        }

        const newUri = await FileSystem.StorageAccessFramework.copyAsync({
          from: pdf.uri,
          to: `${permissions.directoryUri}/${pdf.name}`,
        });
        await shareAsync(newUri);
      } else {
        const canOpen = await Linking.canOpenURL(pdf.uri);
        if (canOpen) {
          await Linking.openURL(pdf.uri);
        } else {
          await shareAsync(pdf.uri);
        }
      }
    } catch (error) {
      console.error("Error opening file:", error);
      Alert.alert("Error", "Could not open the file.");
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.pdfButton} onPress={onUpload}>
        <Text style={styles.pdfButtonText}>
          {pdf ? "Change PDF" : "Select PDF"}
        </Text>
      </TouchableOpacity>

      {pdf && (
        <View style={styles.fileRow}>
          <Text style={styles.fileLabel}>Selected:</Text>
          <TouchableOpacity onPress={handleOpenFile}>
            <Text style={styles.fileName}>{pdf.name}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default PdfSelector;
