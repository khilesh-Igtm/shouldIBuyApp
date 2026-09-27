import { IncomeCalculationInput, PurchaseCalculationInput, PurchaseCostBreakdown } from '@/types';

/**
 * Calculates hourly earning rate from monthly income, working days, and hours per day.
 * Returns 0 if any input is invalid (<= 0).
 */
export function calculateHourlyRate({
  monthlyIncome,
  workingDaysPerMonth,
  workingHoursPerDay,
}: IncomeCalculationInput): number {
  if (monthlyIncome <= 0 || workingDaysPerMonth <= 0 || workingHoursPerDay <= 0) {
    return 0;
  }

  const totalMonthlyHours = workingDaysPerMonth * workingHoursPerDay;
  if (totalMonthlyHours <= 0) {
    return 0;
  }

  return monthlyIncome / totalMonthlyHours;
}

/**
 * Calculates time and income cost breakdown for a given purchase price.
 * Returns safe zeroes if any essential input is missing or <= 0.
 */
export function calculatePurchaseCost({
  price,
  hourlyRate,
  workingHoursPerDay,
  monthlyIncome,
}: PurchaseCalculationInput): PurchaseCostBreakdown {
  if (price <= 0 || hourlyRate <= 0) {
    return {
      totalHours: 0,
      hours: 0,
      minutes: 0,
      totalMinutes: 0,
      workingDays: 0,
      incomePercentage: 0,
    };
  }

  const totalHours = price / hourlyRate;
  const totalMinutes = Math.round(totalHours * 60);

  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;

  const workingDays = workingHoursPerDay > 0 ? totalHours / workingHoursPerDay : 0;
  const incomePercentage = monthlyIncome > 0 ? (price / monthlyIncome) * 100 : 0;

  return {
    totalHours,
    hours,
    minutes,
    totalMinutes,
    workingDays,
    incomePercentage,
  };
}
