import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const CourseMaterialCard = ({ material }) => {
  const handleDownload = async () => {
    const downloadResumable = FileSystem.createDownloadResumable(
      material.pdfUrl,
      FileSystem.documentDirectory + `${material.name}.pdf`
    );
    const { uri } = await downloadResumable.downloadAsync();
    await Sharing.shareAsync(uri);
    alert("Document downloaded successfully.");
  };

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name="document-text-outline"
          size={32}
          color="#555"
          style={{ marginRight: 12 }}
        />
        <View>
          <Text style={styles.title}>{material.name}</Text>
          <Text style={styles.teacher}>Teacher: {material.teacher}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
        <Ionicons name="download-outline" size={24} color="#fff" />
        <Text style={styles.downloadText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  teacher: {
    fontSize: 14,
    color: "#555",
  },
  downloadBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  downloadText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "bold",
  },
});
export default CourseMaterialCard;
