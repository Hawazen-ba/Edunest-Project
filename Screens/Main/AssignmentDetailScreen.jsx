import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import * as DocumentPicker from "expo-document-picker";
import { shareAsync } from "expo-sharing";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Ionicons } from "@expo/vector-icons";
import useColors from "../../assets/styles/colors";

const AssignmentDetailScreen = ({ route }) => {
  const { assignment } = route.params;
  const [uploadedFile, setUploadedFile] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [comment, setComment] = useState("");

  const handleDownload = async () => {
    const downloadResumable = FileSystem.createDownloadResumable(
      assignment.pdfUrl,
      FileSystem.documentDirectory + `${assignment.name}.pdf`
    );
    const { uri } = await downloadResumable.downloadAsync();
    await Sharing.shareAsync(uri);
  };

  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      console.log("DocumentPicker result:", result);
      setUploadedFile(result.assets[0]);
    } catch (e) {
      Alert.alert("Failed uploading work");
    }
  };
  const handleOpenFile = async () => {
    if (!uploadedFile) return;

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
          from: uploadedFile.uri,
          to: permissions.directoryUri + `/${uploadedFile.name}`,
        });
        await shareAsync(newUri);
      } else {
        const canOpen = await Linking.canOpenURL(uploadedFile.uri);
        if (canOpen) {
          await Linking.openURL(uploadedFile.uri);
        } else {
          await shareAsync(uploadedFile.uri);
        }
      }
    } catch (error) {
      console.error("Error opening file:", error);
      Alert.alert(
        "Error",
        "Could not open the file. You may need an appropriate app to view this file type."
      );
    }
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: { flex: 1 },
    infosHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: { fontSize: 24, fontWeight: 600, marginBottom: 16 },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 8,
      fontStyle: "italic",
    },
    value: { fontWeight: "normal", fontStyle: "normal" },
    uploadBtn: {
      backgroundColor: Colors.primary,
      padding: 12,
      borderRadius: 6,
      marginVertical: 24,
      alignItems: "center",
    },
    uploadBtnText: { color: "#fff", fontWeight: "bold" },
    fileName: {
      marginTop: 8,
      color: "#4caf50",
      padding: 10,
      fontWeight: 600,
    },
    content: {
      padding: 16,
      backgroundColor: Colors.background,
    },
    nameFile: {
      color: Colors.primary,
      fontSize: 17,
      textDecorationLine: "underline",
      paddingLeft: 5,
      fontWeight: "normal",
      paddingTop: 13,
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
    uploaded: {
      flexDirection: "row",
      alignItems: "center",
    },
    infos: {
      backgroundColor: "white",
      borderColor: Colors.primary,
      borderWidth: 2,
      borderRadius: 15,
      padding: 16,
    },
    commentLabel: {
      marginTop: 12,
      fontSize: 15,
      fontWeight: "bold",
      color: Colors.primary,
    },
    commentInput: {
      borderColor: Colors.primary,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginTop: 6,
      backgroundColor: "#f8f8f8",
      fontSize: 15,
      minHeight: 50,
      textAlignVertical: "top",
    },
  });
  return (
    <View style={styles.container}>
      <GeneralHeader title={assignment.title} showBackArrow={true} />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.infos}>
              <View style={styles.infosHeader}>
                <Text style={styles.title}>{assignment.title}</Text>
                <TouchableOpacity
                  style={styles.downloadBtn}
                  onPress={handleDownload}
                >
                  <Ionicons name="download-outline" size={24} color="#fff" />
                  <Text style={styles.downloadText}>Download</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.label}>
                Subject: <Text style={styles.value}>{assignment.subject}</Text>
              </Text>
              <Text style={styles.label}>
                Teacher: <Text style={styles.value}>{assignment.teacher}</Text>
              </Text>
              <Text style={styles.label}>
                Description:{" "}
                <Text style={styles.value}>{assignment.description}</Text>
              </Text>
            </View>
            {!completed && (
              <TouchableOpacity style={styles.uploadBtn} onPress={handleUpload}>
                <Text style={styles.uploadBtnText}>
                  {uploadedFile ? "Change File" : "Upload Work"}
                </Text>
              </TouchableOpacity>
            )}
            {uploadedFile && (
              <View style={{ marginBottom: 16 }}>
                <View style={styles.uploaded}>
                  <Text style={styles.fileName}>Uploaded:</Text>
                  <TouchableOpacity onPress={handleOpenFile}>
                    <Text style={styles.nameFile}>{uploadedFile.name}</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.commentLabel}>Add a note (optional):</Text>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write a note about your work..."
                  value={comment}
                  onChangeText={setComment}
                  multiline
                  numberOfLines={3}
                  maxLength={300}
                />
              </View>
            )}

            <Button
              title={completed ? "Assignment Completed" : "Mark as Completed"}
              onPress={() => setCompleted(true)}
              disabled={completed}
              color={completed ? "#4caf50" : Colors.tertiary}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AssignmentDetailScreen;
