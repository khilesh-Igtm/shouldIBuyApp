import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';
import { colors, radius, spacing } from '@/constants/theme';

export type CardVariant = 'default' | 'subtle' | 'outline' | 'active';

export interface AppCardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: keyof typeof spacing;
  borderRadius?: keyof typeof radius;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export function AppCard({
  children,
  variant = 'default',
  padding = 'lg',
  borderRadius = 'lg',
  onPress,
  style,
  disabled = false,
}: AppCardProps) {
  const dynamicStyle: ViewStyle = {
    padding: spacing[padding],
    borderRadius: radius[borderRadius],
  };

  const cardStyle = [
    styles.base,
    styles[variant],
    dynamicStyle,
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          cardStyle,
          pressed && styles.pressed,
          disabled && styles.disabled,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    overflow: 'hidden',
  },
  default: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
  },
  subtle: {
    backgroundColor: colors.surfaceSubtle,
    borderColor: colors.borderSubtle,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  active: {
    backgroundColor: colors.surfaceActive,
    borderColor: colors.accent,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    opacity: 0.5,
  },
});
