import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { colors, typography } from '@/constants/theme';

export type TextVariant = keyof typeof typography;
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'inverse'
  | 'accent'
  | 'money'
  | 'danger'
  | 'warning';

export interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: TextColor | string;
  align?: TextStyle['textAlign'];
  children?: React.ReactNode;
}

const colorMap: Record<TextColor, string> = {
  primary: colors.textPrimary,
  secondary: colors.textSecondary,
  muted: colors.textMuted,
  inverse: colors.textInverse,
  accent: colors.accent,
  money: colors.money,
  danger: colors.danger,
  warning: colors.warning,
};

export function AppText({
  variant = 'body',
  color = 'primary',
  align = 'left',
  style,
  children,
  ...rest
}: AppTextProps) {
  const resolvedColor = colorMap[color as TextColor] || color;
  const typographyStyle = typography[variant];

  return (
    <Text
      style={[
        typographyStyle,
        { color: resolvedColor, textAlign: align },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
