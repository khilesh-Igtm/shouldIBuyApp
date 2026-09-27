export interface Purchase {
  id: string;
  name: string;
  price: number;
  workingHours: number;
  workingMinutes: number;
  workingDays: number;
  incomePercentage: number;
  createdAt: string; // ISO 8601 string
}

export interface CreatePurchaseInput {
  name: string;
  price: number;
}
