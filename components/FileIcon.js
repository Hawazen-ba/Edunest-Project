import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FileIcon = ({ type }) => {
  if (type === "pdf")
    return (
      <MaterialCommunityIcons name="file-pdf-box" size={24} color="#E53935" />
    );
  if (type === "ppt")
    return (
      <MaterialCommunityIcons
        name="file-powerpoint-box"
        size={24}
        color="#F57C00"
      />
    );
  return (
    <MaterialCommunityIcons name="file-document" size={24} color="#1976D2" />
  );
};

export default FileIcon;
