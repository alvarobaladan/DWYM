import React from 'react';
import { Platform, Image } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          headerShown: true,
          headerTitle: 'Appasear Viajes',
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: () => <Image source={require('@/assets/images/home.png')} style={{ width: 24, height: 24 }} />,
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: 'Agregar',
            tabBarIcon: () => <Image source={require('@/assets/images/add.png')} style={{ width: 24, height: 24 }} />,
          }}
        />
        <Tabs.Screen
          name="details"
          options={{
            title: 'Detalles',
            tabBarIcon: () => <Image source={require('@/assets/images/edit.png')} style={{ width: 24, height: 24 }} />,
          }}
        />
      </Tabs>
    );
  }