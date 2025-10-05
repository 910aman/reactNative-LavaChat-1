// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function Screens() {
  return (
    <Stack>
      <Stack.Screen name="userProfile" options={{ headerShown: false }} />
      <Stack.Screen name="forgot" options={{ headerShown: false }} />
    </Stack>
  );
}
