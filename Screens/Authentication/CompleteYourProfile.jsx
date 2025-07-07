import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedbackComponent,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Inputs from "../../components/Inputs";
import useColors from "../../assets/styles/colors";
import GeneralHeader from "../../components/GeneralHeader";
import SchoolSelector from "../../components/SchoolSelector";
import Button from "../../components/Button";
import useAuthStore from "../../utils/AuthStore";

const schools = [
  { id: "1", name: "Greenwood High" },
  { id: "2", name: "Sunrise Academy" },
  { id: "3", name: "Riverdale School" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const CompleteYourProfile = () => {
  const { loggedIn } = useAuthStore();
  const handleClick = async (values, { setSubmitting }) => {
    try {
      console.log("Signing up...");
      loggedIn(values);
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert("Error", "Sign up failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const Colors = useColors();
  const [schoolQuery, setSchoolQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 24,
      textAlign: "center",
    },
    label: {
      fontSize: 16,
      marginBottom: 6,
      marginTop: 10,
    },
    selector: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 8,
    },
    submitBtn: {
      marginTop: 24,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: "center",
    },
    modalOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    },
    modal: {
      width: "80%",
      borderRadius: 12,
      padding: 10,
      elevation: 5,
    },
    modalItem: {
      borderBottomColor: Colors.primary,
      borderBottomWidth: 1,
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    modalBackdrop: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 40,
      paddingTop: 10,
    },
    suggestionItem: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: Colors.secondary,
      backgroundColor: Colors.background,
    },
    suggestionsList: {
      maxHeight: 120,
      borderWidth: 1,
      borderColor: Colors.primary,
      borderRadius: 8,
      marginBottom: 10,
      backgroundColor: Colors.background,
    },
  });
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <GeneralHeader showBackArrow={true} />
      <Formik
        initialValues={{ name: "", email: "", school: "" }}
        validationSchema={validationSchema}
        onSubmit={handleClick}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => {
          const filteredSchools = schools.filter((school) =>
            school.name.toLowerCase().includes(schoolQuery.toLowerCase())
          );
          return (
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
            >
              <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
              >
                <ScrollView contentContainerStyle={styles.content}>
                  <Text style={[styles.title, { color: Colors.primary }]}>
                    Complete your profile
                  </Text>
                  <Inputs
                    label="Name"
                    value={values.name}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    placeholder="Enter your name"
                    placeholderTextColor={Colors.subtitle}
                    error={errors.name}
                    touched={touched.name}
                    textColor={Colors.text}
                    borderColor={Colors.primary}
                  />
                  <Inputs
                    label="Email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Enter your email"
                    placeholderTextColor={Colors.subtitle}
                    keyboardType="email-address"
                    error={errors.email}
                    touched={touched.email}
                    textColor={Colors.text}
                    borderColor={Colors.primary}
                  />
                  <Text style={[styles.label, { color: Colors.text }]}>
                    School
                  </Text>
                  <View>
                    <Inputs
                      label={null}
                      value={schoolQuery}
                      onChangeText={(text) => {
                        setSchoolQuery(text);
                        setShowSuggestions(true);
                        setFieldValue("school", "");
                      }}
                      onBlur={handleBlur("school")}
                      placeholder="Type your school name"
                      placeholderTextColor={Colors.subtitle}
                      textColor={Colors.text}
                      borderColor={Colors.primary}
                      error={errors.school}
                      touched={touched.school}
                    />
                    {showSuggestions &&
                      schoolQuery.length > 0 &&
                      filteredSchools.length > 0 && (
                        <FlatList
                          style={styles.suggestionsList}
                          data={filteredSchools}
                          keyExtractor={(item) => item.id}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              style={styles.suggestionItem}
                              onPress={() => {
                                setFieldValue("school", item.id);
                                setSchoolQuery(item.name);
                                setShowSuggestions(false);
                              }}
                            >
                              <Text style={{ color: Colors.primary }}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          )}
                          keyboardShouldPersistTaps="handled"
                        />
                      )}
                    {values.school &&
                      !filteredSchools.find((s) => s.id === values.school) && (
                        <Text style={{ color: Colors.error, fontSize: 12 }}>
                          School not found
                        </Text>
                      )}
                  </View>
                  {touched.school && errors.school && (
                    <Text style={{ color: Colors.error, fontSize: 12 }}>
                      {errors.school}
                    </Text>
                  )}
                  <Button
                    func={handleSubmit}
                    buttonColor={Colors.primary}
                    textColor={"white"}
                    label={"Submit"}
                  />
                </ScrollView>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </View>
  );
};

export default CompleteYourProfile;
