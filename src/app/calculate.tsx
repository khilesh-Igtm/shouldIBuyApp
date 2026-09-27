import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenContainer, AppText, AppButton, AppCard } from '@/components/common';
import { spacing } from '@/constants/theme';

export default function CalculateModalScreen() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <AppText variant="caption" color="accent" style={styles.tag}>
          CALCULATE
        </AppText>
        <AppText variant="display" color="primary" style={styles.title}>
          New Purchase
        </AppText>
        <AppText variant="body" color="secondary" style={styles.description}>
          Convert price into required working hours.
        </AppText>

        <AppCard variant="subtle" style={styles.card}>
          <AppText variant="callout" color="muted" align="center">
            Purchase Form Scaffolding
          </AppText>
        </AppCard>

        <View style={styles.buttonGroup}>
          <AppButton
            title="Calculate (Go to Result)"
            variant="primary"
            onPress={() => router.push('/result')}
          />
          <View style={styles.spacer} />
          <AppButton
            title="Cancel"
            variant="ghost"
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
  },
  buttonGroup: {
    gap: spacing.sm,
  },
  spacer: {
    height: spacing.xs,
  },
});
