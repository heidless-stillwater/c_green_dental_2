// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview Generates personalized oral health tips based on user input.
 *
 * - generateOralHealthTips - A function that generates personalized oral health tips.
 * - OralHealthTipsInput - The input type for the generateOralHealthTips function.
 * - OralHealthTipsOutput - The return type for the generateOralHealthTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OralHealthTipsInputSchema = z.object({
  brushingFrequency: z
    .string()
    .describe('How often do you brush your teeth daily (e.g., once, twice, etc.)?'),
  flossingFrequency: z
    .string()
    .describe('How often do you floss your teeth daily (e.g., once, twice, never)?'),
  mouthwashUsage: z
    .string()
    .describe('Do you use mouthwash (yes/no), and if so, how often?'),
  dentalVisits: z
    .string()
    .describe('How often do you visit the dentist for checkups (e.g., every 6 months, once a year, rarely)?'),
  concerns: z
    .string()
    .describe('Any specific concerns you have about your oral health (e.g., gum bleeding, sensitivity)?'),
});
export type OralHealthTipsInput = z.infer<typeof OralHealthTipsInputSchema>;

const OralHealthTipsOutputSchema = z.object({
  tips: z.string().describe('Personalized oral health tips based on the provided information.'),
});
export type OralHealthTipsOutput = z.infer<typeof OralHealthTipsOutputSchema>;

export async function generateOralHealthTips(
  input: OralHealthTipsInput
): Promise<OralHealthTipsOutput> {
  return generateOralHealthTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'oralHealthTipsPrompt',
  input: {schema: OralHealthTipsInputSchema},
  output: {schema: OralHealthTipsOutputSchema},
  prompt: `You are a helpful AI assistant specialized in providing personalized oral health tips.

  Based on the following information about the user's oral health habits, generate personalized and actionable tips to improve their dental hygiene routine.

  Brushing Frequency: {{{brushingFrequency}}}
  Flossing Frequency: {{{flossingFrequency}}}
  Mouthwash Usage: {{{mouthwashUsage}}}
  Dental Visits: {{{dentalVisits}}}
  Concerns: {{{concerns}}}

  Tips:`, // Ensure the 'Tips:' key is present as the model is trained to generate that exact structure. Do not include any preamble before the tips.
});

const generateOralHealthTipsFlow = ai.defineFlow(
  {
    name: 'generateOralHealthTipsFlow',
    inputSchema: OralHealthTipsInputSchema,
    outputSchema: OralHealthTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
