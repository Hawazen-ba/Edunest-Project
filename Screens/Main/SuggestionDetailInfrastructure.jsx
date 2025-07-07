import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";

const SUBCATEGORIES = ["Buildings", "IT Services", "Library", "Other"];

const SuggestionDetailInfrastructure = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    label: {
      fontWeight: "bold",
      color: Colors.primary,
      marginTop: 10,
      marginBottom: 6,
      fontSize: 15,
    },
    subcatScroll: {
      marginBottom: 10,
    },
    subcatRow: {
      flexDirection: "row",
      gap: 10,
    },
    subcatBtn: {
      backgroundColor: "#f8f8f8",
      borderColor: Colors.primary,
      borderWidth: 1,
      borderRadius: 16,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginRight: 6,
    },
    subcatBtnSelected: {
      backgroundColor: Colors.primary,
    },
    subcatBtnText: {
      color: Colors.primary,
      fontWeight: "500",
      fontSize: 15,
    },
    subcatBtnTextSelected: {
      color: "#fff",
    },
    input: {
      borderColor: Colors.primary,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      backgroundColor: "#f8f8f8",
      fontSize: 15,
      minHeight: 60,
      textAlignVertical: "top",
      marginBottom: 10,
    },
    switchRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },
    submitBtn: {
      backgroundColor: Colors.primary,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
    },
    submitBtnDisabled: {
      backgroundColor: Colors.subtitle,
    },
    submitBtnText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <GeneralHeader title={"Infrastructure Suggestion"} showBackArrow={true} />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={styles.label}>Select a Service/Category</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.subcatScroll}
          contentContainerStyle={styles.subcatRow}
        >
          {SUBCATEGORIES.map((subcat) => (
            <TouchableOpacity
              key={subcat}
              style={[
                styles.subcatBtn,
                selectedSubcategory === subcat && styles.subcatBtnSelected,
              ]}
              onPress={() => setSelectedSubcategory(subcat)}
              disabled={submitted}
            >
              <Text
                style={[
                  styles.subcatBtnText,
                  selectedSubcategory === subcat &&
                    styles.subcatBtnTextSelected,
                ]}
              >
                {subcat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.label}>Your Suggestion</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your suggestion..."
          value={suggestion}
          onChangeText={setSuggestion}
          editable={!submitted}
          multiline
          numberOfLines={4}
          maxLength={500}
        />
        <View style={styles.switchRow}>
          <Text style={styles.label}>Send as Anonymous</Text>
          <Switch
            value={anonymous}
            onValueChange={setAnonymous}
            disabled={submitted}
          />
        </View>
        <TouchableOpacity
          style={[styles.submitBtn, submitted && styles.submitBtnDisabled]}
          onPress={handleSubmit}
          disabled={submitted || !selectedSubcategory || !suggestion.trim()}
        >
          <Text style={styles.submitBtnText}>
            {submitted ? "Suggestion Sent (wait 24h)" : "Send Suggestion"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SuggestionDetailInfrastructure;
