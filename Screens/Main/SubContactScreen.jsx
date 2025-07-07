import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import GeneralHeader from "../../components/GeneralHeader";
import ContactCard from "../../components/ContactCard";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import useColors from "../../assets/styles/colors";
const contacts = [
  {
    id: 1,
    name: "John Doe",
    phone: "+216 51 234 567",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+216 59 876 543",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Robert Johnson",
    phone: "+216 52 468 102",
    email: "robert.j@example.com",
  },
  {
    id: 4,
    name: "Emily Davis",
    phone: "+216 53 691 215",
    email: "emily.davis@example.com",
  },
  {
    id: 5,
    name: "Michael Wilson",
    phone: "+216 58 024 679",
    email: "michael.w@example.com",
  },
  {
    id: 6,
    name: "Sarah Brown",
    phone: "+216 53 456 789",
    email: "sarah.brown@example.com",
  },
  {
    id: 7,
    name: "David Taylor",
    phone: "+216 56 543 210",
    email: "david.t@example.com",
  },
  {
    id: 8,
    name: "Jessica Martinez",
    phone: "+216 57 890 123",
    email: "jessica.m@example.com",
  },
  {
    id: 9,
    name: "Thomas Anderson",
    phone: "+216 51 357 924",
    email: "thomas.a@example.com",
  },
  {
    id: 10,
    name: "Lisa Jackson",
    phone: "+216 54 680 135",
    email: "lisa.jackson@example.com",
  },
];
const SubContactScreen = ({ route }) => {
  const { title } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const Colors = useColors();
  const styles = StyleSheet.create({
    searchBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 25,
      margin: 10,
      paddingHorizontal: 15,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      height: 50,
      fontSize: 16,
      color: Colors.primary,
    },
    clearButton: {
      padding: 10,
    },
    listContainer: {
      paddingBottom: 20,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    resultsContainer: {
      flex: 1,
      padding: 10,
    },
    resultsHeader: {
      paddingHorizontal: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    resultsTitle: {
      color: Colors.color3,
      fontSize: 16,
      fontWeight: "500",
    },
    resultsCount: {
      fontSize: 14,
      color: "#666",
    },
    noResultsContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    noResultsText: {
      fontSize: 24,
      marginBottom: 180,
      color: "#666",
    },
    recentContainer: {
      flex: 1,
      padding: 10,
    },
    recentHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    recentTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    clearAllText: {
      color: Colors.primary,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
        <GeneralHeader
          title={title}
          subtitle={`${title} Contacts`}
          showBackArrow={true}
        />

        <View style={styles.searchBarContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search contacts..."
            value={searchQuery}
            onChangeText={handleSearchChange}
            placeholderTextColor="#999"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSearchQuery("")}
            >
              <Ionicons name="close-circle" size={18} color="#999" />
            </TouchableOpacity>
          )}
        </View>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FF6B6B" />
          </View>
        ) : searchQuery.length > 0 ? (
          <View style={styles.resultsContainer}>
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsTitle}>
                Results for "{searchQuery}"
              </Text>
              {filteredContacts.length > 0 && (
                <Text style={styles.resultsCount}>
                  {filteredContacts.length} found
                </Text>
              )}
            </View>

            {filteredContacts.length > 0 ? (
              <FlatList
                data={filteredContacts}
                renderItem={({ item }) => (
                  <ContactCard
                    name={item.name}
                    phone={item.phone}
                    emailvar={item.email}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
              />
            ) : (
              <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>No contacts found</Text>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.recentContainer}>
            <View style={styles.recentHeader}>
              <FlatList
                data={filteredContacts}
                renderItem={({ item }) => (
                  <ContactCard
                    name={item.name}
                    phone={item.phone}
                    emailvar={item.email}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
              />
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SubContactScreen;
