import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import useColors from "../assets/styles/colors";

const { height } = Dimensions.get("window");

const ChildSelector = ({ data, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Colors = useColors();

  const selectedChild = data.find((child) => child.id === selectedValue);
  const selectedName = selectedChild ? selectedChild.name : "Select a child";

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (id) => {
    onSelect(id);
    setIsOpen(false);
  };
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginBottom: 15,
    },
    dropdownButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "#E0E0E0",
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
    },
    dropdownButtonText: {
      fontSize: 16,
      color: "#000",
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    dropdownMenu: {
      borderRadius: 12,
      width: "80%",
      maxHeight: height * 0.4,
      elevation: 5,
    },
    dropdownItem: {
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    dropdownItemText: {
      fontSize: 16,
    },
    divider: {
      height: 1,
      marginHorizontal: 10,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        <Text style={styles.dropdownButtonText}>{selectedName}</Text>
        <Icon
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={16}
          color="#000"
        />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={[styles.dropdownMenu, { backgroundColor: "white" }]}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item.id)}
                >
                  <Text
                    style={[styles.dropdownItemText, { color: Colors.primary }]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => (
                <View
                  style={[
                    styles.divider,
                    { backgroundColor: Colors.secondary },
                  ]}
                />
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  dropdownButtonText: {
    fontSize: 16,
    color: "#000",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownMenu: {
    borderRadius: 12,
    width: "80%",
    maxHeight: height * 0.4,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    marginHorizontal: 10,
  },
});

export default ChildSelector;
