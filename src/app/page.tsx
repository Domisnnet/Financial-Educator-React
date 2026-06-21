
"use client";

import { useState, useEffect } from "react";
import { 
  Wallet, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  LayoutDashboard, 
  History, 
  User as UserIcon, 
  Settings,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/stat-card";
import { ExpenseLogger } from "@/components/expenses/expense-logger";
import { SpendingChart } from "@/components/dashboard/spending-chart";
import { ProsperityPlanner } from "@/components/ai/prosperity-planner";
import { AITutor } from "@/components/ai/ai-tutor";
import { AINudges } from "@/components/ai/ai-nudges";
import { VisionBoard } from "@/components/goals/vision-board";
import { Expense, UserProfile, SavingGoal } from "@/lib/types";

export default function EcoWiseDashboard() {
  const [mounted, setMounted] = useState(false);
  const [user] = useState<UserProfile>({
    name: "Alex",
    age: 22,
    monthlyIncome: 2800,
    financialGoals: "Montar reserva financeira e comprar um MacBook"
  });

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: '1', amount: 350, category: 'Alimentação', description: 'Mercado Mensal', date: new Date().toISOString() },
    { id: '2', amount: 80, category: 'Transporte', description: 'Combustível', date: new Date().toISOString() },
    { id: '3', amount: 150, category: 'Lazer', description: 'Jantar Sábado', date: new Date().toISOString() },
    { id: '4', amount: 200, category: 'Estudos', description: 'Curso Online', date: new Date().toISOString() },
  ]);

  const [goals, setGoals] = useState<SavingGoal[]>([
    { id: '1', title: 'Reserva de Emergência', targetAmount: 5000, currentAmount: 1200 },
    { id: '2', title: 'Novo Notebook', targetAmount: 3500, currentAmount: 850 },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = user.monthlyIncome - totalSpent;

  const addExpense = (newExp: Omit<Expense, 'id' | 'date'>) => {
    const expense: Expense = {
      ...newExp,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
    };
    setExpenses(prev => [expense, ...prev]);
  };

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar - Hidden on mobile */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-white sticky top-0 h-screen p-6">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="bg-primary p-2 rounded-xl">
            <Wallet className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-headline font-bold tracking-tight">EcoWise AI</span>
        </div>
        
        <nav className="space-y-1 flex-1">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/5 text-primary rounded-xl font-medium">
            <LayoutDashboard size={20} />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-xl">
            <History size={20} />
            Histórico
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-xl">
            <Bell size={20} />
            Notificações
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-primary/5 hover:text-primary rounded-xl">
            <UserIcon size={20} />
            Perfil
          </Button>
        </nav>

        <div className="mt-auto pt-6 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground rounded-xl">
            <Settings size={20} />
            Configurações
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 space-y-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-headline font-bold text-slate-900">Olá, {user.name}! 👋</h1>
            <p className="text-muted-foreground mt-1">Veja como está sua saúde financeira hoje.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl border-slate-200">Exportar PDF</Button>
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
              A
            </div>
          </div>
        </header>

        {/* Top Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Renda Mensal" 
            value={`R$ ${user.monthlyIncome.toLocaleString('pt-BR')}`} 
            icon={TrendingUp}
            trend={{ value: "+12%", isPositive: true }}
            className="bg-white"
          />
          <StatCard 
            title="Total Gasto" 
            value={`R$ ${totalSpent.toLocaleString('pt-BR')}`} 
            icon={ArrowDownRight}
            className="bg-white"
            description="Acumulado do mês"
          />
          <StatCard 
            title="Saldo Livre" 
            value={`R$ ${balance.toLocaleString('pt-BR')}`} 
            icon={ArrowUpRight}
            className="bg-primary text-white"
            trend={{ value: "Seguro", isPositive: true }}
          />
        </section>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (8 units) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExpenseLogger onAddExpense={addExpense} />
              <SpendingChart expenses={expenses} />
            </div>
            
            <ProsperityPlanner userProfile={user} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VisionBoard goals={goals} />
              <div className="bg-white rounded-2xl p-6 shadow-sm border-none">
                <h3 className="text-lg font-headline font-bold mb-4">Últimas Transações</h3>
                <div className="space-y-4">
                  {expenses.slice(0, 5).map((exp) => (
                    <div key={exp.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                          {exp.category[0]}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{exp.description}</p>
                          <p className="text-xs text-muted-foreground">{exp.category}</p>
                        </div>
                      </div>
                      <p className="font-bold text-sm text-red-500">- R$ {exp.amount}</p>
                    </div>
                  ))}
                  {expenses.length === 0 && (
                    <p className="text-center py-4 text-muted-foreground italic">Sem transações.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 units) */}
          <div className="lg:col-span-4 space-y-6">
            <AINudges expenses={expenses} userProfile={user} />
            <div className="h-[500px]">
              <AITutor />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
