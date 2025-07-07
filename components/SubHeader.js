import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import useColors from "../assets/styles/colors";

const { height, width } = Dimensions.get("window");
const SubHeader = () => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.primary,
    },
    TopArea: {
      alignItems: "flex-end",
      borderTopRightRadius: 30,
      backgroundColor: Colors.background,
    },
    logo: {
      marginRight: 10,
      marginTop: 12,
      width: width * 0.16,
      height: height * 0.08,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.TopArea}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
    </View>
  );
};

export default SubHeader;
