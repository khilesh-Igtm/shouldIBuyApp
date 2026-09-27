import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer, AppText, AppButton, AppCard } from '@/components/common';
import { spacing } from '@/constants/theme';

export default function SetupScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <AppText variant="caption" color="money" style={styles.tag}>
          INCOME SETUP
        </AppText>
        <AppText variant="display" color="primary" style={styles.title}>
          Set Your Income
        </AppText>
        <AppText variant="body" color="secondary" style={styles.description}>
          Calculate your true hourly worth based on working hours.
        </AppText>

        <AppCard variant="subtle" style={styles.card}>
          <AppText variant="callout" color="muted">
            Income Setup Route (Navigation Scaffolding)
          </AppText>
        </AppCard>

        <View style={styles.buttonContainer}>
          <AppButton
            title="Enter Dashboard"
            variant="money"
            onPress={() => router.replace('/(tabs)/index')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  tag: {
    marginBottom: spacing.xs,
    letterSpacing: 1.5,
  },
  title: {
    marginBottom: spacing.md,
  },
  description: {
    marginBottom: spacing.xl,
  },
  card: {
    marginBottom: spacing.xxl,
  },
  buttonContainer: {
    marginTop: spacing.lg,
  },
});
