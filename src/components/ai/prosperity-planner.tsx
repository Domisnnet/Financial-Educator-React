import { useState } from "react";
import { generateAISavingsPlan, AISavingsPlanGenerationOutput } from "@/ai/flows/ai-savings-plan-generation-flow";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2, Calendar, PiggyBank } from "lucide-react";
import { UserProfile } from "@/lib/types";

export function ProsperityPlanner({ userProfile }: { userProfile: UserProfile }) {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState<AISavingsPlanGenerationOutput | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!goal || !amount) return;
    setLoading(true);
    try {
      const result = await generateAISavingsPlan({
        financialGoal: goal,
        goalAmount: Number(amount),
        monthlyIncome: userProfile.monthlyIncome
      });
      setPlan(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-sm bg-gradient-to-br from-white to-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Sparkles className="text-primary h-5 w-5" />
          Arquiteto de Prosperidade AI
        </CardTitle>
        <CardDescription>
          Transforme seus sonhos em planos reais com ajuda da nossa IA.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Qual o seu objetivo?</Label>
            <Input 
              placeholder="Ex: Novo Laptop, Viagem..." 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Quanto custa? (R$)</Label>
            <Input 
              type="number" 
              placeholder="3000" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        
        <Button 
          onClick={handleGenerate} 
          disabled={loading || !goal || !amount}
          className="w-full bg-primary hover:bg-primary/90 rounded-xl"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Gerar Plano Personalizado
        </Button>

        {plan && (
          <div className="mt-6 p-6 bg-white rounded-2xl border border-primary/20 animate-in fade-in slide-in-from-bottom-2">
            <h4 className="font-bold text-lg mb-4 text-primary">Seu Plano de Economia</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 text-accent mb-1">
                  <PiggyBank size={18} />
                  <span className="text-sm font-medium">Economia Mensal</span>
                </div>
                <p className="text-2xl font-bold">R$ {plan.suggestedMonthlySavings}</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">Tempo Estimado</span>
                </div>
                <p className="text-2xl font-bold">{plan.estimatedMonthsToGoal} meses</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm italic">
              "{plan.planSummary}"
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}