import React from 'react';
import {
  Pressable,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  View,
} from 'react-native';
import { colors, radius, spacing, typography } from '@/constants/theme';
import { AppText } from './AppText';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'money'
  | 'outline'
  | 'ghost'
  | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  accessibilityLabel,
}: AppButtonProps) {
  const isInteractive = !disabled && !loading;

  const getTextColor = (): string => {
    if (variant === 'primary') return colors.textInverse;
    if (variant === 'money') return colors.textInverse;
    if (variant === 'danger') return colors.textPrimary;
    if (variant === 'ghost') return colors.accent;
    if (variant === 'outline') return colors.textPrimary;
    return colors.textPrimary;
  };

  const getSpinnerColor = (): string => {
    if (variant === 'primary' || variant === 'money') return colors.textInverse;
    return colors.textPrimary;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={!isInteractive}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{ disabled: !isInteractive, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        pressed && isInteractive && styles.pressed,
        !isInteractive && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getSpinnerColor()} size="small" />
      ) : (
        <View style={styles.contentRow}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          <AppText
            variant={size === 'sm' ? 'caption' : size === 'md' ? 'callout' : 'headline'}
            style={[
              styles.text,
              { color: getTextColor() },
              textStyle,
            ]}
          >
            {title}
          </AppText>
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: spacing.sm,
  },
  iconRight: {
    marginLeft: spacing.sm,
  },
  text: {
    fontWeight: '600',
  },
  // Sizes (accessible touch heights)
  size_sm: {
    height: 38,
    paddingHorizontal: spacing.md,
  },
  size_md: {
    height: 46,
    paddingHorizontal: spacing.lg,
  },
  size_lg: {
    height: 54,
    paddingHorizontal: spacing.xxl,
    borderRadius: radius.lg,
  },
  // Variants
  primary: {
    backgroundColor: colors.accent,
  },
  money: {
    backgroundColor: colors.money,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: colors.danger,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.985 }],
  },
  disabled: {
    opacity: 0.45,
  },
});
