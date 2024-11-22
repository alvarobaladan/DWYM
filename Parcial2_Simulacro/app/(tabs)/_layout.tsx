import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Image, StyleSheet, TextInput, SafeAreaView, Text, View, TouchableOpacity } from "react-native";

export default function TabLayout() {
  
    return (
      <Tabs
        screenOptions={{
          headerShown: true,
          headerTitle: 'NASApp',
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
      </Tabs>
    );
  }