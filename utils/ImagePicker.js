import * as ImagePicker from "expo-image-picker";
import { Platform, Alert } from "react-native";

export const requestMediaLibraryPermissions = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera roll permissions to upload images!"
      );
      return false;
    }
    return true;
  }
  return true;
};

export const requestCameraPermissions = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera permissions to take photos!"
      );
      return false;
    }
    return true;
  }
  return true;
};

// Pick image from library
export const pickImageFromLibrary = async () => {
  const hasPermission = await requestMediaLibraryPermissions();
  if (!hasPermission) return null;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.7,
  });

  if (!result.canceled && result.assets && result.assets.length > 0) {
    return result.assets[0].uri;
  }

  return null;
};

// Take photo with camera
export const takePhoto = async () => {
  const hasPermission = await requestCameraPermissions();
  if (!hasPermission) return null;

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.7,
  });

  if (!result.canceled && result.assets && result.assets.length > 0) {
    return result.assets[0].uri;
  }

  return null;
};

// Show image picker options
export const showImagePickerOptions = (onImageSelected) => {
  Alert.alert(
    "Choose Image",
    "Select an option",
    [
      {
        text: "Take Photo",
        onPress: async () => {
          const imageUri = await takePhoto();
          if (imageUri) onImageSelected(imageUri);
        },
      },
      {
        text: "Choose from Library",
        onPress: async () => {
          const imageUri = await pickImageFromLibrary();
          if (imageUri) onImageSelected(imageUri);
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ],
    { cancelable: true }
  );
};
