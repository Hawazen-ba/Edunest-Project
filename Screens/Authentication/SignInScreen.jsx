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
import Svg, { Path } from "react-native-svg";
import * as Yup from "yup";
import { Formik } from "formik";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";
import usePasswordStore from "../../utils/PasswordStore";
import { useNavigation } from "@react-navigation/native";
import useColors from "../../assets/styles/colors";
import useAuthStore from "../../utils/AuthStore";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const validation = Yup.object({
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\+?[0-9]+$/, "Invalid phone number"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const SignInScreen = () => {
  const Colors = useColors();
  const { showPassword, togglePassword } = usePasswordStore();
  const { loggedIn } = useAuthStore();
  const navigation = useNavigation();

  const handleSignIn = (values) => {
    console.log("Sign In pressed");
    loggedIn({ phoneNumber: values.phoneNumber, role: "student" });
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
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
      color: "white",
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: 36,
      marginBottom: 12,
      marginTop: 30,
    },
    welcomeSubtitle: {
      color: "white",
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
      marginTop: 70,
      borderRadius: 120,
      backgroundColor: Colors.primary,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 3,
      borderColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    formSection: {
      flex: 1,
      paddingHorizontal: 40,
      paddingTop: 40,
    },
    signInTitle: {
      fontSize: 32,
      fontWeight: "600",
      color: Colors.primary,
      textAlign: "center",
      marginBottom: 40,
    },
    forgotPasswordContainer: {
      alignItems: "flex-end",
      marginBottom: 32,
    },
    forgotPasswordText: {
      color: Colors.tertiary,
      fontSize: 14,
      fontWeight: "500",
    },
  });
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.headerSection}>
        <Svg height={400} width={screenWidth} style={styles.headerSvg}>
          <Path
            d={`M0,0 L${screenWidth},0 L${screenWidth},320 
                Q${screenWidth / 2},380 0,320 Z`}
            fill="#102363"
          />
        </Svg>

        <SafeAreaView style={styles.headerContent}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>
              Welcome Back to Your{"\n"}School Space
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Sign In to Stay Connected
            </Text>
          </View>

          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo_2.png")}
              style={styles.logoCircle}
            />
          </View>
        </SafeAreaView>
      </View>

      <Formik
        initialValues={{ phoneNumber: "+216", password: "" }}
        validationSchema={validation}
        onSubmit={handleSignIn}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView style={styles.formSection}>
            <Text style={styles.signInTitle}>Sign In</Text>

            <Inputs
              label="Phone Number"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              placeholder="+216"
              keyboardType="phone-pad"
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              textColor={Colors.primary}
              borderColor={Colors.primary}
            />

            <Inputs
              label="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="••••••••••••"
              secureTextEntry={!showPassword}
              showPasswordToggle={true}
              onTogglePassword={togglePassword}
              error={errors.password}
              touched={touched.password}
              textColor={Colors.primary}
              borderColor={Colors.primary}
              placeholderTextColor="rgba(16, 35, 99, 0.5)"
            />

            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotPasswordContainer}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button
              func={handleSignIn}
              textColor={"white"}
              buttonColor={Colors.primary}
              label={"Sign In"}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={{ marginTop: 20, alignSelf: "center" }}
            >
              <Text style={{ color: "#102363", fontWeight: "bold" }}>
                Don't have an account?{" "}
                <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
