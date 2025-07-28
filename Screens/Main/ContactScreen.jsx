import { SafeAreaView, StatusBar, Text, View } from "react-native";
import ContactComponent from "../../components/ContactComponent";
import GeneralHeader from "../../components/GeneralHeader";
import useColors from "../../assets/styles/colors";

const ContactScreen = ({ route }) => {
  const { role } = route.params || {};
  const Colors = useColors();

  const roleBasedContacts = {
    student: [
      { title: "Administration", icon: "school-outline" },
      { title: "Teachers", icon: "people" },
    ],

    teacher: [
      { title: "Administration", icon: "school-outline" },
      { title: "Parents", icon: "people-outline" },
    ],
  };

  const contactsToRender = roleBasedContacts[role] || [];
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
        {contactsToRender.map((contact, index) => (
          <ContactComponent
            key={index}
            icon={contact.icon}
            title={contact.title}
          />
        ))}
      </View>
    </View>
  );
};
export default ContactScreen;
