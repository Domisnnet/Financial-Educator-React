import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SavingGoal } from "@/lib/types";
import { Trophy, Target } from "lucide-react";

interface VisionBoardProps {
  goals: SavingGoal[];
}

export function VisionBoard({ goals }: VisionBoardProps) {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-headline">
          <Target className="text-accent h-5 w-5" />
          Quadro de Visão
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const progress = Math.min(100, (goal.currentAmount / goal.targetAmount) * 100);
          const isCompleted = progress >= 100;

          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-sm flex items-center gap-2">
                    {goal.title}
                    {isCompleted && <Trophy className="text-yellow-500 h-4 w-4" />}
                  </h4>
                  <p className="text-xs text-muted-foreground">R$ {goal.currentAmount} / R$ {goal.targetAmount}</p>
                </div>
                <span className="text-xs font-bold text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          );
        })}
        {goals.length === 0 && (
          <div className="text-center py-8 text-muted-foreground italic text-sm">
            Crie seu primeiro objetivo no Arquiteto de Prosperidade!
          </div>
        )}
      </CardContent>
    </Card>
  );
}