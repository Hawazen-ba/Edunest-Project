import { SafeAreaView, StatusBar, Text, View } from "react-native";
import ContactComponent from "../../components/ContactComponent";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";

const ContactScreen = () => {
  const Colors = useColors();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 100,
          marginBottom: 150,
          flexDirection: "column",
          marginTop: 10,
        }}
      >
        <ContactComponent
          title={"Administration"}
          icon={"school-outline"}
          screen={"SubContact"}
        />
        <ContactComponent
          title={"Teachers"}
          icon={"people"}
          screen={"SubContact"}
        />
      </View>
    </View>
  );
};
export default ContactScreen;
