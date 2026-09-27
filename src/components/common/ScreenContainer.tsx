import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ViewStyle,
  StyleProp,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors, spacing } from '@/constants/theme';

export interface ScreenContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  withHorizontalPadding?: boolean;
  withBottomPadding?: boolean;
  safeAreaEdges?: ('top' | 'bottom' | 'left' | 'right')[];
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  keyboardAvoiding?: boolean;
}

export function ScreenContainer({
  children,
  scrollable = false,
  withHorizontalPadding = true,
  withBottomPadding = true,
  safeAreaEdges = ['top', 'bottom'],
  style,
  contentContainerStyle,
  keyboardAvoiding = Platform.OS === 'ios',
}: ScreenContainerProps) {
  const insets = useSafeAreaInsets();

  const edgeInsets: ViewStyle = {
    paddingTop: safeAreaEdges.includes('top') ? insets.top : 0,
    paddingBottom: safeAreaEdges.includes('bottom')
      ? Math.max(insets.bottom, withBottomPadding ? spacing.lg : 0)
      : withBottomPadding
      ? spacing.lg
      : 0,
    paddingLeft: safeAreaEdges.includes('left') ? insets.left : 0,
    paddingRight: safeAreaEdges.includes('right') ? insets.right : 0,
  };

  const horizontalPaddingStyle: ViewStyle = withHorizontalPadding
    ? { paddingHorizontal: spacing.lg }
    : {};

  const content = scrollable ? (
    <ScrollView
      style={[styles.scroll, style]}
      contentContainerStyle={[
        styles.scrollContent,
        horizontalPaddingStyle,
        contentContainerStyle,
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View
      style={[
        styles.fill,
        horizontalPaddingStyle,
        style,
      ]}
    >
      {children}
    </View>
  );

  const container = (
    <View style={[styles.container, edgeInsets]}>
      <StatusBar style="light" />
      {content}
    </View>
  );

  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {container}
      </KeyboardAvoidingView>
    );
  }

  return container;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fill: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
