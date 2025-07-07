import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import usePasswordStore from "../../utils/PasswordStore";
import useColors from "../../assets/styles/colors";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

const ForgotPasswordScreen = ({ navigation }) => {
  const { showPassword, togglePassword } = usePasswordStore();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const handlePasswordReset = (values) => {
    console.log("Password reset values:", values);
    alert("Password reset successful!");
    navigation.goBack();
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 40,
      backgroundColor: Colors.background,
    },
    scrollView: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color: Colors.primary,
      textAlign: "center",
      marginTop: 40,
    },
    subtitle: {
      fontSize: 16,
      color: "#666",
      marginBottom: 30,
      textAlign: "center",
    },
    formContainer: {
      width: "100%",
    },
  });
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.scrollView}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>Please enter your new password</Text>

            <Formik
              initialValues={{ newPassword: "", confirmPassword: "" }}
              validationSchema={validationSchema}
              onSubmit={handlePasswordReset}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.formContainer}>
                  <Inputs
                    label="New Password"
                    value={values.newPassword}
                    onChangeText={handleChange("newPassword")}
                    onBlur={handleBlur("newPassword")}
                    placeholder="Enter new password"
                    secureTextEntry={!showPassword}
                    showPasswordToggle={true}
                    onTogglePassword={togglePassword}
                    error={errors.newPassword}
                    touched={touched.newPassword}
                    textColor={Colors.primary}
                    borderColor={Colors.primary}
                    placeholderTextColor="rgba(16, 35, 99, 0.5)"
                  />

                  <Inputs
                    label="Confirm Password"
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    placeholder="Confirm new password"
                    secureTextEntry={!showPassword}
                    showPasswordToggle={true}
                    onTogglePassword={togglePassword}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    textColor={Colors.primary}
                    borderColor={Colors.primary}
                    placeholderTextColor="rgba(16, 35, 99, 0.5)"
                  />

                  <Button
                    func={handleSubmit}
                    buttonColor={Colors.primary}
                    textColor="white"
                    label="Reset Password"
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
