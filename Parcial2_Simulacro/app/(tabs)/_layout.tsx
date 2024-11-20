import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { StyleSheet, TextInput, SafeAreaView, Text, View, TouchableOpacity } from "react-native";

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
            //tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="details"
          options={{
            title: 'Detalles',
            //tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: 'Agregar',
            //tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        />
      </Tabs>
    );
  }