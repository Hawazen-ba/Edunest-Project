import React from "react";
import { View, FlatList } from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import CourseMaterialCard from "../../components/CourseMaterialCard";
import { useRoute } from "@react-navigation/native";
import useColors from "../../assets/styles/colors";

const SubjectMaterialsScreen = () => {
  const route = useRoute();
  const { subject } = route.params || {}; // Get the full subject from navigation
  const subjectMaterials = subject?.materials || []; // Directly access materials
  const Colors = useColors();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <GeneralHeader
        title={`${subject?.name} Materials`}
        showBackArrow={true}
      />
      <FlatList
        data={subjectMaterials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseMaterialCard material={item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default SubjectMaterialsScreen;
