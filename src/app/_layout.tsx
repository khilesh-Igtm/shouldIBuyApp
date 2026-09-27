import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/constants/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding/index" />
      <Stack.Screen name="onboarding/setup" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="calculate"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen name="result" />
    </Stack>
  );
}
