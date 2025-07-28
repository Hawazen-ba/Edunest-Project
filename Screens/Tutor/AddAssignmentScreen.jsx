import React, { useState } from "react";
import { View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";
import AssignmentForm from "../../components/AssignmentForm";
import PdfSelector from "../../components/PdfSelector";
import AssignmentList from "../../components/AssignmentList";
import Button from "../../components/Button";

const AddAssignmentScreen = () => {
  const Colors = useColors();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState(null);
  const [assignments, setAssignments] = useState([]);

  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.assets && result.assets.length > 0) {
        setPdf(result.assets[0]);
      }
    } catch (e) {
      Alert.alert("Failed uploading file");
    }
  };

  const handleSubmit = () => {
    if (!name || !description) {
      alert("Please enter both name and description.");
      return;
    }

    setAssignments([...assignments, { name, description, pdf }]);
    setName("");
    setDescription("");
    setPdf(null);
  };

  const handleDelete = (idx) => {
    Alert.alert(
      "Delete Assignment",
      "Are you sure you want to delete this assignment?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setAssignments(assignments.filter((_, i) => i !== idx));
          },
        },
      ]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <GeneralHeader title="Add Assignment" showBackArrow />
        <View
          style={{ flex: 1, padding: 20, backgroundColor: Colors.background }}
        >
          <AssignmentForm
            name={name}
            title="Add New Assignment"
            setName={setName}
            description={description}
            setDescription={setDescription}
            showDescription={true}
            namePlaceholder="Assignment name"
            descriptionPlaceholder="Description"
          />

          <PdfSelector pdf={pdf} onUpload={handleUpload} colors={Colors} />
          <Button
            func={handleSubmit}
            label={"Add Assignment"}
            buttonColor={Colors.tertiary}
            textColor={"white"}
          />
          <AssignmentList
            assignments={assignments}
            onDelete={handleDelete}
            icon={require("../../assets/assignment.png")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddAssignmentScreen;
