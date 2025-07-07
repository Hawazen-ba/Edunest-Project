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
const FeatureCard = ({ icon, title, screen }) => {
  const navigation = useNavigation();
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card: {
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 15,
      marginVertical: 10,
      backgroundColor: "white",
      borderWidth: 3,
      borderColor: Colors.primary,
      width: width * 0.3,
      height: height * 0.15,
      marginHorizontal: 8,
    },
    iconContainer: {
      width: width * 0.157,
      height: height * 0.07,
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 8,
    },
    textContainer: {
      backgroundColor: Colors.primary,

      height: height * 0.04,
      width: width * 0.3,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
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
      style={styles.container}
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
