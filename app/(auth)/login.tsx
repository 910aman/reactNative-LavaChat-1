import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const logo = require("../../assets/images/lava_chat_logo.jpeg");
// const logo = '../assets/lava_chat_logo.jpeg';

export default function Login({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoPlaceholder}>
          {/* <Text style={styles.logoText}>Lava Chat</Text> */}
          <Image source={logo} style={styles.logoImage} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <View style={styles.inputWrapper}>
          <Feather name="user" size={20} color="#333" style={styles.icon} />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Feather name="key" size={20} color="#333" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity onPress={() => router.push("/(auth)/forgot")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/(tabs)")}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={18} color="white" />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Feather name="facebook" size={18} color="white" />
        <Text style={styles.facebookButtonText}>Login with facebook</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: "#3fc1f3",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  inputGroup: {
    width: "100%",
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
  },
  icon: {
    marginRight: 20,
  },
  input: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  forgotPassword: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
    // marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#f9c80e",
    borderRadius: 25,
    paddingVertical: 15,
    width: "100%",
    marginBottom: 20,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  loginButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  googleButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 8,
  },
  googleButton: {
    backgroundColor: "#db0909ff",
    borderRadius: 25,
    flexDirection: "row",
    paddingVertical: 12,
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "#1877F2",
    borderRadius: 25,
    flexDirection: "row",
    paddingVertical: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  facebookButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 8,
  },
  bottomText: {
    color: "white",
    marginTop: 20,
  },
  linkText: {
    color: "#e63946",
    fontWeight: "bold",
  },
  backText: {
    alignSelf: "flex-start",
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 18,
  },
  signUpTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 30,
  },
});
