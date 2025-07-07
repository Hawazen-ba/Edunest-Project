import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import MenuDropdown from "./MenuDropDown";
import useImageStore from "../utils/ImageStore";
import useColors from "../assets/styles/colors";

const { height, width } = Dimensions.get("window");

const Header = () => {
  const { image } = useImageStore();
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.primary,
    },
    headerWrapper: {
      height: height * 0.2,
    },
    header: {
      backgroundColor: Colors.background,
    },
    mainHeader: {
      backgroundColor: Colors.primary,
      height: height * 0.16,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 30,
    },
    headerContent: {
      paddingTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    profileContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "#fff",
    },
    textContainer: {
      marginLeft: 15,
    },
    name: {
      color: "#FFFFFF",
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 5,
    },
    title: {
      color: "#FFFFFF",
      fontSize: 16,
      opacity: 0.9,
    },
    menuButton: {
      padding: 8,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <View style={styles.header}>
        <View style={styles.mainHeader}>
          <View style={styles.headerContent}>
            <View style={styles.profileContainer}>
              <Image
                source={
                  image ? { uri: image } : require("../assets/profilepic.png")
                }
                style={styles.profileImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.name}>Yassine Zack</Text>
                <Text style={styles.title}>4th year IT engineering SE</Text>
              </View>
            </View>
            <MenuDropdown />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
