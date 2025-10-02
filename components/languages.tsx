import React, { useState } from "react";
import {
    Dimensions,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

// Get screen width for potential responsive adjustments
const { width } = Dimensions.get("window");

const languageOptions = [
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "Gujarati", value: "guj" },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]); // Default to English

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectLanguage = ({ option }: any) => {
    setSelectedLanguage(option);
    setIsOpen(false); // Close the dropdown after selection
    console.log("Selected language:", option.label);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Header/Button */}
      <Pressable onPress={toggleDropdown}>
        <View style={styles.headerButton}>
          <Text style={styles.headerText}>{selectedLanguage.label}</Text>
          <Text style={styles.arrowIcon}>{isOpen ? "▲" : "▼"}</Text>
        </View>
      </Pressable>

      {/* The Language Options List */}
      {isOpen && (
        <Modal
          transparent={true}
          visible={isOpen}
          onRequestClose={() => setIsOpen(false)}
          animationType="fade"
        >
          <View style={styles.optionsContainer}>
            <ScrollView
              style={styles.scrollViewContent}
              showsVerticalScrollIndicator={false} // Hide scroll indicator
            >
              {languageOptions.map((option) => (
                <Pressable
                  key={option.value}
                  style={({ pressed }) => [
                    styles.optionItem,
                    { backgroundColor: pressed ? "#e0e0e0" : "#fff" },
                    selectedLanguage.value === option.value &&
                      styles.selectedOptionItem, // Highlight selected
                  ]}
                //   onPress={() => handleSelectLanguage(option)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedLanguage.value === option.value &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 5,
    right: 1,
    position: "absolute",
    zIndex: 10,
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#fefefeff",
    backdropFilter: "blur(10px)",
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255,255,255,0.15)",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  arrowIcon: {
    color: "white",
    fontSize: 10,
  },
  optionsContainer: {
    position: "absolute",
    zIndex: 12,
    top: 55,
    right: 30,
    width: 100,
    maxHeight: 200, // Limit height and enable scrolling
    backgroundColor: "transparent",
    borderRadius: 8, // Slightly rounded corners for the list
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden", // Ensures rounded corners clip content
  },
  scrollViewContent: {
    // This style is applied directly to ScrollView
    // Can add padding if desired
  },
  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0", // Light separator
  },
  selectedOptionItem: {
    backgroundColor: "#e0eaff", // Light blue background for selected item
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  selectedOptionText: {
    fontWeight: "600",
    color: "#4270DD", // Darker blue for selected text
  },
});

export default LanguageDropdown;
