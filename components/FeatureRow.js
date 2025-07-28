import React from "react";
import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import FeatureCard from "./FeatureCard";

const { width } = Dimensions.get("window");

const FeatureRow = ({ data, column = 3, columnWrapperStyle }) => {
  // Calculate card width based on columns and margin
  const totalMargin = 16 * column; // 8px margin on each side per card
  const cardWidth = (width - totalMargin - 20) / column; // 20 for container padding

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FeatureCard
            title={item.title}
            icon={item.icon}
            screen={item.screen}
            cardWidth={cardWidth}
          />
        )}
        numColumns={column}
        contentContainerStyle={styles.list}
        columnWrapperStyle={
          columnWrapperStyle || { justifyContent: "flex-start" }
        }
        scrollEnabled={false}
        keyExtractor={(item, idx) => item.title + idx}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  list: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
});

export default FeatureRow;
