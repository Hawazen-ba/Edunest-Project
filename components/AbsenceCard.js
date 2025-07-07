import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useColors from "../assets/styles/colors";

const AbsenceCard = ({
  date,
  reason,
  excused,
  onJustifyPress,
  lessons = [],
  allLessonsCount,
}) => {
  const skippedAll = allLessonsCount && lessons.length === allLessonsCount;
  const Colors = useColors();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 16,
      marginBottom: 14,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    leftSection: {
      flex: 1,
      paddingRight: 10,
    },
    rightSection: {
      minWidth: 100,
      alignItems: "flex-end",
      justifyContent: "flex-start",
    },
    date: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
    },
    reason: {
      fontSize: 15,
      marginBottom: 4,
    },
    excused: {
      fontSize: 15,
      fontWeight: "bold",
    },
    justifyBtn: {
      marginTop: 8,
      backgroundColor: Colors.primary,
      paddingVertical: 8,
      borderRadius: 6,
      alignItems: "center",
      paddingHorizontal: 12,
      alignSelf: "flex-start",
    },
    justifyBtnText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 15,
    },
    lessonsContainer: {
      alignItems: "flex-end",
    },
    lessonRow: {
      flexDirection: "column",
      alignItems: "flex-end",
      marginBottom: 4,
    },
    lessonName: {
      fontSize: 14,
      fontWeight: "bold",
      color: Colors.primary,
    },
    lessonTime: {
      fontSize: 13,
      color: Colors.secondary,
    },
    skippedAll: {
      fontSize: 14,
      fontWeight: "bold",
      color: Colors.color2,
      textAlign: "right",
      paddingVertical: 22,
    },
  });
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.reason}>Reason: {reason}</Text>
        <Text
          style={[
            styles.excused,
            { color: excused ? Colors.success : Colors.danger },
          ]}
        >
          {excused ? "Excused" : "Unexcused"}
        </Text>
        {!excused && (
          <TouchableOpacity style={styles.justifyBtn} onPress={onJustifyPress}>
            <Text style={styles.justifyBtnText}>Write Justification</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.rightSection}>
        {lessons.length > 0 && (
          <View style={styles.lessonsContainer}>
            {skippedAll ? (
              <Text style={styles.skippedAll}>Skipped all lessons</Text>
            ) : (
              lessons.map((lesson, idx) => (
                <View key={idx} style={styles.lessonRow}>
                  <Text style={styles.lessonName}>{lesson.name}</Text>
                  <Text style={styles.lessonTime}>{lesson.time}</Text>
                </View>
              ))
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default AbsenceCard;
