export const colors = {
  // Backgrounds
  background: '#090A0F',
  backgroundElevated: '#0F121C',

  // Surfaces & Cards
  surface: '#141824',
  surfaceSubtle: '#191E2E',
  surfaceActive: '#1F263A',

  // Borders
  border: '#232A3E',
  borderSubtle: '#1C2233',
  borderFocus: '#38BDF8',

  // Text
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  textInverse: '#090A0F',

  // Accents & Status
  accent: '#38BDF8', // Cyan / Sky - crisp time highlight
  accentSubtle: 'rgba(56, 189, 248, 0.12)',
  accentGlow: 'rgba(56, 189, 248, 0.25)',

  // Money & Wealth Accent
  money: '#34D399', // Emerald / Mint - represents money/currency
  moneySubtle: 'rgba(52, 211, 153, 0.12)',

  // Semantic
  danger: '#F87171',
  dangerSubtle: 'rgba(248, 113, 113, 0.12)',
  warning: '#FBBF24',
  warningSubtle: 'rgba(251, 191, 36, 0.12)',
  success: '#34D399',
  successSubtle: 'rgba(52, 211, 153, 0.12)',
} as const;

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
} as const;

export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  full: 9999,
} as const;

export const typography = {
  hero: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700' as const,
    letterSpacing: -0.8,
  },
  display: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '700' as const,
    letterSpacing: -0.6,
  },
  title1: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600' as const,
    letterSpacing: -0.4,
  },
  title2: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600' as const,
    letterSpacing: -0.3,
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600' as const,
    letterSpacing: -0.2,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400' as const,
  },
  bodyMedium: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500' as const,
  },
  callout: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500' as const,
    letterSpacing: 0.2,
  },
  micro: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '600' as const,
    letterSpacing: 0.4,
  },
} as const;

export const theme = {
  colors,
  spacing,
  radius,
  typography,
} as const;

export type Theme = typeof theme;
export type ThemeColors = typeof colors;
export type ThemeSpacing = typeof spacing;
export type ThemeRadius = typeof radius;
export type ThemeTypography = typeof typography;
