import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FileIcon from "./FileIcon";
import useColors from "../assets/styles/colors";

const SectionDivider = ({ label }) => {
  const Colors = useColors();
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 18 }}
    >
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: Colors.secondary,
          marginRight: 8,
        }}
      />
      <Text style={{ color: Colors.subtitle, fontWeight: "600", fontSize: 18 }}>
        {label}
      </Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: Colors.secondary,
          marginLeft: 8,
        }}
      />
    </View>
  );
};
const TutorDetails = ({ tutor, onBack }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 18,
      padding: 15,
      fontWeight: 500,
    },
    table: {
      borderWidth: 1,
      borderColor: Colors.secondary,
      borderRadius: 8,
      marginBottom: 16,
      backgroundColor: "white",
    },
    tableRowHeader: {
      flexDirection: "row",
      backgroundColor: Colors.secondary,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    tableHeader: {
      flex: 1,
      fontWeight: "500",
      color: "white",
      padding: 8,
      fontSize: 15,
      textAlign: "center",
    },
    tableRowWithBorder: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.secondary,
    },
    tableRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    tableCell: {
      flex: 1,
      padding: 10,
      textAlign: "center",
      color: Colors.text,
    },
    lessonRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.card,
      borderRadius: 8,
      marginBottom: 8,
      padding: 10,
      elevation: 1,
    },
    lessonTitle: {
      flex: 1,
      marginLeft: 10,
      color: Colors.text,
      fontSize: 16,
    },
    tutorDetailsContent: {
      paddingBottom: 30,
    },
  });
  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: 20 }}
      contentContainerStyle={styles.tutorDetailsContent}
    >
      <TouchableOpacity
        onPress={onBack}
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Ionicons name="arrow-back" size={22} color={Colors.subtitle} />
        <Text
          style={{
            color: Colors.subtitle,
            fontWeight: "500",
            fontSize: 16,
            marginLeft: 6,
          }}
        >
          Back to Tutors
        </Text>
      </TouchableOpacity>
      <SectionDivider label="Schedule" Colors={Colors} />
      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={styles.tableHeader}>Time</Text>
          <Text style={styles.tableHeader}>Lesson</Text>
          <Text style={styles.tableHeader}>Teams Link</Text>
        </View>
        {tutor.schedule.map((item, idx) => {
          const isLast = idx === tutor.schedule.length - 1;
          return (
            <View
              style={[styles.tableRow, !isLast && styles.tableRowWithBorder]}
              key={idx}
            >
              <Text style={styles.tableCell}>{item.time}</Text>
              <Text style={styles.tableCell}>{item.title}</Text>
              <View style={styles.tableCell}>
                {item.link ? (
                  <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                    <Text
                      style={{
                        color: "white",
                        backgroundColor: Colors.primary,
                        marginHorizontal: 20,
                        borderRadius: 5,
                        padding: 5,
                        textAlign: "center",
                      }}
                    >
                      Join
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={{ color: Colors.subtitle }}>
                    Not available yet
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </View>

      {/* Lessons */}
      <SectionDivider label="Lessons" Colors={Colors} />
      {tutor.lessons.map((lesson, idx) => (
        <View key={idx} style={styles.lessonRow}>
          <FileIcon type={lesson.type} />
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(lesson.url)}>
            <Ionicons name="download" size={22} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ))}

      <SectionDivider label="Homeworks" Colors={Colors} />
      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={styles.tableHeader}>Title</Text>
          <Text style={styles.tableHeader}>Homework</Text>
          <Text style={styles.tableHeader}>Correction</Text>
        </View>
        {tutor.homeworks.map((hw, idx) => {
          const isLast = idx === tutor.schedule.length - 1;
          return (
            <View
              style={[styles.tableRow, !isLast && styles.tableRowWithBorder]}
              key={idx}
            >
              <Text style={styles.tableCell}>{hw.title}</Text>
              <View style={styles.tableCell}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(hw.homeworkUrl)}
                  style={{ alignItems: "center" }}
                >
                  <Ionicons name="download" size={22} color={Colors.primary} />
                </TouchableOpacity>
              </View>
              <View style={styles.tableCell}>
                {hw.correctionUrl ? (
                  <TouchableOpacity
                    onPress={() => Linking.openURL(hw.correctionUrl)}
                    style={{ alignItems: "center" }}
                  >
                    <Ionicons
                      name="download"
                      size={22}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                ) : (
                  <Text style={{ color: Colors.subtitle }}>
                    Not available yet
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TutorDetails;
