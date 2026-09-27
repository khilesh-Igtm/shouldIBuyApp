import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer, AppText, AppButton, AppCard } from '@/components/common';
import { spacing } from '@/constants/theme';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <AppText variant="caption" color="accent" style={styles.tag}>
          ONBOARDING
        </AppText>
        <AppText variant="display" color="primary" style={styles.title}>
          Your time has a price.
        </AppText>
        <AppText variant="body" color="secondary" style={styles.description}>
          WorkWorth shows how much working time your purchases really cost.
        </AppText>

        <AppCard variant="subtle" style={styles.card}>
          <AppText variant="callout" color="muted">
            Initial Onboarding Route (Navigation Scaffolding)
          </AppText>
        </AppCard>

        <View style={styles.buttonContainer}>
          <AppButton
            title="Continue to Setup"
            onPress={() => router.push('/onboarding/setup')}
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
