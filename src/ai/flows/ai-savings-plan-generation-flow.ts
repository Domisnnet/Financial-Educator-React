'use server';
/**
 * @fileOverview A Genkit flow for generating a personalized savings plan.
 *
 * - generateAISavingsPlan - A function that handles the AI savings plan generation process.
 * - AISavingsPlanGenerationInput - The input type for the generateAISavingsPlan function.
 * - AISavingsPlanGenerationOutput - The return type for the generateAISavingsPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISavingsPlanGenerationInputSchema = z.object({
  financialGoal: z
    .string()
    .describe('The user defined financial goal (e.g., "buy a laptop").'),
  goalAmount: z
    .number()
    .describe('The monetary amount required to achieve the financial goal.'),
  monthlyIncome: z.number().describe("The user's current monthly income."),
});
export type AISavingsPlanGenerationInput = z.infer<
  typeof AISavingsPlanGenerationInputSchema
>;

const AISavingsPlanGenerationOutputSchema = z.object({
  suggestedMonthlySavings: z
    .number()
    .describe('The suggested amount the user should save each month.'),
  estimatedMonthsToGoal: z
    .number()
    .describe(
      'The estimated number of months it will take to achieve the goal based on the suggested monthly savings.'
    ),
  planSummary: z
    .string()
    .describe(
      'A friendly summary of the savings plan, including the goal, suggested monthly savings, and estimated timeline.'
    ),
});
export type AISavingsPlanGenerationOutput = z.infer<
  typeof AISavingsPlanGenerationOutputSchema
>;

export async function generateAISavingsPlan(
  input: AISavingsPlanGenerationInput
): Promise<AISavingsPlanGenerationOutput> {
  return aiSavingsPlanGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSavingsPlanGenerationPrompt',
  input: {schema: AISavingsPlanGenerationInputSchema},
  output: {schema: AISavingsPlanGenerationOutputSchema},
  prompt: `You are an intelligent financial architect for young adults and early career professionals.
Your goal is to help users achieve their financial goals by providing realistic and easy-to-understand savings plans.

Based on the user's financial goal, the amount needed, and their monthly income, suggest a monthly savings amount and the estimated time (in months) to achieve the goal.
Ensure the suggested monthly savings is realistic and doesn't recommend saving an excessively high percentage of their income, typically not more than 20-30% of their net income, especially for lower incomes.
Also, provide a friendly summary of the plan.

Financial Goal: {{{financialGoal}}}
Goal Amount: R$ {{{goalAmount}}}
Monthly Income: R$ {{{monthlyIncome}}}

Output in JSON format matching the AISavingsPlanGenerationOutputSchema.`,
});

const aiSavingsPlanGenerationFlow = ai.defineFlow(
  {
    name: 'aiSavingsPlanGenerationFlow',
    inputSchema: AISavingsPlanGenerationInputSchema,
    outputSchema: AISavingsPlanGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
