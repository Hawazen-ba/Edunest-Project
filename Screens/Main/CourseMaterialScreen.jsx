import React, { useState } from "react";
import { View, FlatList } from "react-native";
import Header from "../../components/Header";
import ChildSelector from "../../components/ChildSelector";
import SubjectCard from "../../components/SubjectCard";
import { useNavigation } from "@react-navigation/native";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";

export const children = [
  {
    id: "1",
    name: "Ali",
    subjects: [
      {
        id: "1",
        name: "Mathematics",
        materials: [
          {
            id: "1",
            name: "Algebra Basics",
            teacher: "Mr. Smith",
            pdfUrl:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          },
          {
            id: "2",
            name: "Geometry",
            teacher: "Ms. Johnson",
            pdfUrl:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf ",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Sara",
    subjects: [
      {
        id: "1",
        name: "Mathematics",
        materials: [
          {
            id: "1",
            name: "Advanced Algebra",
            teacher: "Mr. Smith",
            pdfUrl:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          },
        ],
      },
      {
        id: "1",
        name: "Science",
        materials: [
          {
            id: "1",
            name: "Advanced Algebra",
            teacher: "Mr. Smith",
            pdfUrl:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          },
        ],
      },
    ],
  },
];

const CourseMaterialScreen = () => {
  const navigation = useNavigation();
  const [selectedChildId, setSelectedChildId] = useState(children[0].id);

  const selectedChild = children.find((child) => child.id === selectedChildId);
  const subjects = selectedChild?.subjects || [];

  const handleSubjectPress = (subject) => {
    navigation.navigate("SubjectMaterials", {
      subject,
      childId: selectedChildId,
    });
  };
  const Colors = useColors();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <GeneralHeader title="Course Materials" showBackArrow={true} />
      <ChildSelector
        data={children}
        selectedValue={selectedChildId}
        onSelect={setSelectedChildId}
      />
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubjectCard
            subject={item}
            onPress={() => handleSubjectPress(item)}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default CourseMaterialScreen;
