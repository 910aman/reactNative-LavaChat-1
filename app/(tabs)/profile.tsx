import { PersonIconVector, RightArrowIcon } from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import Gradient_Background_Image from require();

// --- Reusable Component for Menu Items ---
const MenuItem = ({ iconText, title }: any) => {
  const handlePress = () => {
    // This is the onClick implementation.
    // You would replace this with actual navigation or state logic.
    Alert.alert("Action", `${title} button pressed!`);
  };

  return (
    <TouchableOpacity style={styles.menuItem} onPress={handlePress}>
      <Text style={styles.menuIcon}>{iconText}</Text>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.arrowIcon}>
        <RightArrowIcon color={"#dfefedff"} />
      </Text>
    </TouchableOpacity>
  );
};

// --- Main Profile Component ---
const ProfileScreen = () => {
  // Mock data for the profile
  const profileData = {
    username: "VENUS 🪐",
    id: "140044",
    follow: 12,
    fans: 289,
    visitors: 16662,
    avatarUri: "",
  };

  return (
    <ScrollView style={styles.container}>
      {/* --- Simulated Gradient Background (No Package) --- */}

      <Image
        source={require("../../assets/images/sky-light-blue-gradient-color-1.png")}
        style={styles.headerBackground}
        resizeMode="stretch"
      />

      {/* --- Top Profile Section --- */}
      <View style={styles.profileSection}>
        {/* Avatar and Info */}
        <TouchableOpacity onPress={() => router.push('/(screens)/userProfile')}>
          <View style={styles.avatarContainer}>
            <PersonIconVector />
            {/* {profileData.avatarUri !== "" ? (
            // <PersonIconVector />
            <Image
              source={{ uri: profileData.avatarUri }}
              style={styles.avatar}
            />
          ) : (
            <Image
              source={{ uri: profileData.avatarUri }}
              style={styles.avatar}
            />
          )} */}
            <View style={styles.avatarOverlay} />
          </View>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.usernameText}>{profileData.username}</Text>
          <View style={styles.idContainer}>
            <Text style={styles.idText}>ID {profileData.id}</Text>
            {/* <View style={styles.redBadge} /> */}
          </View>
        </View>

        {/* Swap Icon Button (Top Right) */}
        {/* <TouchableOpacity style={styles.swapButton}>
          <Text style={styles.swapIcon}>⇆</Text>
        </TouchableOpacity> */}
      </View>

      {/* --- Stats and Family Section --- */}
      <View style={styles.statsFamilySection}>
        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profileData.follow}</Text>
            <Text style={styles.statLabel}>Follow</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profileData.fans}</Text>
            <Text style={styles.statLabel}>Fans</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profileData.visitors}</Text>
            <Text style={styles.statLabel}>Visitors</Text>
            <View style={styles.redDot} />
          </View>
        </View>

        {/* Family Badge */}
        <View style={styles.familyBadge}>
          <Text style={styles.familyText}>👑 FAMILY</Text>
        </View>
      </View>

      {/* --- Menu List Section (Uses TouchableOpacity for all items) --- */}
      <View style={styles.menuList}>
        <MenuItem iconText="💰" title="Recharge & Wallet" />
        <MenuItem iconText="🛒" title="Store" />
        <MenuItem iconText="🎒" title="Backpack" />
        <MenuItem iconText="🏡" title="Love House" />
        <MenuItem iconText="💖" title="CP Level" />
        <MenuItem iconText="⭐" title="Medal" />
        <MenuItem iconText="🛒" title="Aristocracy" />
        <MenuItem iconText="🎒" title="SVIP" />
        <MenuItem iconText="🏡" title="Customer Service" />
        <MenuItem iconText="💖" title="Level" />
        <MenuItem iconText="⭐" title="Super Supporter" />
        <MenuItem iconText="⭐" title="Setting" />
      </View>
    </ScrollView>
  );
};

// --- Stylesheet ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff",
    marginBottom: 80,
  },

  headerBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: 1000,
    flex: 1,
    flexGrow: 1,
  },

  // --- Profile Section Styles ---
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    // Ensure this content is above the fake gradient layers
    zIndex: 10,
  },
  avatarContainer: {
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f6d608ff",
    backgroundColor: "#fff",
    marginRight: 15,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  avatarOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 40,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  idContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  idText: {
    fontSize: 12,
    color: "#fff",
    backgroundColor: "#d9a6ff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontWeight: "bold",
  },
  redBadge: {
    width: 20,
    height: 10,
    backgroundColor: "red",
    marginLeft: 5,
    borderRadius: 5,
  },
  swapButton: {
    padding: 10,
    position: "absolute",
    top: 60,
    right: 15,
  },
  swapIcon: {
    fontSize: 24,
    color: "#555",
  },

  // --- Stats and Family Section Styles ---
  statsFamilySection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 1,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginRight: 15,
  },
  statItem: {
    alignItems: "center",
    position: "relative",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  statLabel: {
    fontSize: 12,
    color: "#000",
  },
  redDot: {
    position: "absolute",
    top: 0,
    right: -10,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "red",
  },
  familyBadge: {
    backgroundColor: "#ffe0b3",
    borderColor: "#ffcc80",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  familyText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#e69900",
  },

  // --- Menu List Styles (Applies to the TouchableOpacity/MenuItem) ---
  menuList: {
    paddingHorizontal: 10,
    // backgroundColor: "#fff",
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#eee",
  },
  menuIcon: {
    fontSize: 20,
    width: 40,
    textAlign: "center",
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: "#dfefedff",
    marginLeft: 10,
  },
  arrowIcon: {
    fontSize: 18,
    color: "#ccc",
  },
});

export default ProfileScreen;
