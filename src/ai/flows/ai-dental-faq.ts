'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering common dental questions.
 *
 * - dentalFAQ - A function that takes a question as input and returns an AI-generated answer.
 * - DentalFAQInput - The input type for the dentalFAQ function.
 * - DentalFAQOutput - The return type for the dentalFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DentalFAQInputSchema = z.object({
  question: z.string().describe('The dental question to be answered.'),
});
export type DentalFAQInput = z.infer<typeof DentalFAQInputSchema>;

const DentalFAQOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the dental question.'),
});
export type DentalFAQOutput = z.infer<typeof DentalFAQOutputSchema>;

export async function dentalFAQ(input: DentalFAQInput): Promise<DentalFAQOutput> {
  return dentalFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dentalFAQPrompt',
  input: {schema: DentalFAQInputSchema},
  output: {schema: DentalFAQOutputSchema},
  prompt: `You are a helpful AI assistant specialized in providing information about dental care.
  Answer the following question:
  {{{question}}}`,
});

const dentalFAQFlow = ai.defineFlow(
  {
    name: 'dentalFAQFlow',
    inputSchema: DentalFAQInputSchema,
    outputSchema: DentalFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
