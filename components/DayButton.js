import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import useColors from "../assets/styles/colors";

const { height, width } = Dimensions.get("window");
const DayButton = ({ label, selected, onPress }) => {
  const Colors = useColors();
  const styles = StyleSheet.create({
    dayButton: {
      backgroundColor: "#fff",
      borderColor: Colors.primary,
      borderWidth: 2,
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 22,
      marginHorizontal: 4,
    },
    btn: {
      height: height * 0.1,
    },
    dayButtonSelected: {
      backgroundColor: Colors.primary,
    },
    dayButtonText: {
      color: Colors.primary,
      fontWeight: "600",
      fontSize: 16,
    },
    dayButtonTextSelected: {
      color: "#fff",
    },
  });
  return (
    <View style={styles.btn}>
      <TouchableOpacity
        style={[styles.dayButton, selected && styles.dayButtonSelected]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.dayButtonText,
            selected && styles.dayButtonTextSelected,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DayButton;
