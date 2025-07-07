import React, { useState } from "react";
import { View, FlatList } from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import ChildSelector from "../../components/ChildSelector";
import SemesterCard from "../../components/SemesterCard";
import useColors from "../../assets/styles/colors";

const childrenData = [
  { id: "1", name: "Ali" },
  { id: "2", name: "Sara" },
];

const semesters = [
  {
    id: "1",
    semester: "Fall 2024",
    paid: 1500,
    remaining: 500,
    total: 2000,
    period: "Sep 2024 - Jan 2024",
    childId: "1",
  },
  {
    id: "2",
    semester: "Spring 2025",
    paid: 1000,
    remaining: 1000,
    total: 2000,
    period: "Feb 2025 - Jun 2025",
    childId: "1",
  },
  {
    id: "3",
    semester: "Fall 2024",
    paid: 2000,
    remaining: 0,
    total: 2000,
    period: "Sep 2024 - Jan 2024",
    childId: "2",
  },
];

const FinancialStatementScreen = () => {
  const [selectedChild, setSelectedChild] = useState(childrenData[0].id);

  const filteredSemesters = semesters.filter(
    (s) => s.childId === selectedChild
  );
  const Colors = useColors();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <GeneralHeader title="Financial Statement" showBackArrow={true} />
      <ChildSelector
        data={childrenData}
        selectedValue={selectedChild}
        onSelect={setSelectedChild}
      />
      <FlatList
        data={filteredSemesters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SemesterCard
            semester={item.semester}
            paid={item.paid}
            remaining={item.remaining}
            total={item.total}
            period={item.period}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default FinancialStatementScreen;
