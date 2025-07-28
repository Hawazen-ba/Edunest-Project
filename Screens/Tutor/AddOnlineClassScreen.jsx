import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Keyboard,
  Alert,
} from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useColors from "../../assets/styles/colors";
import { TouchableWithoutFeedback } from "react-native";
import Button from "../../components/Button";
import AssignmentList from "../../components/AssignmentList";

const AddOnlineClassScreen = () => {
  const [name, setName] = useState("");
  const [teamsLink, setTeamsLink] = useState("");
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const [linkError, setLinkError] = useState("");

  const handleConfirmDate = (selectedDate) => {
    const newDate = new Date(date);
    newDate.setFullYear(selectedDate.getFullYear());
    newDate.setMonth(selectedDate.getMonth());
    newDate.setDate(selectedDate.getDate());
    setDate(newDate);
    setDatePickerVisible(false);
  };

  const handleConfirmTime = (selectedTime) => {
    const newDate = new Date(date);
    newDate.setHours(selectedTime.getHours());
    newDate.setMinutes(selectedTime.getMinutes());
    setDate(newDate);
    setTimePickerVisible(false);
  };

  const isValidTeamsLink = (link) => {
    // Basic regex for Teams meeting links
    return /^https?:\/\/(www\.)?teams\.microsoft\.com\/.+/.test(link);
  };

  const handleSubmit = () => {
    setLinkError("");
    if (!name) {
      alert("Please enter a class title.");
      return;
    }
    if (!isValidTeamsLink(teamsLink)) {
      setLinkError("Please enter a valid Microsoft Teams meeting link.");
      return;
    }
    setCourses([...courses, { name }]);
    setName("");
    setTeamsLink("");
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
            setCourses(courses.filter((_, i) => i !== idx));
          },
        },
      ]
    );
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
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
      padding: 12,
      marginBottom: 15,
      fontSize: 16,
      backgroundColor: "#f9f9f9",
    },
    submitButton: {
      backgroundColor: "#4CAF50",
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
    },
    submitButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    content: {
      paddingHorizontal: 20,
    },
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <GeneralHeader title="Add Online Class" showBackArrow />
        <View style={styles.content}>
          <Text style={styles.title}>Add Online Class</Text>

          <TextInput
            style={styles.input}
            placeholder="Class Title"
            value={name}
            onChangeText={setName}
          />

          <TouchableOpacity
            style={styles.input}
            onPress={() => setDatePickerVisible(true)}
          >
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.input}
            onPress={() => setTimePickerVisible(true)}
          >
            <Text>
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Teams Link"
            value={teamsLink}
            onChangeText={setTeamsLink}
            autoCapitalize="none"
            keyboardType="url"
          />
          {linkError ? (
            <Text style={{ color: "red", marginBottom: 10, marginLeft: 10 }}>
              {linkError}
            </Text>
          ) : null}

          <Button
            func={handleSubmit}
            label={"Add Class"}
            textColor={"white"}
            buttonColor={Colors.color3}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={() => setDatePickerVisible(false)}
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={() => setTimePickerVisible(false)}
          />
          <AssignmentList
            assignments={courses}
            onDelete={handleDelete}
            icon={require("../../assets/online-learning.png")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddOnlineClassScreen;
