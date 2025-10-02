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
  // { label: "Hindi", value: "hi" },
  // { label: "Gujarati", value: "guj" },
];

const AllLanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectLanguage = ({ option }: any) => {
    setSelectedLanguage(option);
    setIsOpen(false);
    console.log("Selected language:", option.label);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Header/Button */}
      <Pressable
        onPress={toggleDropdown}
               style={({ pressed }) => [
          styles.headerButton,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <Text style={styles.headerText}>{selectedLanguage.label}</Text>
        <Text style={styles.arrowIcon}>{isOpen ? "▲" : "▼"}</Text>
      </Pressable>

      {/* --- THE MODAL FOR AUTO-CLOSE --- */}
      <Modal
        transparent={true}
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
        animationType="fade"
      >
        <Pressable style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
          <View style={styles.optionsContainerWrapper}>
            <ScrollView
              style={styles.scrollViewContent}
              showsVerticalScrollIndicator={false}
            >
              {languageOptions.map((option) => (
                <Pressable
                  key={option.value}
                  style={({ pressed }) => [
                    styles.optionItem,
                    { backgroundColor: pressed ? "#e0e0e0" : "#fff" },
                    selectedLanguage.value === option.value &&
                      styles.selectedOptionItem,
                  ]}
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
        </Pressable>
      </Modal>
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
    backgroundColor: "rgba(255,255,255,0.35)",
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

  // --- New Modal Styles ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
  },
  optionsContainerWrapper: {
    position: "absolute",
    top: 55,
    right: 30,
    zIndex: 12,
    width: 100,
    maxHeight: 200,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: "hidden",
  },
  // --- Options List Styles (Unchanged) ---
  scrollViewContent: {
    // Add padding if needed
  },
  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  selectedOptionItem: {
    backgroundColor: "#e0eaff",
  },
  optionText: {
    fontSize: 15,
    color: "#333",
  },
  selectedOptionText: {
    fontWeight: "600",
    color: "#4270DD",
  },
});

export default AllLanguageDropdown;
