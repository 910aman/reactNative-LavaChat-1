import { Tabs } from 'expo-router';
import React from 'react';

import { MyTabBar } from '@/components/TabBar';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <Tabs tabBar={props => <MyTabBar {...props} />}>
    <Tabs.Screen name='index' options={{title: "Home"}}/>
    <Tabs.Screen name='explore' options={{title: "Explore"}}/>
    <Tabs.Screen name='friend' options={{title: "Friends"}}/>
    <Tabs.Screen name='game' options={{title: "Game"}}/>
    <Tabs.Screen name='profile' options={{title: "Profile"}}/>
   </Tabs>
  );
}
