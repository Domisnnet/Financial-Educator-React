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

// Internal schema for prompt input after preprocessing
const AiBehavioralNudgesPromptInputSchema = z.object({
  userProfile: AiBehavioralNudgesInputSchema.shape.userProfile,
  categoriesForAlerts: z.array(
    z.object({
      category: z.string().describe('The spending category.'),
      currentAmount: z.number().describe('The current amount spent in this category.'),
      limit: z.number().describe('The budget limit for this category.'),
      percentageUsed: z.number().describe('The percentage of the budget limit used for this category.'),
      status: z.enum(['near_limit', 'over_limit']).describe('The status of spending relative to the budget.'),
    })
  ).describe('A list of categories that are nearing or exceeding their budget limits.'),
});
export type AiBehavioralNudgesPromptInput = z.infer<typeof AiBehavioralNudgesPromptInputSchema>;


const aiBehavioralNudgesPrompt = ai.definePrompt({
  name: 'aiBehavioralNudgesPrompt',
  input: {schema: AiBehavioralNudgesPromptInputSchema},
  output: {schema: AiBehavioralNudgesOutputSchema},
  prompt: `Você é um educador financeiro inteligente e amigável, focado em ajudar jovens universitários e profissionais em início de carreira a gerenciar seu dinheiro.\n\nSua tarefa é analisar o perfil do usuário e seus gastos em relação aos limites do orçamento, e fornecer alertas proativos, motivadores e em linguagem simples.\nEvite termos técnicos complexos e use exemplos do cotidiano.\n\nPerfil do Usuário:\nIdade: {{{userProfile.age}}} anos\nRenda Mensal: R$ {{{userProfile.income}}}\nObjetivos Financeiros: {{{userProfile.financialGoals}}}\n\n{{#if categoriesForAlerts}}\nCom base nas suas informações de gastos, aqui estão algumas observações e sugestões para você:\n{{#each categoriesForAlerts}}\n  {{#if (eq status "near_limit")}}\n    - Você já utilizou {{percentageUsed}}% do seu orçamento de {{category}}. Que tal dar uma olhada nos seus gastos recentes e ver onde você pode economizar um pouco? Pequenas mudanças fazem uma grande diferença!\n  {{/if}}\n  {{#if (eq status "over_limit")}}\n    - Atenção! Seus gastos com {{category}} já excederam o limite de R$ {{limit}}. Não se preocupe, acontece! Que tal explorar alternativas mais econômicas para o restante do mês nesta área?\n  {{/if}}\n{{/each}}\n{{else}}\nParabéns! Seus gastos estão em dia e você está gerenciando bem seu dinheiro. Continue com o bom trabalho!\n{{/if}}\n\nPor favor, retorne suas observações e sugestões como uma lista JSON de strings, onde cada string é um "nudge" ou alerta.`,
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

    const categoriesForAlerts: AiBehavioralNudgesPromptInput['categoriesForAlerts'] = [];

    budgetLimits.forEach((budget) => {
      // Ensure budget.limit is positive to prevent division by zero or negative percentages
      if (budget.limit <= 0) {
        return; // Skip categories with invalid or zero limits
      }
      const spending = currentSpendings.find((s) => s.category === budget.category);
      const currentAmount = spending ? spending.amount : 0;
      const percentageUsed = Math.round((currentAmount / budget.limit) * 100);

      if (percentageUsed >= 100) {
        categoriesForAlerts.push({
          category: budget.category,
          currentAmount,
          limit: budget.limit,
          percentageUsed,
          status: 'over_limit',
        });
      } else if (percentageUsed >= 80) { // Nearing limit (80% to 99%)
        categoriesForAlerts.push({
          category: budget.category,
          currentAmount,
          limit: budget.limit,
          percentageUsed,
          status: 'near_limit',
        });
      }
    });

    const promptInput: AiBehavioralNudgesPromptInput = {
      userProfile,
      categoriesForAlerts,
    };

    const { output } = await aiBehavioralNudgesPrompt(promptInput);
    return output!;
  }
);
