import React, { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  FadeInRight,
  FadeOutLeft,
  Layout,
} from 'react-native-reanimated';
import Svg, { Circle, Path, Line, Rect } from 'react-native-svg';
import { ScreenContainer, AppText, AppButton, AppCard } from '@/components/common';
import { colors, radius, spacing } from '@/constants/theme';

interface OnboardingStep {
  stepNumber: number;
  tag: string;
  headline: string;
  supportingText: string;
  buttonTitle: string;
}

const STEPS: OnboardingStep[] = [
  {
    stepNumber: 1,
    tag: 'THE REAL COST',
    headline: 'Your money has a time cost.',
    supportingText:
      'Every purchase costs more than its price. It costs a piece of the time you spend earning that money.',
    buttonTitle: 'Continue',
  },
  {
    stepNumber: 2,
    tag: 'MONEY → TIME',
    headline: 'See purchases in working hours.',
    supportingText:
      'WorkWorth converts a price into the hours and days of work it takes to afford it.',
    buttonTitle: 'Continue',
  },
  {
    stepNumber: 3,
    tag: 'INTENTIONAL SPENDING',
    headline: 'Make spending feel real.',
    supportingText:
      "Before you buy, see exactly how much of your monthly income and working time you're trading.",
    buttonTitle: 'Get Started',
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const stepData = STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push('/onboarding/setup');
    }
  };

  const handleSkip = () => {
    router.push('/onboarding/setup');
  };

  const renderVisual = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <View style={styles.visualContainer}>
            {/* Step 1 Visual: Exchange of Money to Time */}
            <View style={styles.exchangeCircle}>
              <Svg width={140} height={140} viewBox="0 0 140 140">
                <Circle
                  cx="70"
                  cy="70"
                  r="64"
                  stroke={colors.border}
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  fill="none"
                />
                <Circle
                  cx="70"
                  cy="70"
                  r="48"
                  fill={colors.surface}
                  stroke={colors.accent}
                  strokeWidth="2"
                />
                {/* Clock Hands */}
                <Line
                  x1="70"
                  y1="70"
                  x2="70"
                  y2="42"
                  stroke={colors.accent}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <Line
                  x1="70"
                  y1="70"
                  x2="88"
                  y2="70"
                  stroke={colors.money}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <Circle cx="70" cy="70" r="4" fill={colors.textPrimary} />
              </Svg>
            </View>

            <View style={styles.badgeRow}>
              <View style={styles.miniBadgeMoney}>
                <AppText variant="caption" color="money" style={styles.badgeText}>
                  ₹ EARNINGS
                </AppText>
              </View>
              <AppText variant="caption" color="muted">
                ➔
              </AppText>
              <View style={styles.miniBadgeTime}>
                <AppText variant="caption" color="accent" style={styles.badgeText}>
                  ⏱ LIFE HOURS
                </AppText>
              </View>
            </View>
          </View>
        );

      case 1:
        return (
          <View style={styles.visualContainer}>
            {/* Step 2 Visual: Interactive Conversion Preview */}
            <AppCard variant="default" style={styles.conversionCard}>
              <View style={styles.conversionRow}>
                <View>
                  <AppText variant="micro" color="muted">
                    PURCHASE PRICE
                  </AppText>
                  <AppText variant="title2" color="primary" style={styles.monoWeight}>
                    ₹29,999
                  </AppText>
                </View>
                <View style={styles.conversionArrowBox}>
                  <AppText variant="callout" color="accent">
                    =
                  </AppText>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <AppText variant="micro" color="muted">
                    TIME REQUIRED
                  </AppText>
                  <AppText variant="title2" color="accent" style={styles.monoWeight}>
                    75h 27m
                  </AppText>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.conversionFooter}>
                <AppText variant="caption" color="secondary">
                  Equivalent to
                </AppText>
                <View style={styles.tagPill}>
                  <AppText variant="micro" color="money">
                    9.4 WORKING DAYS
                  </AppText>
                </View>
              </View>
            </AppCard>
          </View>
        );

      case 2:
        return (
          <View style={styles.visualContainer}>
            {/* Step 3 Visual: Mindful spending circular metric */}
            <AppCard variant="default" style={styles.gaugeCard}>
              <View style={styles.gaugeRow}>
                <Svg width={96} height={96} viewBox="0 0 96 96">
                  <Circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke={colors.surfaceActive}
                    strokeWidth="8"
                    fill="none"
                  />
                  <Circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke={colors.money}
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="145"
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 48 48)"
                  />
                </Svg>
                <View style={styles.gaugeCenterLabel}>
                  <AppText variant="headline" color="primary">
                    42%
                  </AppText>
                  <AppText variant="micro" color="muted">
                    OF MONTH
                  </AppText>
                </View>

                <View style={styles.gaugeMeta}>
                  <AppText variant="callout" color="primary" style={{ fontWeight: '600' }}>
                    Clarity before buying
                  </AppText>
                  <AppText variant="caption" color="secondary">
                    Evaluate if the item is worth your hard-earned time.
                  </AppText>
                </View>
              </View>
            </AppCard>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <ScreenContainer>
      {/* Header bar with Indicators and Skip */}
      <View style={styles.headerBar}>
        <View style={styles.indicators}>
          {STEPS.map((_, index) => {
            const isActive = index === currentStep;
            const isDone = index < currentStep;
            return (
              <View
                key={index}
                style={[
                  styles.indicatorBar,
                  isActive
                    ? styles.indicatorActive
                    : isDone
                    ? styles.indicatorDone
                    : styles.indicatorInactive,
                ]}
              />
            );
          })}
        </View>

        {currentStep < STEPS.length - 1 ? (
          <Pressable
            onPress={handleSkip}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Skip onboarding"
          >
            <AppText variant="caption" color="muted" style={styles.skipText}>
              SKIP
            </AppText>
          </Pressable>
        ) : (
          <View style={styles.skipPlaceholder} />
        )}
      </View>

      {/* Main Content Area */}
      <View style={styles.mainContent}>
        <Animated.View
          key={stepData.stepNumber}
          entering={FadeInRight.duration(280)}
          exiting={FadeOutLeft.duration(200)}
          layout={Layout.springify()}
          style={styles.stepContainer}
        >
          {/* Visual Container */}
          {renderVisual(currentStep)}

          {/* Text Content */}
          <View style={styles.textContent}>
            <AppText variant="micro" color="accent" style={styles.tag}>
              {stepData.tag}
            </AppText>

            <AppText variant="display" color="primary" style={styles.headline}>
              {stepData.headline}
            </AppText>

            <AppText
              variant="body"
              color="secondary"
              style={styles.supportingText}
            >
              {stepData.supportingText}
            </AppText>
          </View>
        </Animated.View>
      </View>

      {/* Footer Navigation CTA */}
      <View style={styles.footer}>
        <AppText variant="caption" color="muted" align="center" style={styles.stepCount}>
          {currentStep + 1} of {STEPS.length}
        </AppText>

        <AppButton
          title={stepData.buttonTitle}
          variant={currentStep === STEPS.length - 1 ? 'money' : 'primary'}
          onPress={handleNext}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  indicators: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  indicatorBar: {
    height: 4,
    borderRadius: radius.full,
  },
  indicatorActive: {
    width: 28,
    backgroundColor: colors.accent,
  },
  indicatorDone: {
    width: 14,
    backgroundColor: colors.textSecondary,
  },
  indicatorInactive: {
    width: 14,
    backgroundColor: colors.border,
  },
  skipText: {
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  skipPlaceholder: {
    width: 36,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  stepContainer: {
    width: '100%',
  },
  visualContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxl,
    minHeight: 180,
  },
  exchangeCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  miniBadgeMoney: {
    backgroundColor: colors.moneySubtle,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.3)',
  },
  miniBadgeTime: {
    backgroundColor: colors.accentSubtle,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  badgeText: {
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  conversionCard: {
    width: '100%',
    padding: spacing.lg,
  },
  conversionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  monoWeight: {
    fontWeight: '700',
    marginTop: 2,
  },
  conversionArrowBox: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceActive,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.borderSubtle,
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderSubtle,
    marginVertical: spacing.md,
  },
  conversionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagPill: {
    backgroundColor: colors.moneySubtle,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  gaugeCard: {
    width: '100%',
    padding: spacing.lg,
  },
  gaugeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  gaugeCenterLabel: {
    position: 'absolute',
    left: 28,
    alignItems: 'center',
  },
  gaugeMeta: {
    flex: 1,
  },
  textContent: {
    marginTop: spacing.xs,
  },
  tag: {
    letterSpacing: 1.5,
    marginBottom: spacing.xs,
  },
  headline: {
    marginBottom: spacing.md,
    letterSpacing: -0.5,
  },
  supportingText: {
    lineHeight: 22,
  },
  footer: {
    paddingBottom: spacing.sm,
    gap: spacing.sm,
  },
  stepCount: {
    marginBottom: 2,
  },
});
