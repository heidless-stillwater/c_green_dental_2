
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { dentalFAQ, type DentalFAQOutput } from "@/ai/flows/ai-dental-faq";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const dentalFAQSchema = z.object({
  question: z.string().min(5, "Please enter a question with at least 5 characters."),
});
type DentalFAQFormValues = z.infer<typeof dentalFAQSchema>;

export function DentalFAQForm() {
  const [result, setResult] = useState<DentalFAQOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<DentalFAQFormValues>({
    resolver: zodResolver(dentalFAQSchema),
    defaultValues: {
      question: "",
    },
  });

  const onSubmit: SubmitHandler<DentalFAQFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await dentalFAQ(data);
      setResult(response);
    } catch (error) {
      console.error("Dental FAQ error:", error);
      toast({
        title: "Error",
        description: "Failed to get an answer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-primary">AI Dental FAQ</CardTitle>
        <CardDescription>Ask common dental questions and get AI-powered answers.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="question">Your Question</FormLabel>
                  <FormControl>
                    <Input
                      id="question"
                      placeholder="e.g., How often should I visit the dentist?"
                      {...field}
                      aria-describedby="question-message"
                    />
                  </FormControl>
                  <FormMessage id="question-message" />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Ask Question"}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {result && (
        <CardContent className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold text-primary">Answer:</h3>
          <p className="text-sm text-foreground/80 whitespace-pre-wrap">{result.answer}</p>
        </CardContent>
      )}
    </Card>
  );
}
