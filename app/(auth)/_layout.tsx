// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function Auth() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false, navigationBarHidden: true }} />
    </Stack>
  );
}
