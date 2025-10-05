import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const TOKEN_KEY = "auth-token";

// 1. Define the Interface/Type for the context value
interface AuthContextType {
  user: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Initialize state with the types matching the interface
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // --- A. Initial Load: Check for stored token ---
  useEffect(() => {
    async function loadToken() {
      try {
        const token: string | null = await SecureStore.getItemAsync(TOKEN_KEY);
        if (token) {
          console.log("Token found:", token);
          // Set the user state as the token string
          setUser(token);
        }
      } catch (e) {
        console.error("Failed to load token from SecureStore:", e);
      } finally {
        setIsLoading(false);
      }
    }
    loadToken();
  }, []);

  // --- B. Authentication Functions ---
  const signIn = async (token: string) => {
    try {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
      setUser(token);
      router.replace("/(tabs)");
    } catch (e) {
      console.error("Sign In failed:", e);
    }
  };

  // SignOut 
  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      setUser(null);
      router.replace("/(auth)/login");
    } catch (e) {
      console.error("Sign Out failed:", e);
    }
  };

  // --- C. Context Value ---
  // The 'value' object MUST conform to the AuthContextType interface
  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signOut,
  };

  // The error is fixed because the value type now matches the context type
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// 4. Custom Hook to consume the context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
