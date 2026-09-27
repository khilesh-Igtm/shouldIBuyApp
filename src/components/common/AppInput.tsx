import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { colors, radius, spacing, typography } from '@/constants/theme';
import { AppText } from './AppText';

export interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftAccessory?: React.ReactNode;
  rightAccessory?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  isRequired?: boolean;
}

export function AppInput({
  label,
  error,
  helperText,
  leftAccessory,
  rightAccessory,
  containerStyle,
  inputStyle,
  isRequired,
  onFocus,
  onBlur,
  style,
  ...textInputProps
}: AppInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const hasError = Boolean(error);

  const borderStyle = hasError
    ? styles.inputBorderError
    : isFocused
    ? styles.inputBorderFocused
    : styles.inputBorderDefault;

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && (
        <View style={styles.labelRow}>
          <AppText variant="caption" color="secondary" style={styles.label}>
            {label}
          </AppText>
          {isRequired && (
            <AppText variant="caption" color="accent" style={styles.requiredStar}>
              *
            </AppText>
          )}
        </View>
      )}

      <View style={[styles.inputContainer, borderStyle]}>
        {leftAccessory && <View style={styles.accessoryLeft}>{leftAccessory}</View>}

        <TextInput
          style={[styles.input, inputStyle, style]}
          placeholderTextColor={colors.textMuted}
          onFocus={handleFocus}
          onBlur={handleBlur}
          selectionColor={colors.accent}
          accessibilityLabel={label || textInputProps.placeholder}
          accessibilityRole="text"
          {...textInputProps}
        />

        {rightAccessory && (
          <View style={styles.accessoryRight}>{rightAccessory}</View>
        )}
      </View>

      {hasError ? (
        <AppText variant="caption" color="danger" style={styles.feedbackText}>
          {error}
        </AppText>
      ) : helperText ? (
        <AppText variant="caption" color="muted" style={styles.feedbackText}>
          {helperText}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.lg,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  label: {
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  requiredStar: {
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    minHeight: 52,
    paddingHorizontal: spacing.md,
  },
  inputBorderDefault: {
    borderColor: colors.border,
  },
  inputBorderFocused: {
    borderColor: colors.borderFocus,
    backgroundColor: colors.surfaceSubtle,
  },
  inputBorderError: {
    borderColor: colors.danger,
    backgroundColor: 'rgba(248, 113, 113, 0.05)',
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: typography.body.fontSize,
    height: '100%',
    paddingVertical: spacing.sm,
  },
  accessoryLeft: {
    marginRight: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accessoryRight: {
    marginLeft: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackText: {
    marginTop: spacing.xs,
    marginLeft: spacing.xs,
  },
});
