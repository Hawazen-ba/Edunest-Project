import React from "react";
import { Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Linking, Platform, Alert } from "react-native";
import email from "react-native-email";
import useColors from "../assets/styles/colors";
const { height, width } = Dimensions.get("window");

const ContactCard = ({ name, phone, emailvar }) => {
  const handleEmail = (emailvar) => {
    const to = [emailvar];
    email(to, {}).catch(console.error);
  };
  const Colors = useColors();
  const callNumber = (phoneNumber) => {
    let phoneNum = phoneNumber;
    if (Platform.OS !== "android") {
      phoneNum = `telprompt:${phoneNumber}`;
    } else {
      phoneNum = `tel:${phoneNumber}`;
    }
    Linking.canOpenURL(phoneNum)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Phone number is not available");
        } else {
          return Linking.openURL(phoneNum);
        }
      })
      .catch((err) => console.log(err));
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 20,
      width: width * 0.9,
      height: height * 0.13,
      alignSelf: "center",
      marginTop: 20,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    textContainer: {
      marginLeft: 15,
    },
    name: {
      color: Colors.primary,
      fontSize: 22,
      fontWeight: "600",
      marginBottom: 5,
    },
    title: {
      color: Colors.primary,
      fontSize: 16,
      marginLeft: 10,
      fontWeight: "600",
      opacity: 0.9,
    },
    infoContainer: {
      flexDirection: "row",
      marginBottom: 5,
    },
    subtitle: {
      color: Colors.primary,
      fontSize: 14,
      marginLeft: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/profile.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => {
            callNumber(phone);
          }}
        >
          <Ionicons name="call-outline" size={20} color={Colors.primary} />
          <Text style={styles.title}>Phone: </Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => {
            console.log(emailvar);
            handleEmail(emailvar);
          }}
        >
          <Ionicons name="mail-outline" size={20} color={Colors.primary} />
          <Text style={styles.title}>Email: </Text>
          <Text style={styles.subtitle}>{emailvar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactCard;
