
"use client";

import { useEffect, useState } from "react";
import { aiBehavioralNudges, AiBehavioralNudgesOutput } from "@/ai/flows/ai-behavioral-nudges";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Expense, UserProfile, Category } from "@/lib/types";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

interface AINudgesProps {
  expenses: Expense[];
  userProfile: UserProfile;
}

export function AINudges({ expenses, userProfile }: AINudgesProps) {
  const [nudges, setNudges] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNudges = async () => {
      setLoading(true);
      // Group spendings for the nudge tool
      const currentSpendings = expenses.reduce((acc, curr) => {
        const existing = acc.find(s => s.category === curr.category);
        if (existing) {
          existing.amount += curr.amount;
        } else {
          acc.push({ category: curr.category, amount: curr.amount });
        }
        return acc;
      }, [] as { category: string; amount: number }[]);

      // Default limits for demonstration (based on 20% of income spread)
      const budgetLimits = [
        { category: 'Alimentação', limit: userProfile.monthlyIncome * 0.2 },
        { category: 'Transporte', limit: userProfile.monthlyIncome * 0.1 },
        { category: 'Lazer', limit: userProfile.monthlyIncome * 0.1 },
      ];

      try {
        const result = await aiBehavioralNudges({
          currentSpendings,
          budgetLimits,
          userProfile: {
            age: userProfile.age,
            income: userProfile.monthlyIncome,
            financialGoals: userProfile.financialGoals
          }
        });
        setNudges(result.nudges);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (expenses.length > 0) {
      fetchNudges();
    }
  }, [expenses, userProfile]);

  if (nudges.length === 0 && !loading) return null;

  return (
    <div className="space-y-4">
      <h3 className="font-headline text-lg font-bold px-1">EcoInsights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {nudges.map((nudge, idx) => {
          const isWarning = nudge.toLowerCase().includes('atenção') || nudge.toLowerCase().includes('excedeu') || nudge.toLowerCase().includes('utilizou');
          return (
            <Alert key={idx} variant={isWarning ? "destructive" : "default"} className="border-none shadow-sm bg-white overflow-hidden relative group">
              <div className={cn("absolute left-0 top-0 bottom-0 w-1.5", isWarning ? "bg-red-500" : "bg-primary")}></div>
              {isWarning ? <AlertTriangle className="h-4 w-4" /> : <Info className="h-4 w-4" />}
              <AlertTitle>{isWarning ? "Atenção ao Orçamento" : "Dica EcoWise"}</AlertTitle>
              <AlertDescription className="text-sm leading-relaxed">
                {nudge}
              </AlertDescription>
            </Alert>
          );
        })}
        {loading && (
          <div className="animate-pulse flex space-x-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
