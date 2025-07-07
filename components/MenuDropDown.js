import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useAuthStore from "../utils/AuthStore";
import { useNavigation } from "@react-navigation/native";
import { useSpotlightTour } from "react-native-spotlight-tour";
import useColors from "../assets/styles/colors";

const { height, width } = Dimensions.get("window");
const options = [
  { id: 1, title: "Help", icon: "help-circle-outline" },
  { id: 2, title: "Logout", icon: "log-out-outline" },
];

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rotateAnim = useState(new Animated.Value(0))[0];
  const logout = useAuthStore((state) => state.loggedOut);
  const navigation = useNavigation();
  const { start } = useSpotlightTour();
  const Colors = useColors();
  const toggleDropdown = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(rotateAnim, {
      toValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const handleOptionPress = (item) => {
    setIsOpen(false);
    if (item.title === "Logout") {
      logout();
    }
  };
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      justifyContent: "flex-end",
      zIndex: 1000,
    },
    dropdownButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRadius: 15,
      width: 65,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      paddingTop: 60,
      paddingRight: 20,
    },
    dropdownMenu: {
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 8,
      width: 150,
      maxHeight: 200,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
      marginTop: height * 0.08,
    },
    dropdownItem: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderColor: "#E5E5E5",
      flexDirection: "row",
    },

    optionText: {
      fontSize: 18,
      color: "#333",
      paddingHorizontal: 10,
    },

    menuButton: {
      padding: 8,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
        <Ionicons name="ellipsis-vertical" size={24} color="white" />
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
          <View style={styles.dropdownMenu}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.dropdownItem]}
                  onPress={() => handleOptionPress(item)}
                >
                  <Ionicons size={24} name={item.icon} color={Colors.primary} />
                  <Text style={[styles.optionText]}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default MenuDropdown;
