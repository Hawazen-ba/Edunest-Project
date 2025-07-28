import React from "react";
import { ScrollView } from "react-native";
import AssignmentCard from "./AssignmentCard";

const AssignmentList = ({ assignments, onDelete, icon }) => {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      {assignments.map((item, idx) => (
        <AssignmentCard
          key={idx}
          name={item.name}
          description={item.description}
          leftIcon={icon}
          onDelete={() => onDelete(idx)}
        />
      ))}
    </ScrollView>
  );
};

export default AssignmentList;
