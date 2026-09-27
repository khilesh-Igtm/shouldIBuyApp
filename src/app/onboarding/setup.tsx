import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ScreenContainer,
  AppText,
  AppButton,
  AppCard,
  AppInput,
} from '@/components/common';
import { calculateHourlyRate, formatCurrency } from '@/utils';
import { colors, radius, spacing } from '@/constants/theme';

interface FormErrors {
  monthlyIncome?: string;
  workingDays?: string;
  workingHours?: string;
}

export default function SetupScreen() {
  const router = useRouter();

  // Form State
  const [monthlyIncomeText, setMonthlyIncomeText] = useState('');
  const [workingDaysText, setWorkingDaysText] = useState('22');
  const [workingHoursText, setWorkingHoursText] = useState('8');

  // Touched state to avoid premature aggressive validation errors
  const [touched, setTouched] = useState<{
    monthlyIncome?: boolean;
    workingDays?: boolean;
    workingHours?: boolean;
  }>({});

  // Parse numeric values cleanly
  const monthlyIncome = useMemo(() => {
    const clean = monthlyIncomeText.replace(/[^0-9.]/g, '');
    return parseFloat(clean) || 0;
  }, [monthlyIncomeText]);

  const workingDays = useMemo(() => {
    const clean = workingDaysText.replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
  }, [workingDaysText]);

  const workingHours = useMemo(() => {
    const clean = workingHoursText.replace(/[^0-9.]/g, '');
    return parseFloat(clean) || 0;
  }, [workingHoursText]);

  // Live calculation using pure utility
  const hourlyRate = useMemo(() => {
    return calculateHourlyRate({
      monthlyIncome,
      workingDaysPerMonth: workingDays,
      workingHoursPerDay: workingHours,
    });
  }, [monthlyIncome, workingDays, workingHours]);

  // Validation rules
  const errors = useMemo<FormErrors>(() => {
    const errs: FormErrors = {};

    if (touched.monthlyIncome) {
      if (!monthlyIncomeText.trim()) {
        errs.monthlyIncome = 'Monthly income is required.';
      } else if (monthlyIncome <= 0) {
        errs.monthlyIncome = 'Income must be greater than zero.';
      } else if (monthlyIncome > 100_000_000) {
        errs.monthlyIncome = 'Please enter a valid realistic monthly income.';
      }
    }

    if (touched.workingDays) {
      if (!workingDaysText.trim()) {
        errs.workingDays = 'Working days are required.';
      } else if (workingDays < 1 || workingDays > 31) {
        errs.workingDays = 'Working days must be between 1 and 31.';
      }
    }

    if (touched.workingHours) {
      if (!workingHoursText.trim()) {
        errs.workingHours = 'Working hours are required.';
      } else if (workingHours < 1 || workingHours > 24) {
        errs.workingHours = 'Working hours must be between 1 and 24.';
      }
    }

    return errs;
  }, [
    monthlyIncome,
    monthlyIncomeText,
    workingDays,
    workingDaysText,
    workingHours,
    workingHoursText,
    touched,
  ]);

  const isValid =
    monthlyIncome > 0 &&
    workingDays >= 1 &&
    workingDays <= 31 &&
    workingHours >= 1 &&
    workingHours <= 24;

  const handleSubmit = () => {
    Keyboard.dismiss();

    // Mark all as touched to display errors if incomplete
    setTouched({
      monthlyIncome: true,
      workingDays: true,
      workingHours: true,
    });

    if (!isValid) {
      return;
    }

    // Replace stack so user cannot go back to onboarding
    router.replace('/(tabs)/index');
  };

  return (
    <ScreenContainer scrollable keyboardAvoiding>
      <View style={styles.headerSection}>
        <AppText variant="micro" color="money" style={styles.tag}>
          INCOME SETUP
        </AppText>
        <AppText variant="display" color="primary" style={styles.title}>
          Set Your Income
        </AppText>
        <AppText variant="body" color="secondary" style={styles.subtitle}>
          We calculate how much of your working time each future purchase really costs.
        </AppText>
      </View>

      <View style={styles.formSection}>
        {/* Monthly Income Input */}
        <AppInput
          label="MONTHLY TAKE-HOME INCOME"
          isRequired
          placeholder="70,000"
          keyboardType="numeric"
          returnKeyType="next"
          value={monthlyIncomeText}
          onChangeText={(text) => {
            setMonthlyIncomeText(text);
            if (!touched.monthlyIncome) {
              setTouched((prev) => ({ ...prev, monthlyIncome: true }));
            }
          }}
          onBlur={() =>
            setTouched((prev) => ({ ...prev, monthlyIncome: true }))
          }
          error={errors.monthlyIncome}
          leftAccessory={
            <AppText variant="headline" color="money" style={styles.currencyPrefix}>
              ₹
            </AppText>
          }
        />

        <View style={styles.twoColumnRow}>
          {/* Working Days Per Month */}
          <View style={styles.columnItem}>
            <AppInput
              label="DAYS / MONTH"
              isRequired
              placeholder="22"
              keyboardType="number-pad"
              returnKeyType="next"
              value={workingDaysText}
              onChangeText={(text) => {
                setWorkingDaysText(text);
                if (!touched.workingDays) {
                  setTouched((prev) => ({ ...prev, workingDays: true }));
                }
              }}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, workingDays: true }))
              }
              error={errors.workingDays}
              rightAccessory={
                <AppText variant="caption" color="muted">
                  days
                </AppText>
              }
            />
          </View>

          {/* Working Hours Per Day */}
          <View style={styles.columnItem}>
            <AppInput
              label="HOURS / DAY"
              isRequired
              placeholder="8"
              keyboardType="numeric"
              returnKeyType="done"
              value={workingHoursText}
              onChangeText={(text) => {
                setWorkingHoursText(text);
                if (!touched.workingHours) {
                  setTouched((prev) => ({ ...prev, workingHours: true }));
                }
              }}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, workingHours: true }))
              }
              error={errors.workingHours}
              rightAccessory={
                <AppText variant="caption" color="muted">
                  hrs
                </AppText>
              }
            />
          </View>
        </View>
      </View>

      {/* Live Hourly Rate Preview Card */}
      <AppCard variant={hourlyRate > 0 ? 'default' : 'subtle'} style={styles.previewCard}>
        <AppText variant="micro" color="accent" style={styles.previewTag}>
          YOUR WORKING RATE
        </AppText>

        {hourlyRate > 0 ? (
          <View style={styles.rateDisplayContainer}>
            <View style={styles.rateRow}>
              <AppText variant="hero" color="money" style={styles.rateNumber}>
                {formatCurrency(hourlyRate, {
                  decimals: hourlyRate % 1 === 0 ? 0 : 2,
                })}
              </AppText>
              <AppText variant="callout" color="secondary" style={styles.rateSuffix}>
                / hour
              </AppText>
            </View>

            <View style={styles.formulaRow}>
              <AppText variant="caption" color="muted">
                {formatCurrency(monthlyIncome)} ÷ ({workingDays} days × {workingHours} hrs)
              </AppText>
            </View>
          </View>
        ) : (
          <View style={styles.rateEmptyState}>
            <AppText variant="body" color="muted" align="center">
              Enter your income details above to reveal your hourly rate.
            </AppText>
          </View>
        )}
      </AppCard>

      {/* Submit Action */}
      <View style={styles.actionContainer}>
        <AppButton
          title="Calculate my rate"
          variant="money"
          size="lg"
          onPress={handleSubmit}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
  tag: {
    letterSpacing: 1.5,
    marginBottom: spacing.xs,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    lineHeight: 22,
  },
  formSection: {
    marginBottom: spacing.md,
  },
  currencyPrefix: {
    fontWeight: '700',
    marginRight: 2,
  },
  twoColumnRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  columnItem: {
    flex: 1,
  },
  previewCard: {
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  previewTag: {
    letterSpacing: 1.2,
    marginBottom: spacing.sm,
  },
  rateDisplayContainer: {
    alignItems: 'center',
  },
  rateRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing.xs,
  },
  rateNumber: {
    fontWeight: '700',
  },
  rateSuffix: {
    fontWeight: '500',
  },
  formulaRow: {
    marginTop: spacing.xs,
    backgroundColor: colors.surfaceActive,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  rateEmptyState: {
    paddingVertical: spacing.sm,
  },
  actionContainer: {
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
});
