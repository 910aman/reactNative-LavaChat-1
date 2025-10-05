import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../provider/AuthProvider';

export default function ProfileScreen() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to your Profile!</Text>
      <Button title="Log Out" onPress={signOut} />
    </View>
  );
}