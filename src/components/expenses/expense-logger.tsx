import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Category, Expense } from "@/lib/types";
import { PlusCircle } from "lucide-react";

interface ExpenseLoggerProps {
  onAddExpense: (expense: Omit<Expense, 'id' | 'date'>) => void;
}

const categories: Category[] = ['Alimentação', 'Transporte', 'Lazer', 'Estudos', 'Saúde', 'Outros'];
export function ExpenseLogger({ onAddExpense }: ExpenseLoggerProps) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("Alimentação");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) return;
    
    onAddExpense({
      amount: Number(amount),
      description: description || category,
      category,
    });

    setAmount("");
    setDescription("");
  };

  return (
    <Card className="border-none shadow-sm h-full">
      <CardHeader>
        <CardTitle className="text-lg font-headline">Registro Rápido</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Valor (R$)</Label>
            <Input 
              id="amount" 
              type="number" 
              placeholder="0,00" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">O que foi?</Label>
            <Input 
              id="description" 
              placeholder="Ex: Café, Uber, Cinema..." 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select value={category} onValueChange={(val) => setCategory(val as Category)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6">
            <PlusCircle className="mr-2 h-4 w-4" />
            Adicionar Gasto
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}