export interface IncomeCalculationInput {
  monthlyIncome: number;
  workingDaysPerMonth: number;
  workingHoursPerDay: number;
}

export interface PurchaseCalculationInput {
  price: number;
  hourlyRate: number;
  workingHoursPerDay: number;
  monthlyIncome: number;
}

export interface PurchaseCostBreakdown {
  /** Total working hours in decimal (e.g., 32.65) */
  totalHours: number;
  /** Whole hours portion (e.g., 32) */
  hours: number;
  /** Remaining minutes portion (e.g., 39) */
  minutes: number;
  /** Total calculated working minutes (e.g., 1959) */
  totalMinutes: number;
  /** Equivalent working days based on workingHoursPerDay (e.g., 4.08) */
  workingDays: number;
  /** Percentage of monthly income (e.g., 18.57) */
  incomePercentage: number;
}
