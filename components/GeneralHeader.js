import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useColors from "../assets/styles/colors";

const { height, width } = Dimensions.get("window");

const GeneralHeader = ({ title, subtitle = "", showBackArrow = false }) => {
  const navigation = useNavigation();
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.primary,
    },
    container1: {
      backgroundColor: Colors.primary,
    },
    title: {
      marginTop: 30,
      paddingLeft: 15,
      paddingBottom: 15,
      fontSize: 21,
      fontWeight: "bold",
      color: Colors.primary,
    },
    TopArea: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      borderTopRightRadius: 30,
      paddingHorizontal: 15,
      paddingBottom: 10,
      backgroundColor: Colors.background,
    },
    logo: {
      marginRight: 10,
      marginTop: 12,
      width: width * 0.16,
      height: height * 0.08,
    },
    header: {
      backgroundColor: Colors.background,
    },
    mainHeader: {
      backgroundColor: Colors.primary,
      height: height * 0.09,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 30,
      justifyContent: "center",
      flexDirection: "row",
    },
    backButton: {
      position: "absolute",
      left: 30,
      top: 20,
    },
    titleContainer: {
      flex: 1,
      alignItems: "center",
    },
    profileText: {
      color: "white",
      fontSize: 20,
      fontWeight: 500,
      paddingVertical: 20,

      alignSelf: "center",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.mainHeader}>
          {showBackArrow && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color={"white"} />
            </TouchableOpacity>
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.profileText}>{title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.TopArea}>
          <Text style={styles.title}>{subtitle}</Text>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GeneralHeader;
