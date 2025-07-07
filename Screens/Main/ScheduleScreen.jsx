import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import ChildSelector from "../../components/ChildSelector";
import GeneralHeader from "../../components/GeneralHeader";
import DaySelector from "../../components/DaySelector";
import useColors from "../../assets/styles/colors";

const children = [
  {
    id: "1",
    name: "Ali",
    schedule: [
      {
        day: "Monday",
        lessons: [
          { name: "Math", time: "08:00-09:00" },
          { name: "English", time: "09:00-10:00" },
          { name: "Science", time: "10:15-11:15" },
          { name: "PE", time: "11:30-12:30" },
        ],
      },
      {
        day: "Tuesday",
        lessons: [
          { name: "History", time: "08:00-09:00" },
          { name: "Math", time: "09:00-10:00" },
          { name: "Art", time: "10:15-11:15" },
          { name: "Music", time: "11:30-12:30" },
        ],
      },
      {
        day: "Wednesday",
        lessons: [
          { name: "Science", time: "08:00-09:00" },
          { name: "Math", time: "09:00-10:00" },
          { name: "English", time: "10:15-11:15" },
          { name: "PE", time: "11:30-12:30" },
        ],
      },
      {
        day: "Thursday",
        lessons: [
          { name: "Math", time: "08:00-09:00" },
          { name: "Geography", time: "09:00-10:00" },
          { name: "Science", time: "10:15-11:15" },
          { name: "Art", time: "11:30-12:30" },
        ],
      },
      {
        day: "Friday",
        lessons: [
          { name: "English", time: "08:00-09:00" },
          { name: "Math", time: "09:00-10:00" },
          { name: "History", time: "10:15-11:15" },
          { name: "PE", time: "11:30-12:30" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Sara",
    schedule: [
      {
        day: "Monday",
        lessons: [
          { name: "Science", time: "08:00-09:00" },
          { name: "Math", time: "09:00-10:00" },
          { name: "Art", time: "10:15-11:15" },
          { name: "PE", time: "11:30-12:30" },
        ],
      },
      {
        day: "Tuesday",
        lessons: [
          { name: "English", time: "08:00-09:00" },
          { name: "Math", time: "09:00-10:00" },
          { name: "Music", time: "10:15-11:15" },
          { name: "History", time: "11:30-12:30" },
        ],
      },
      {
        day: "Wednesday",
        lessons: [
          { name: "Math", time: "08:00-09:00" },
          { name: "Science", time: "09:00-10:00" },
          { name: "English", time: "10:15-11:15" },
          { name: "PE", time: "11:30-12:30" },
        ],
      },
      {
        day: "Thursday",
        lessons: [
          { name: "Art", time: "08:00-09:00" },
          { name: "Math", time: "09:00-10:00" },
          { name: "Geography", time: "10:15-11:15" },
          { name: "Science", time: "11:30-12:30" },
        ],
      },
      {
        day: "Friday",
        lessons: [
          { name: "Math", time: "08:00-09:00" },
          { name: "English", time: "09:00-10:00" },
          { name: "History", time: "10:15-11:15" },
          { name: "PE", time: "11:30-12:30" },
        ],
      },
    ],
  },
];

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const ScheduleScreen = () => {
  const [selectedChildId, setSelectedChildId] = useState(children[0].id);
  const selectedChild = children.find((child) => child.id === selectedChildId);
  const schedule = WEEKDAYS.map(
    (day) =>
      selectedChild.schedule.find((d) => d.day === day) || { day, lessons: [] }
  );
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const selectedDay = schedule[selectedDayIdx];
  const Colors = useColors();
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    container: {
      paddingVertical: 15,
      flexGrow: 1,
    },
    table: {
      margin: 16,
      backgroundColor: "#fff",
      borderRadius: 8,
      elevation: 2,
      borderColor: Colors.primary,
      borderWidth: 2,
      minWidth: 320,
    },
    tableScroll: {
      minHeight: 500,
    },
    headerRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "#eee",
      padding: 12,
    },
    headerCell: {
      flex: 1,
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
      color: "#fff",
      padding: 8,
      borderRadius: 6,
      marginHorizontal: 2,
    },
    dayHeader: {
      backgroundColor: Colors.primary,
      color: "#fff",
    },
    lessonHeader: {
      backgroundColor: Colors.primary,
      color: "#fff",
    },
    row: {
      flexDirection: "row",
      padding: 12,
      borderBottomWidth: 1,
      borderColor: "#f0f0f0",
      alignItems: "center",
    },
    cell: {
      flex: 1,
      fontSize: 15,
      textAlign: "center",
      padding: 8,
      borderRadius: 6,
      backgroundColor: "#f9f9f9",
      marginHorizontal: 2,
    },
    lessonList: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginLeft: 8,
    },
    lessonCell: {
      backgroundColor: "#f9f9f9",
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginRight: 6,
      marginBottom: 4,
      fontSize: 14,
      minWidth: 80,
      alignItems: "center",
    },
    lessonNamePaysage: {
      color: Colors.primary,
      fontWeight: "bold",
      fontSize: 14,
      textAlign: "center",
    },
    lessonTimePaysage: {
      color: Colors.secondary,
      fontSize: 12,
      fontStyle: "italic",
      textAlign: "center",
    },
    tipText: {
      textAlign: "center",
      color: Colors.subtitle,
      marginTop: 10,
      fontStyle: "italic",
    },
    daySelectorRow: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 10,
      gap: 12,
    },
    daySelectorScroll: {
      marginBottom: 4,
    },
    dayButton: {
      backgroundColor: "#fff",
      borderColor: Colors.primary,
      borderWidth: 2,
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 22,
      marginHorizontal: 4,
    },
    dayButtonSelected: {
      backgroundColor: Colors.primary,
    },
    dayButtonText: {
      color: Colors.primary,
      fontWeight: "600",
      fontSize: 16,
    },
    dayButtonTextSelected: {
      color: "#fff",
    },
    lessonsContainer: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 18,
      marginTop: 10,
      elevation: 2,
      borderColor: Colors.primary,
      borderWidth: 1,
      marginHorizontal: 10,
    },
    selectedDayTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors.primary,
      marginBottom: 12,
      textAlign: "center",
    },
    lessonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderColor: "#f0f0f0",
    },
    lessonName: {
      color: Colors.primary,
      fontWeight: "bold",
      fontSize: 16,
    },
    lessonTime: {
      color: Colors.subtitle,
      fontSize: 15,
      fontStyle: "italic",
    },
  });

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <GeneralHeader title={"Schedule"} showBackArrow={true} />
      <ScrollView contentContainerStyle={styles.container}>
        <ChildSelector
          data={children}
          selectedValue={selectedChildId}
          onSelect={setSelectedChildId}
        />
        <DaySelector
          days={WEEKDAYS}
          selectedIdx={selectedDayIdx}
          onSelect={setSelectedDayIdx}
        />
        <View style={styles.lessonsContainer}>
          <Text style={styles.selectedDayTitle}>{selectedDay.day}</Text>
          {selectedDay.lessons.map((lesson, idx) => (
            <View style={styles.lessonRow} key={idx}>
              <Text style={styles.lessonName}>{lesson.name}</Text>
              <Text style={styles.lessonTime}>{lesson.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ScheduleScreen;
