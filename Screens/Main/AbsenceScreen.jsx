import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import ChildSelector from "../../components/ChildSelector";
import AbsenceCard from "../../components/AbsenceCard";
import useColors from "../../assets/styles/colors";

const childrenData = [
  { id: "1", name: "Ali" },
  { id: "2", name: "Sara" },
];

const allLessons = [
  { name: "Math", time: "08:00 - 09:00" },
  { name: "Science", time: "09:15 - 10:15" },
  { name: "History", time: "10:30 - 11:30" },
  { name: "English", time: "11:45 - 12:45" },
];

const initialAbsences = [
  {
    id: "1",
    childId: "1",
    date: "2024-04-10",
    reason: "Sick",
    excused: true,
    lessons: allLessons,
  },
  {
    id: "2",
    childId: "1",
    date: "2024-04-15",
    reason: "Family Emergency",
    excused: true,
    lessons: [allLessons[0], allLessons[2]],
  },
  {
    id: "3",
    childId: "2",
    date: "2024-04-12",
    reason: "Unexcused",
    excused: false,
    lessons: allLessons,
  },
];

const AbsenceScreen = () => {
  const [selectedChild, setSelectedChild] = useState(childrenData[0].id);
  const [absences, setAbsences] = useState(initialAbsences);
  const [modalVisible, setModalVisible] = useState(false);
  const [justificationText, setJustificationText] = useState("");
  const [selectedAbsenceId, setSelectedAbsenceId] = useState(null);

  const filteredAbsences = absences.filter((a) => a.childId === selectedChild);

  const handleJustifyPress = (absenceId) => {
    setSelectedAbsenceId(absenceId);
    setJustificationText("");
    setModalVisible(true);
  };

  const handleJustificationSubmit = () => {
    setAbsences((prevAbsences) =>
      prevAbsences.map((abs) =>
        abs.id === selectedAbsenceId
          ? { ...abs, excused: true, reason: justificationText }
          : abs
      )
    );
    setModalVisible(false);
    setSelectedAbsenceId(null);
    setJustificationText("");
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    empty: {
      textAlign: "center",
      color: Colors.secondary,
      marginTop: 40,
      fontSize: 16,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 24,
      width: "85%",
      alignItems: "center",
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 12,
    },
    input: {
      width: "100%",
      minHeight: 60,
      borderColor: Colors.primary,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginBottom: 16,
      fontSize: 15,
      textAlignVertical: "top",
      backgroundColor: "#f8f8f8",
    },
    submitBtn: {
      backgroundColor: Colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 8,
      marginBottom: 10,
    },
    submitBtnText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
    cancelBtnText: {
      color: Colors.danger,
      fontSize: 15,
      marginTop: 4,
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <GeneralHeader title="Absence Records" showBackArrow={true} />
      <ChildSelector
        data={childrenData}
        selectedValue={selectedChild}
        onSelect={setSelectedChild}
      />
      <FlatList
        data={filteredAbsences}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AbsenceCard
            date={item.date}
            reason={item.reason}
            excused={item.excused}
            lessons={item.lessons}
            allLessonsCount={allLessons.length}
            onJustifyPress={() => handleJustifyPress(item.id)}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <Text style={styles.empty}>No absences for this child.</Text>
        }
      />
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Write Justification</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter justification..."
              value={justificationText}
              onChangeText={setJustificationText}
              multiline
            />
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handleJustificationSubmit}
              disabled={!justificationText.trim()}
            >
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AbsenceScreen;
