// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function Auth() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="forgot" options={{ headerShown: false }} />
    </Stack>
  );
}
