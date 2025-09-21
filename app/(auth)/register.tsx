import { Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backText}>
        <Text style={styles.backText}>&lt; Back</Text>
      </TouchableOpacity>

      <Text style={styles.signUpTitle}>SIGN UP</Text>

      <View style={styles.inputGroup}>
        <View style={styles.inputWrapper}>
          <Feather name="user" size={20} color="#333" style={styles.icon} />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Feather name="mail" size={20} color="#333" style={styles.icon} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
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

        <View style={styles.inputWrapper}>
          <Feather name="home" size={20} color="#333" style={styles.icon} />
          <TextInput
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
            style={styles.input}
            placeholderTextColor="#666"
          />
          {/* You can replace the dropdown icon below with a custom dropdown component */}
          <Feather
            name="chevron-down"
            size={20}
            color="#333"
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={18} color="white" />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Feather name="facebook" size={18} color="white" />
        <Text style={styles.facebookButtonText}>Sign up with facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.bottomText}>
          Already have account? <Text style={styles.linkText}>Log in</Text>
        </Text>
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
    marginTop: 5,
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
    backgroundColor: "#705ec8",
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
    // alignSelf: "flex-start",
    width: '100%',
    alignItems: 'flex-start',
    // justifyContent: 'flex-start
    color: "#fff",
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
