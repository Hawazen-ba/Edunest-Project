import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { OnboardFlow } from "react-native-onboard";
import Fonts from "../../assets/styles/fonts";
import { TouchableWithoutFeedback } from "react-native";
import useAuthStore from "../../utils/AuthStore";
import useColors from "../../assets/styles/colors";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const Colors = useColors();
  const { isLoggedIn } = useAuthStore();
  const handleOnboardingComplete = async () => {
    // isLoggedIn ? navigation.navigate("Home") :
    navigation.navigate("Unauthorized");
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    onboardFlow: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    image: {
      width: width * 0.7,
      height: height * 0.55,
      alignSelf: "center",
    },
    imageContainer: {
      marginBottom: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: Colors.primary,
      fontSize: 24,
      fontFamily: Fonts.bold,
      textAlign: "center",
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    primaryButton: {
      backgroundColor: Colors.primary,
      borderRadius: 25,
      marginBottom: 20,
    },
    primaryButtonText: {
      color: "white",
      fontSize: 16,
      fontFamily: Fonts.regular,
    },
    subtitle: {
      color: Colors.subtitle,
      fontSize: 16,
      textAlign: "center",
      paddingHorizontal: 20,
    },
  });
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <OnboardFlow
          style={styles.onboardFlow}
          primaryButtonStyle={styles.primaryButton}
          primaryButtonTextStyle={styles.primaryButtonText}
          pages={[
            {
              title: "Mark Your Homework As Completed",
              subtitle:
                "Easily track and complete your assignments with our homework management system",
              titleStyle: styles.title,
              subtitleStyle: styles.subtitle,
              imageComponent: (
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/Onboarding1.png")}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ),
            },
            {
              title: "Rectify Your Attendance",
              subtitle:
                "Quickly report and correct any attendance discrepancies with just a few taps",
              titleStyle: styles.title,
              subtitleStyle: styles.subtitle,
              imageComponent: (
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/Onboarding2.png")}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ),
            },
            {
              title: "Student Exam & Report Cards",
              subtitle:
                "Access your exam results and comprehensive report cards anytime, anywhere",
              titleStyle: styles.title,
              subtitleStyle: styles.subtitle,
              imageComponent: (
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/Onboarding3.png")}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ),
            },
          ]}
          onDone={handleOnboardingComplete}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OnboardingScreen;
