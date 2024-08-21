import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const screenWidth = Dimensions.get('screen').width;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0b3a73', // Set background color
          height: 60, // Set height
          marginBottom: 10, // Set margin bottom
          borderRadius: 50, // Set border radius
          width: screenWidth * .95, // Set width
          alignSelf: 'center', // Center the tab bar
          position: 'relative', // Position it absolutely
          bottom: 0, // Position at the bottom
          overflow: 'hidden', // Ensure border radius is visible
        },
        tabBarLabel: () => null,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cash' : 'cash-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="information"
        options={{
          title: 'Tips',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

