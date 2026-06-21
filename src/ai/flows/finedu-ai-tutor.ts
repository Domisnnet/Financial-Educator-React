'use server';
/**
 * @fileOverview A Genkit flow for the FinEdu AI Tutor, which answers financial questions from users.
 *
 * - fineduAITutor - A function that handles financial education questions.
 * - FinEduAITutorInput - The input type for the fineduAITutor function.
 * - FinEduAITutorOutput - The return type for the fineduAITutor function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const FinEduAITutorInputSchema = z.object({
  question: z.string().describe('The financial question asked by the user.'),
});
export type FinEduAITutorInput = z.infer<typeof FinEduAITutorInputSchema>;

const FinEduAITutorOutputSchema = z.object({
  answer: z.string().describe('A clear, simple, and personalized explanation or advice.'),
});
export type FinEduAITutorOutput = z.infer<typeof FinEduAITutorOutputSchema>;

export async function fineduAITutor(input: FinEduAITutorInput): Promise<FinEduAITutorOutput> {
  return fineduAITutorFlow(input);
}

const fineduAITutorPrompt = ai.definePrompt({
  name: 'fineduAITutorPrompt',
  input: { schema: FinEduAITutorInputSchema },
  output: { schema: FinEduAITutorOutputSchema },
  prompt: `You are an AI financial tutor designed specifically for young university students and early career professionals.
Your primary goal is to help users improve their financial literacy by providing clear, simple, friendly, objective, and motivating explanations or advice.
Always avoid complex technical jargon and use language that is easy for a beginner to understand.
Personalize your advice to be relevant to someone just starting their financial journey.

Here is the user's financial question:
Question: {{{question}}}

Provide your answer in a straightforward and helpful manner.`,
});

const fineduAITutorFlow = ai.defineFlow(
  {
    name: 'fineduAITutorFlow',
    inputSchema: FinEduAITutorInputSchema,
    outputSchema: FinEduAITutorOutputSchema,
  },
  async (input) => {
    const { output } = await fineduAITutorPrompt(input);
    return output!;
  }
);
