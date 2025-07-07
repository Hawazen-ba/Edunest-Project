import React from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DropdownModal = ({ visible, onClose, data }) => {
  const { theme } = useTheme();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={[
            styles.modalContent,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          {data.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  item.onPress?.();
                  onClose();
                }}
              >
                <Icon
                  name={item.iconName}
                  size={24}
                  color={theme.colors.primary}
                />
                <Text style={[styles.optionText, { color: theme.colors.text }]}>
                  {item.title}
                </Text>
              </TouchableOpacity>

              <View
                style={[
                  styles.divider,
                  { backgroundColor: theme.colors.outline },
                ]}
              />
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 60,
    paddingRight: 20,
  },
  modalContent: {
    width: 200,
    borderRadius: 8,
    padding: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
  },
  optionText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    marginVertical: 4,
  },
});

export default DropdownModal;
