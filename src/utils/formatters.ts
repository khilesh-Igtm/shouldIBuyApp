/**
 * Formats a number as an Indian Rupee currency string (e.g. ₹12,999 or ₹397.73).
 * Defaults to 0 decimal places for whole numbers, or specified decimal places.
 */
export function formatCurrency(
  amount: number,
  options?: {
    decimals?: number;
    showSymbol?: boolean;
    compact?: boolean;
  }
): string {
  if (isNaN(amount) || amount < 0) {
    return options?.showSymbol !== false ? '₹0' : '0';
  }

  const { decimals = 0, showSymbol = true } = options || {};

  const formattedNumber = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);

  return showSymbol ? `₹${formattedNumber}` : formattedNumber;
}

/**
 * Formats hours and minutes into human-readable duration strings.
 * Examples:
 * - formatWorkingTime(32, 39) -> "32h 39m" or "32 hours 39 minutes"
 */
export function formatWorkingTime(
  hours: number,
  minutes: number,
  options?: {
    format?: 'short' | 'long';
  }
): string {
  const isLong = options?.format === 'long';

  const safeHours = Math.max(0, Math.floor(hours));
  const safeMinutes = Math.max(0, Math.round(minutes));

  if (safeHours === 0 && safeMinutes === 0) {
    return isLong ? '0 minutes' : '0m';
  }

  const parts: string[] = [];

  if (safeHours > 0) {
    const unit = isLong ? (safeHours === 1 ? 'hour' : 'hours') : 'h';
    parts.push(`${safeHours}${isLong ? ' ' : ''}${unit}`);
  }

  if (safeMinutes > 0) {
    const unit = isLong ? (safeMinutes === 1 ? 'minute' : 'minutes') : 'm';
    parts.push(`${safeMinutes}${isLong ? ' ' : ''}${unit}`);
  }

  return parts.join(isLong ? ' ' : ' ');
}

/**
 * Formats working days into a decimal representation.
 * Examples:
 * - formatWorkingDays(9.43) -> "9.4 working days" (or "1 working day")
 */
export function formatWorkingDays(
  days: number,
  options?: {
    decimals?: number;
    includeUnit?: boolean;
  }
): string {
  const { decimals = 1, includeUnit = true } = options || {};
  const safeDays = Math.max(0, days);

  const formatted = safeDays.toFixed(decimals);

  if (!includeUnit) {
    return formatted;
  }

  const unit = safeDays === 1 ? 'working day' : 'working days';
  return `${formatted} ${unit}`;
}

/**
 * Formats income percentage (e.g. 18.57% -> "18.6%")
 */
export function formatPercentage(
  percentage: number,
  decimals: number = 1
): string {
  if (isNaN(percentage) || percentage < 0) {
    return '0%';
  }
  return `${percentage.toFixed(decimals)}%`;
}
