
export type Category = 'Alimentação' | 'Transporte' | 'Lazer' | 'Estudos' | 'Saúde' | 'Outros';

export interface Expense {
  id: string;
  category: Category;
  amount: number;
  description: string;
  date: string;
}

export interface SavingGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
}

export interface UserProfile {
  name: string;
  age: number;
  monthlyIncome: number;
  financialGoals: string;
}
