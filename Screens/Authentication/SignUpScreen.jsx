import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Svg, { Path } from "react-native-svg";
import * as Yup from "yup";
import { Formik } from "formik";
import Inputs from "../../components/Inputs";
import useAuthStore from "../../utils/AuthStore";
import Button from "../../components/Button";
import usePasswordStore from "../../utils/PasswordStore";
import { useNavigation } from "@react-navigation/native";
import useColors from "../../assets/styles/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const validation = Yup.object({
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\+?[0-9]+$/, "Invalid phone number"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUpScreen = () => {
  const { showPassword, togglePassword } = usePasswordStore();
  const { loggedIn } = useAuthStore();
  const navigation = useNavigation();

  const handleSignUp = async (values, { setSubmitting }) => {
    try {
      console.log("Signing up...");
      console.log(values);
      navigation.navigate("CompleteProfile");
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert("Error", "Sign up failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    headerSection: {
      height: 400,
      position: "relative",
    },
    headerSvg: {
      position: "absolute",
      top: 0,
      left: 0,
    },
    headerContent: {
      flex: 1,
      paddingHorizontal: 20,
      zIndex: 10,
    },
    welcomeSection: {
      alignItems: "center",
      marginBottom: 40,
    },
    welcomeTitle: {
      color: Colors.primary,
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: 36,
      marginBottom: 12,
      marginTop: 30,
    },
    welcomeSubtitle: {
      color: Colors.primary,
      fontSize: 16,
      opacity: 0.9,
      textAlign: "center",
    },
    logoContainer: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    },
    logoCircle: {
      width: 200,
      height: 200,
      marginTop: 10,
      borderRadius: 120,
      backgroundColor: Colors.primary,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 4,
      borderColor: Colors.primary,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    formSection: {
      flex: 1,
      paddingHorizontal: 40,
      paddingTop: 10,
      backgroundColor: Colors.primary,
    },
    signInTitle: {
      fontSize: 32,
      fontWeight: "600",
      color: "white",
      textAlign: "center",
      marginBottom: 20,
    },
    role: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
    },
    roleOptionText: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
    roleOption: {
      borderWidth: 2,
      borderColor: "white",
      paddingHorizontal: 25,
      marginHorizontal: 50,
      paddingVertical: 10,
      fontSize: 16,
      color: "white",
      borderRadius: 12,
      alignItems: "center",
      marginBottom: 10,
    },
    roleOptionSelected: {
      backgroundColor: "white",
      paddingHorizontal: 25,
      marginHorizontal: 50,
      paddingVertical: 10,
      fontSize: 16,
      color: Colors.primary,
      borderRadius: 12,
      alignItems: "center",
      marginBottom: 10,
    },
    roleOptionSelectedText: {
      color: Colors.primary,
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
    signUpButton: {
      backgroundColor: "white",
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: "center",
      marginBottom: 40,
      marginTop: 20,
    },
    signUpButtonText: {
      color: Colors.primary,
      fontSize: 18,
      fontWeight: "600",
    },
    disabledButton: {
      opacity: 0.6,
    },
  });
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.headerSection}>
        <Svg height={400} width={screenWidth} style={styles.headerSvg}>
          <Path
            d={`M0,0 L${screenWidth},0 L${screenWidth},270 
                Q${screenWidth / 2},370 0,270 Z`}
            fill="white"
          />
        </Svg>

        <SafeAreaView style={styles.headerContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>
              Welcome to the school{"\n"} Community
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Create your school account
            </Text>
          </View>

          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo_1.png")}
              style={styles.logoCircle}
            />
          </View>
        </SafeAreaView>
      </View>

      <Formik
        initialValues={{
          phoneNumber: "+216",
          password: "",
          confirmPassword: "",
          role: "",
        }}
        //validationSchema={validation}
        onSubmit={handleSignUp}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <ScrollView style={styles.formSection}>
            <Text style={styles.signInTitle}>Sign Up</Text>

            <Inputs
              label="Phone Number"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              placeholder="+216"
              keyboardType="number-pad"
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              textColor="white"
              borderColor="white"
            />

            <Inputs
              label="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="*********"
              secureTextEntry={!showPassword}
              showPasswordToggle={true}
              onTogglePassword={() => togglePassword(!showPassword)}
              error={errors.password}
              touched={touched.password}
              textColor="white"
              borderColor="white"
            />

            <Inputs
              label="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              placeholder="*********"
              secureTextEntry={!showPassword}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              textColor="white"
              borderColor="white"
            />

            <View style={styles.role}>
              <TouchableOpacity
                style={[
                  styles.roleOption,
                  values.role === "student" && styles.roleOptionSelected,
                ]}
                onPress={() => setFieldValue("role", "student")}
              >
                <Text
                  style={[
                    styles.roleOptionText,
                    values.role === "student" && styles.roleOptionSelectedText,
                  ]}
                >
                  Student
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.roleOption,
                  values.role === "parent" && styles.roleOptionSelected,
                ]}
                onPress={() => setFieldValue("role", "parent")}
              >
                <Text
                  style={[
                    styles.roleOptionText,
                    values.role === "parent" && styles.roleOptionSelectedText,
                  ]}
                >
                  Parent
                </Text>
              </TouchableOpacity>
            </View>

            <Button
              func={handleSubmit}
              buttonColor={"white"}
              textColor={Colors.primary}
              label={"Sign Up"}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={{ marginTop: 5, marginBottom: 30, alignSelf: "center" }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Already have an account?{" "}
                <Text style={{ textDecorationLine: "underline" }}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
