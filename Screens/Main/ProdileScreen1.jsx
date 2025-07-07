import React, { useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar, Image } from "react-native";
import ProfileInfoItem from "../../components/ProfileInfoItem";
import GeneralHeader from "../../components/GeneralHeader";
import { showImagePickerOptions } from "../../utils/ImagePicker";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EditInputModal from "../../components/EditInputModal";
import useImageStore from "../../utils/ImageStore";
import useColors from "../../assets/styles/colors";

const { height, width } = Dimensions.get("window");

const ProfileScreen = () => {
  const [phone, setPhone] = useState("+216 52547707");
  const [password, setPassword] = useState("jdfgjhg");
  const [modal, setModal] = useState({
    visible: false,
    label: "",
    value: "",
    secure: false,
    onSave: () => {},
  });
  const { image } = useImageStore(require("../../assets/profilepic.png"));
  const Colors = useColors();
  const openEdit = (label, value, secure, onSave) => {
    setModal({ visible: true, label, value, secure, onSave });
  };

  const handleEditImage = () => {
    showImagePickerOptions(setPImage);
  };
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    infoSection: {
      backgroundColor: Colors.background,
      borderRadius: 16,
      marginTop: 16,
      overflow: "hidden",
      elevation: 2,
    },

    avatarContainer: {
      alignItems: "center",
      marginTop: 24,
      marginBottom: 16,
      backgroundColor: Colors.background,
    },
    avatar: {
      width: 110,
      height: 110,
      borderRadius: 55,
      backgroundColor: "#eee",
      borderColor: Colors.primary,
      borderWidth: 2,
    },
    editAvatarBtn: {
      position: "absolute",
      bottom: 0,
      right: width / 2 - 110 / 2 - 10,
      backgroundColor: Colors.primary,
      borderRadius: 20,
      padding: 8,
      borderWidth: 2,
      borderColor: "#fff",
    },
  });
  return (
    <View contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      <GeneralHeader title={"Profile"} />
      <View style={styles.avatarContainer}>
        <Image source={image} style={styles.avatar} />
        <TouchableOpacity
          style={styles.editAvatarBtn}
          onPress={handleEditImage}
        >
          <Ionicons name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: Colors.background, marginTop: 20 }}>
        <ProfileInfoItem
          label="Phone Number"
          value={phone}
          icon="call-outline"
          onPress={() => openEdit("Phone Number", phone, false, setPhone)}
        />
        <ProfileInfoItem
          label="Password"
          value="********"
          icon="lock-closed-outline"
          onPress={() => openEdit("Password", password, true, setPassword)}
        />
      </View>
      <EditInputModal
        visible={modal.visible}
        label={modal.label}
        value={modal.value}
        secure={modal.label === "Password" ? false : modal.secure}
        onCancel={() => setModal({ ...modal, visible: false })}
        onConfirm={(val) => {
          modal.onSave(val);
          setModal({ ...modal, visible: false });
        }}
      />
    </View>
  );
};

export default ProfileScreen;
