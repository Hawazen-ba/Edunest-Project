import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MessageCard from "./MessageCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import useColors from "../assets/styles/colors";

const { height, width } = Dimensions.get("window");
const messages = [
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

const MessageRow = () => {
  const Colors = useColors();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    noticeArea: {
      paddingLeft: 10,
      marginTop: -20,
      marginBottom: 30,
      paddingRight: 5,
    },
    noticeTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors.primary,
      marginBottom: 15,
      marginLeft: 10,
    },
    seeAll: {
      marginTop: width * 0.1,
      marginLeft: 10,
      width: width * 0.1,
      height: height * 0.048,
      borderColor: Colors.primary,
      borderWidth: 2,
      borderRadius: 50,
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },
  });
  return (
    <View style={styles.noticeArea}>
      <Text style={styles.noticeTitle}>Notice Board</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            color={message.color}
            title={message.title}
            message={message.message}
            date={message.date}
          />
        ))}
        <View style={styles.seeAll}>
          <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
            <Ionicons name="chevron-forward" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MessageRow;
