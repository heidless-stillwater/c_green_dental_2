'use server';
/**
 * @fileOverview Provides an AI symptom checker for dental issues.
 *
 * - checkSymptoms - A function that takes dental symptoms as input and returns general information about potential causes and recommended actions.
 * - SymptomCheckerInput - The input type for the checkSymptoms function.
 * - SymptomCheckerOutput - The return type for the checkSymptoms function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SymptomCheckerInputSchema = z.object({
  symptoms: z.string().describe('The dental symptoms experienced by the user.'),
});
export type SymptomCheckerInput = z.infer<typeof SymptomCheckerInputSchema>;

const SymptomCheckerOutputSchema = z.object({
  information: z.string().describe('General information about potential causes and recommended actions for the provided symptoms.'),
  disclaimer: z.string().describe('A disclaimer that the information is not a substitute for professional advice.'),
});
export type SymptomCheckerOutput = z.infer<typeof SymptomCheckerOutputSchema>;

export async function checkSymptoms(input: SymptomCheckerInput): Promise<SymptomCheckerOutput> {
  return symptomCheckerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'symptomCheckerPrompt',
  input: {schema: SymptomCheckerInputSchema},
  output: {schema: SymptomCheckerOutputSchema},
  prompt: `You are a helpful AI assistant providing general information about potential causes and recommended actions for dental symptoms.

  Symptoms: {{{symptoms}}}

  Provide general information about potential causes and recommended actions. Include the following disclaimer: This information is not a substitute for professional dental advice. Consult with a qualified dentist for diagnosis and treatment.`,
});

const symptomCheckerFlow = ai.defineFlow(
  {
    name: 'symptomCheckerFlow',
    inputSchema: SymptomCheckerInputSchema,
    outputSchema: SymptomCheckerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
