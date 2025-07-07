import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import useColors from "../assets/styles/colors";

const { height, width } = Dimensions.get("window");
const MessageCard = ({ title, date, message, color, poster = "" }) => {
  const navigation = useNavigation();
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color,
      borderRadius: 10,
      padding: 15,
      marginHorizontal: 5,
      height: height * 0.15,
      width: width * 0.45,
    },
    title: {
      color: Colors.primary,
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 8,
    },
    message: {
      color: "white",
      fontSize: 15,
      marginBottom: 10,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    date: {
      color: Colors.subtitle,
      fontSize: 14,
    },
    arrowButton: {
      paddingHorizontal: 5,
      paddingVertical: 10,
    },
  });

  const handlePress = () => {
    navigation.navigate("MessageDetail", {
      message: { title, message, date, poster },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      <Text style={styles.message} numberOfLines={2} ellipsizeMode="tail">
        {message}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity style={styles.arrowButton} onPress={handlePress}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageCard;
