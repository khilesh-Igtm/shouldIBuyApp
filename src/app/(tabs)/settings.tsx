import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenContainer, AppText, AppCard } from '@/components/common';
import { spacing } from '@/constants/theme';

export default function SettingsScreen() {
  return (
    <ScreenContainer>
      <View style={styles.content}>
        <AppText variant="caption" color="accent" style={styles.tag}>
          SETTINGS
        </AppText>
        <AppText variant="display" color="primary" style={styles.title}>
          Preferences
        </AppText>
        <AppText variant="body" color="secondary" style={styles.description}>
          Manage income settings and app preferences.
        </AppText>

        <AppCard variant="subtle" style={styles.card}>
          <AppText variant="callout" color="muted" align="center">
            Settings & Reset options will appear here. (Navigation Scaffolding)
          </AppText>
        </AppCard>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: spacing.xl,
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
  },
});
