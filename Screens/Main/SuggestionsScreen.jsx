import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import FeatureCard from "../../components/FeatureCard";
import FeatureRow from "../../components/FeatureRow";
import ContactComponent from "../../components/ContactComponent";
import InfoCard from "../../components/InfoCard";
import useColors from "../../assets/styles/colors";

const features = [
  {
    title: "Administration",
    icon: require("../../assets/administrator.png"),
    screen: "SuggestionDetailAdministration",
  },
  {
    title: "Education",
    icon: require("../../assets/lecture.png"),
    screen: "SuggestionDetailEducation",
  },
  {
    title: "Infrastructure",
    icon: require("../../assets/infrastructure.png"),
    screen: "SuggestionDetailInfrastructure",
  },
  {
    title: "Clubs",
    icon: require("../../assets/clubs.png"),
    screen: "SuggestionDetailClubs",
  },
];

const SuggestionsScreen = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const Colors = useColors();
  const modalStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)",
      justifyContent: "center",
      alignItems: "center",
    },

    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 14,
      color: Colors.primary,
      textAlign: "center",
    },
    text: {
      fontSize: 16,
      color: Colors.primary,
      marginBottom: 20,
      textAlign: "left",
    },
    content: {
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 28,
      width: "85%",
      alignItems: "center",
    },
    closeBtn: {
      backgroundColor: Colors.primary,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginTop: 10,
    },
    closeBtnText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

      <ScrollView
        style={{
          flex: 1,
          alignContent: "center",
          marginBottom: 107,
        }}
        showsVerticalScrollIndicator={false}
      >
        <FeatureRow data={features} column={2} />
        <View style={{ alignItems: "center" }}>
          <InfoCard
            icon={"information-circle-outline"}
            title={"Instructions"}
            onPress={() => setShowInstructions(true)}
          />
          <InfoCard
            icon={"help-circle-outline"}
            title={"More infos"}
            onPress={() => setShowMoreInfo(true)}
          />
        </View>
      </ScrollView>
      <Modal
        visible={showInstructions}
        transparent
        animationType="slide"
        onRequestClose={() => setShowInstructions(false)}
      >
        <View style={modalStyles.overlay}>
          <View style={modalStyles.content}>
            <Text style={modalStyles.title}>How to Send a Suggestion</Text>
            <Text style={modalStyles.text}>
              1. Select the feature you want to suggest about (Administration,
              Education, Clubs, Infrastructure).{"\n"}
              2. Choose the relevant service or category.{"\n"}
              3. Write your suggestion clearly and concisely.{"\n"}
              4. Choose whether to send your suggestion anonymously or with your
              name.{"\n"}
              5. Press 'Send Suggestion'. You can only send one suggestion every
              24 hours.
            </Text>
            <TouchableOpacity
              style={modalStyles.closeBtn}
              onPress={() => setShowInstructions(false)}
            >
              <Text style={modalStyles.closeBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={showMoreInfo}
        transparent
        animationType="slide"
        onRequestClose={() => setShowMoreInfo(false)}
      >
        <View style={modalStyles.overlay}>
          <View style={modalStyles.content}>
            <Text style={modalStyles.title}>More Information</Text>
            <Text style={modalStyles.text}>
              • You can send only one suggestion per day (every 24 hours).
              {"\n\n"}• Suggestions help us improve our services and your
              experience. {"\n\n"}• Please be respectful and constructive in
              your feedback. {"\n\n"}• If you choose to send anonymously, your
              identity will not be shared. {"\n\n"}• For urgent issues, please
              contact administration directly.
            </Text>
            <TouchableOpacity
              style={modalStyles.closeBtn}
              onPress={() => setShowMoreInfo(false)}
            >
              <Text style={modalStyles.closeBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SuggestionsScreen;
