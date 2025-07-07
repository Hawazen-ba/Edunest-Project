import React, { useState } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import ProfileImagePicker from "../../components/ProfileImagePicker";
import ProfileInfoItem from "../../components/ProfileInfoItem";
import EditInputModal from "../../components/EditInputModal";
import useImageStore from "../../utils/ImageStore";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";

const ProfileScreen = () => {
  const { image } = useImageStore();
  const [name, setName] = useState("Yassine Zack");
  const [email, setEmail] = useState("yassine@gmail.com");
  const [school, setSchool] = useState("test");
  const [phone, setPhone] = useState("+216 12345678");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({
    visible: false,
    label: "",
    value: "",
    secure: false,
    onSave: () => {},
  });

  const openEdit = (label, value, secure, onSave) => {
    setModal({ visible: true, label, value, secure, onSave });
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: { padding: 24, backgroundColor: Colors.background, flexGrow: 1 },
    infoSection: {
      backgroundColor: "#fff",
      borderRadius: 16,
      marginTop: 16,
      overflow: "hidden",
      elevation: 2,
    },
  });
  return (
    <View contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileImagePicker />
        <View style={styles.infoSection}>
          <ProfileInfoItem
            label="Name"
            value={name}
            icon="person-outline"
            onPress={() => openEdit("Name", name, false, setName)}
          />
          <ProfileInfoItem
            label="Email"
            value={email}
            icon="mail-outline"
            onPress={() => openEdit("Email", email, false, setEmail)}
          />
          <ProfileInfoItem
            label="School"
            value={school}
            icon="lock-closed-outline"
            onPress={() => openEdit("School", school, false, setSchool)}
          />
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
            onPress={() => openEdit("Password", password, false, setPassword)}
          />
        </View>
        <EditInputModal
          visible={modal.visible}
          label={modal.label}
          value={modal.value}
          secure={false}
          onCancel={() => setModal({ ...modal, visible: false })}
          onConfirm={(val) => {
            modal.onSave(val);
            setModal({ ...modal, visible: false });
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
