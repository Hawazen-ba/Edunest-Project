import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { showImagePickerOptions } from "../utils/ImagePicker";
import useImageStore from "../utils/ImageStore";
import useColors from "../assets/styles/colors";

const ProfileImagePicker = () => {
  const { image, setImage } = useImageStore();
  const Colors = useColors();
  const handlePickImage = () => {
    showImagePickerOptions(setImage);
  };
  const styles = StyleSheet.create({
    container: { alignItems: "center", marginVertical: 24 },
    image: {
      width: 110,
      height: 110,
      borderRadius: 55,
      borderWidth: 3,
      borderColor: Colors.primary,
    },
    editIcon: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: Colors.primary,
      borderRadius: 16,
      padding: 6,
      borderWidth: 2,
      borderColor: "#fff",
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePickImage}>
        <Image
          source={image ? { uri: image } : require("../assets/profilepic.png")}
          style={styles.image}
        />
        <View style={styles.editIcon}>
          <Ionicons name="camera" size={22} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImagePicker;
