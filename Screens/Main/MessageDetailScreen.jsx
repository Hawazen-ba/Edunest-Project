import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";

const MessageDetailScreen = ({ route }) => {
  const { message } = route.params;
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      margin: 20,
      borderRadius: 12,
      padding: 24,
      elevation: 2,
    },
    title: {
      color: Colors.primary,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },
    poster: {
      width: "100%",
      height: 500,
      borderRadius: 10,
      marginBottom: 16,
      marginTop: 4,
      resizeMode: "cover",
      alignSelf: "center",
    },
    date: {
      color: Colors.subtitle,
      fontSize: 15,
      marginBottom: 12,
      fontStyle: "italic",
    },
    fullMessage: {
      color: Colors.primary,
      fontSize: 17,
      lineHeight: 24,
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <GeneralHeader title={message.title} showBackArrow={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 50 }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{message.title}</Text>
          {message.poster && (
            <Image source={message.poster} style={styles.poster} />
          )}
          <Text style={styles.date}>{message.date}</Text>
          <Text style={styles.fullMessage}>{message.message}</Text>
        </View>
      </ScrollView>

      <View style={{ height: "5%" }}></View>
    </View>
  );
};

export default MessageDetailScreen;
