'use server';
/**
 * @fileOverview A Genkit flow for providing AI-driven behavioral nudges based on user spending patterns and budget limits.
 *
 * - aiBehavioralNudges - A function that analyzes spending and provides personalized alerts.
 * - AiBehavioralNudgesInput - The input type for the aiBehavioralNudges function.
 * - AiBehavioralNudgesOutput - The return type for the aiBehavioralNudges function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiBehavioralNudgesInputSchema = z.object({
  currentSpendings: z.array(
    z.object({
      category: z.string().describe('The spending category (e.g., Alimentação, Lazer).'),
      amount: z.number().describe('The current amount spent in this category.').default(0),
    })
  ).describe('A list of current spendings across different categories.'),
  budgetLimits: z.array(
    z.object({
      category: z.string().describe('The spending category (e.g., Alimentação, Lazer).'),
      limit: z.number().positive().describe('The budget limit set for this category.').default(0),
    })
  ).describe('A list of budget limits for different categories.'),
  userProfile: z.object({
    age: z.number().int().positive().describe('The age of the user.').default(18),
    income: z.number().positive().describe('The monthly income of the user.').default(0),
    financialGoals: z.string().describe('The financial goals of the user (e.g., montar reserva, comprar um computador).').default('ter mais controle financeiro'),
  }).describe('The profile information of the user for personalized recommendations.'),
});
export type AiBehavioralNudgesInput = z.infer<typeof AiBehavioralNudgesInputSchema>;

const AiBehavioralNudgesOutputSchema = z.object({
  nudges: z.array(z.string()).describe('A list of friendly, proactive alerts and recommendations for the user.'),
});
export type AiBehavioralNudgesOutput = z.infer<typeof AiBehavioralNudgesOutputSchema>;

// Schema interno simplificado: enviamos as instruções textuais já mastigadas para a IA
const AiBehavioralNudgesPromptInputSchema = z.object({
  instructions: z.string().describe('The complete constructed text instructions for the AI model.'),
});

const aiBehavioralNudgesPrompt = ai.definePrompt({
  name: 'aiBehavioralNudgesPrompt',
  input: {schema: AiBehavioralNudgesPromptInputSchema},
  output: {schema: AiBehavioralNudgesOutputSchema},
  // Usamos chaves triplas {{{ }}} para injetar o texto sem escapar caracteres HTML
  prompt: `{{{instructions}}}`
});

export async function aiBehavioralNudges(input: AiBehavioralNudgesInput): Promise<AiBehavioralNudgesOutput> {
  return aiBehavioralNudgesFlow(input);
}

const aiBehavioralNudgesFlow = ai.defineFlow(
  {
    name: 'aiBehavioralNudgesFlow',
    inputSchema: AiBehavioralNudgesInputSchema,
    outputSchema: AiBehavioralNudgesOutputSchema,
  },
  async (input) => {
    const { currentSpendings, budgetLimits, userProfile } = input;

    let alertText = '';
    let hasAlerts = false;

    budgetLimits.forEach((budget) => {
      if (budget.limit <= 0) return;

      const spending = currentSpendings.find((s) => s.category === budget.category);
      const currentAmount = spending ? spending.amount : 0;
      const percentageUsed = Math.round((currentAmount / budget.limit) * 100);

      if (percentageUsed >= 100) {
        hasAlerts = true;
        alertText += `- Atenção! Seus gastos com ${budget.category} já excederam o limite de R$ ${budget.limit}. Não se preocupe, acontece! Que tal explorar alternativas mais econômicas para o restante do mês nesta área?\n`;
      } else if (percentageUsed >= 80) {
        hasAlerts = true;
        alertText += `- Você já utilizou ${percentageUsed}% do seu orçamento de ${budget.category}. Que tal dar uma olhada nos seus gastos recentes e ver onde você pode economizar um pouco? Pequenas mudanças fazem uma grande diferença!\n`;
      }
    });

    const contextText = hasAlerts 
      ? `Com base nas suas informações de gastos, aqui estão algumas observações e sugestões para você:\n${alertText}`
      : 'Parabéns! Seus gastos estão em dia e você está gerenciando bem seu dinheiro. Continue com o bom trabalho!\n';

    // Montamos a string final do prompt aqui no ambiente TypeScript estável
    const fullInstructions = `Você é um educador financeiro inteligente e amigável, focado em ajudar jovens universitários e profissionais em início de carreira a gerenciar seu dinheiro.

Sua tarefa é analisar o perfil do usuário e seus gastos em relação aos limites do orçamento, e fornecer alertas proativos, motivadores e em linguagem simples.
Evite termos técnicos complexos e use exemplos do cotidiano.

Perfil do Usuário:
Idade: ${userProfile.age} anos
Renda Mensal: R$ ${userProfile.income}
Objetivos Financeiros: ${userProfile.financialGoals}

${contextText}
Por favor, retorne suas observações e sugestões como uma lista JSON de strings, onde cada string é um "nudge" ou alerta.`;

    const { output } = await aiBehavioralNudgesPrompt({ instructions: fullInstructions });
    return output!;
  }
);