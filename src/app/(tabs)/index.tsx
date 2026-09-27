import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer, AppText, AppButton, AppCard } from '@/components/common';
import { spacing } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <AppText variant="caption" color="accent" style={styles.tag}>
          DASHBOARD
        </AppText>
        <AppText variant="display" color="primary" style={styles.title}>
          WorkWorth
        </AppText>
        <AppText variant="body" color="secondary" style={styles.description}>
          Your hourly time worth dashboard.
        </AppText>

        <AppCard variant="default" style={styles.card}>
          <AppText variant="caption" color="textMuted">
            YOUR TIME IS WORTH
          </AppText>
          <AppText variant="hero" color="money">
            ₹398
          </AppText>
          <AppText variant="callout" color="secondary">
            / hour
          </AppText>
        </AppCard>

        <View style={styles.buttonContainer}>
          <AppButton
            title="Calculate a Purchase"
            onPress={() => router.push('/calculate')}
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
    marginBottom: spacing.xs,
  },
  description: {
    marginBottom: spacing.xl,
  },
  card: {
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  buttonContainer: {
    marginTop: spacing.sm,
  },
});
