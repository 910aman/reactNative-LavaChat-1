import AllLanguageDropdown from "@/components/allLanguages";
import {
  FacebookIcon,
  GoogleIcon,
  SquareExclamationMark,
} from "@/constants/icons";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTermService = async () => {
    const url = "https://www.google.com";
    await WebBrowser.openBrowserAsync(url);
  };
  const handlePrivacyPolicy = async () => {
    // const url = "https://www.google.com";
    // await WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <>
          <AllLanguageDropdown />
        </>
        <TouchableOpacity
          style={{
            width: 32,
            top: 6,
            backgroundColor: "rgba(255,255,255,0.35)",
            borderRadius: 20,
            padding: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SquareExclamationMark width={18} height={18} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            {/* <Text style={styles.logoText}>Lava Chat</Text> */}
            <Image
              source={logo}
              style={styles.logoImage}
              resizeMode="contain"
            />
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

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <GoogleIcon width={28} height={28} />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
          {/* <Feather name="facebook" size={18} color="white" /> */}
          <FacebookIcon width={28} height={28} />
          <Text style={styles.facebookButtonText}>Login with facebook</Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 17,
        }}
      >
        <Text style={{ color: "#fff" }}>By Continuing, you agree to&nbsp;</Text>
        <TouchableOpacity onPress={handleTermService}>
          <Text style={{ color: "#0412cdff", textDecorationLine: "underline" }}>
            Terms of services
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#fff" }}>&nbsp;and&nbsp;</Text>
        <TouchableOpacity onPress={handlePrivacyPolicy}>
          <Text style={{ color: "#0412cdff", textDecorationLine: "underline" }}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: "#3fc1f3",
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
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
    zIndex: 1,
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
    // backgroundColor: '#000',
    marginTop: -10,
    // marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#f9c80e",
    borderRadius: 25,
    paddingVertical: 15,
    width: "100%",
    marginBottom: 10,
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
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 0.4,
    width: 10,
    backgroundColor: "#e7dadaff",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#ddd",
  },
  googleButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 8,
  },
  googleButton: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginVertical: 8,
    width: "100%",
    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },
  facebookButton: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginVertical: 8,
    width: "100%",
    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },
  facebookButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
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
