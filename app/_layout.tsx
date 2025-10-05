import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
// eslint-disable-next-line import/no-named-as-default
import AuthProvider, { useAuth } from "./provider/AuthProvider";

function InitialNavigator() {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  // useEffect(() => {
  //   if (isLoading) return;
  //   const inAuthGroup = segments[0] === "(auth)";

  //   // User is logged in AND is currently in the auth group -> Redirect to home/tabs
  //   if (user && inAuthGroup) {
  //     router.replace("/(tabs)");
  //   }
    
  //   else if (!user && !inAuthGroup) {
  //     router.replace("/(auth)/login"); // Or simply '/(auth)'
  //   }
  // }, [user, isLoading, segments, router]);

  // Conditionally rendering the stack is simpler with redirects handled above
  
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
     
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* Wrap everything in your AuthProvider to get the state */}
      <AuthProvider>
        <InitialNavigator />
      </AuthProvider>
      <StatusBar hidden={true} />
    </ThemeProvider>
  );
}
