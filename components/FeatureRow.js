import React from "react";
import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import FeatureCard from "./FeatureCard";

const FeatureRow = ({ data, column }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <FeatureCard
            title={item.title}
            icon={item.icon}
            screen={item.screen}
          />
        )}
        numColumns={column}
        contentContainerStyle={styles.list}
        scrollEnabled={false}
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
    justifyContent: "space-between",
  },
});

export default FeatureRow;
