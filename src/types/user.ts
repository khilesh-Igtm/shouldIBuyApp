export interface UserProfile {
  monthlyIncome: number;
  workingDaysPerMonth: number;
  workingHoursPerDay: number;
  hourlyRate: number;
}

export type UserProfileInput = Omit<UserProfile, 'hourlyRate'>;
