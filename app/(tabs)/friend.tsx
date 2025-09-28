import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View>
      <Text style={styles.headerImage}>
        This is the profile page of Friends
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    top: 0,
    color: "#c92c2cff",
    bottom: -90,
    // left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
