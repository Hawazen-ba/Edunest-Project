import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import GeneralHeader from "../../components/GeneralHeader";
import { useNavigation } from "@react-navigation/native";
import useColors from "../../assets/styles/colors";

const messages = [
  {
    title: "New message",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit.",
    date: "12 June 2025",
    color: "#00C2CBB3",
    poster: require("../../assets/administrator.png"),
  },
  {
    title: "New message",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit.",
    date: "09 June 2025",
    color: "#FF6B6BB3",
  },
  {
    title: "New message",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit.",
    date: "07 June 2025",
    color: "#4A90E2B3",
  },
  {
    title: "New message",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit.",
    date: "12 June 2025",
    color: "#00C2CBB3",
  },
  {
    title: "New message",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit.",
    date: "09 June 2025",
    color: "#FF6B6BB3",
  },
  {
    title: "New message",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit dolor sit.",
    date: "07 June 2025",
    color: "#4A90E2B3",
  },
];

const MessageCard = ({ title, message, date, color, onPress }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
    },
    backButton: {
      padding: 8,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors.primary,
      marginLeft: 16,
    },
    content: {
      flex: 1,
      padding: 16,
    },
    card: {
      borderRadius: 10,
      padding: 18,
      marginBottom: 16,
      elevation: 2,
    },
    title: {
      color: Colors.primary,
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 6,
    },
    date: {
      color: Colors.subtitle,
      fontSize: 14,
    },
    message: {
      color: "#fff",
      fontSize: 15,
      marginBottom: 10,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message} numberOfLines={2} ellipsizeMode="tail">
          {message}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.date}>{date}</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MessagesScreen = ({ navigation }) => {
  const Colors = useColors();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <GeneralHeader title="Messages" showBackArrow={true} />
      <FlatList
        data={messages}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <MessageCard
            {...item}
            onPress={() =>
              navigation.navigate("MessageDetail", { message: item })
            }
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default MessagesScreen;
