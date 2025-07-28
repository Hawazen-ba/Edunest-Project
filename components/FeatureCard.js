import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useColors from "../assets/styles/colors";

const { width, height } = Dimensions.get("window");
const FeatureCard = ({ icon, title, screen, cardWidth }) => {
  const navigation = useNavigation();
  const Colors = useColors();
  const styles = StyleSheet.create({
    card: {
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 15,
      marginVertical: 10,
      backgroundColor: "white",
      borderWidth: 3,
      borderColor: Colors.primary,
      width: cardWidth || width * 0.28, // fallback for 3 columns
      height: height * 0.17, // slightly taller for more space
      marginHorizontal: 8,
      alignSelf: "center",
      justifyContent: "center",
      paddingVertical: 10, // add vertical padding
    },
    iconContainer: {
      width: (cardWidth || width * 0.28) * 0.7, // increase width
      height: height * 0.09, // increase height
      marginBottom: 10, // reduce margin
      marginTop: 10, // reduce margin
      resizeMode: "contain", // ensure image fits
      alignSelf: "center",
    },
    textContainer: {
      backgroundColor: Colors.primary,
      height: height * 0.04,
      width: cardWidth || width * 0.28,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginTop: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      color: "white",
      fontWeight: "500",
    },
  });
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screen);
      }}
    >
      <View style={styles.card}>
        <Image source={icon} style={styles.iconContainer} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCard;
