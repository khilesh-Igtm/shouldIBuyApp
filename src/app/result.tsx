import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer, AppText, AppButton, AppCard } from '@/components/common';
import { spacing } from '@/constants/theme';

export default function ResultScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <AppText variant="caption" color="money" style={styles.tag}>
          RESULT
        </AppText>
        <AppText variant="display" color="primary" style={styles.title}>
          Time Breakdown
        </AppText>
        <AppText variant="body" color="secondary" style={styles.description}>
          That's 75 hours of your working life.
        </AppText>

        <AppCard variant="default" style={styles.card}>
          <AppText variant="headline" color="primary" align="center">
            Sony WH-1000XM5
          </AppText>
          <AppText variant="display" color="accent" align="center" style={styles.timeValue}>
            75h 27m
          </AppText>
          <AppText variant="callout" color="muted" align="center">
            ≈ 9.4 working days
          </AppText>
        </AppCard>

        <View style={styles.buttonGroup}>
          <AppButton
            title="Done (Back to Home)"
            variant="primary"
            onPress={() => router.replace('/(tabs)/index')}
          />
          <View style={styles.spacer} />
          <AppButton
            title="Calculate Another"
            variant="outline"
            onPress={() => router.back()}
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
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  timeValue: {
    marginVertical: spacing.md,
  },
  buttonGroup: {
    gap: spacing.sm,
  },
  spacer: {
    height: spacing.xs,
  },
});
