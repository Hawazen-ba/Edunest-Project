import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import DayButton from "./DayButton";

const DaySelector = ({ days, selectedIdx, onSelect }) => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.daySelectorScroll}
      >
        {days.map((day, idx) => (
          <DayButton
            key={day}
            label={day}
            selected={idx === selectedIdx}
            onPress={() => onSelect(idx)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  daySelectorRow: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    gap: 12,
  },
});

export default DaySelector;
