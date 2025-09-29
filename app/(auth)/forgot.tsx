import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendCode = () => {
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    // simulate sending code
    setSent(true);
    Alert.alert("Code Sent", "A 6-digit code has been sent to your email.");
  };

  const handleValidate = () => {
    if (code.length !== 6) {
      Alert.alert("Invalid Code", "Please enter the 6-digit code.");
      return;
    }
    // simulate validation
    Alert.alert("Success", "Password reset verified!");
    router.replace("/(auth)/login"); // redirect to login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <View style={styles.innerContainer}>
        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Feather name="mail" size={20} color="#333" style={styles.icon} />
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            placeholderTextColor="#666"
          />
        </View>

        {/* Send Code Button */}
        {/* <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
        <Text style={styles.sendButtonText}>Send Code</Text>
      </TouchableOpacity> */}

        {/* 6-digit Code Input */}
        {/* {sent && ( */}
        <>
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#333" style={styles.icon} />
            <TextInput
              placeholder="Enter 6-digit code"
              value={code}
              onChangeText={setCode}
              style={styles.input}
              keyboardType="numeric"
              maxLength={6}
              placeholderTextColor="#666"
            />
          </View>

          {/* Validate Button */}
          <TouchableOpacity
            style={styles.validateButton}
            onPress={handleValidate}
          >
            <Text style={styles.validateButtonText}>Validate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backToLoginStyle}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.backToLogin}>back to Login!</Text>
          </TouchableOpacity>
        </>
        {/* )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3fc1f3",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 50,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#3fc1f3",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 30,
  },
  inputWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    height: 50,
    width: "100%",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  sendButton: {
    backgroundColor: "#f9c80e",
    borderRadius: 25,
    paddingVertical: 15,
    width: "100%",
    marginBottom: 20,
  },
  sendButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  validateButton: {
    backgroundColor: "#f9c80e",
    borderRadius: 25,
    paddingVertical: 15,
    // paddingHorizontal: 40,
    width: "100%",
    marginTop: 10,
  },
  validateButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  backToLoginStyle: {
    width: "100%",
  },
  backToLogin: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 5,
    width: "100%",
  },
});
