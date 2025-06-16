
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { checkSymptoms, type SymptomCheckerOutput } from "@/ai/flows/ai-symptom-checker";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const symptomCheckerSchema = z.object({
  symptoms: z.string().min(10, "Please describe your symptoms in at least 10 characters."),
});
type SymptomCheckerFormValues = z.infer<typeof symptomCheckerSchema>;

export function SymptomCheckerForm() {
  const [result, setResult] = useState<SymptomCheckerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<SymptomCheckerFormValues>({
    resolver: zodResolver(symptomCheckerSchema),
    defaultValues: {
      symptoms: "",
    },
  });

  const onSubmit: SubmitHandler<SymptomCheckerFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await checkSymptoms(data);
      setResult(response);
    } catch (error) {
      console.error("Symptom checker error:", error);
      toast({
        title: "Error",
        description: "Failed to check symptoms. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-primary">AI Symptom Checker</CardTitle>
        <CardDescription>Describe your dental symptoms to get general information. This is not a substitute for professional advice.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="symptoms">Your Symptoms</FormLabel>
                  <FormControl>
                    <Textarea
                      id="symptoms"
                      placeholder="e.g., My tooth aches when I drink cold water, and my gums are swollen."
                      className="resize-none"
                      rows={4}
                      {...field}
                      aria-describedby="symptoms-message"
                    />
                  </FormControl>
                  <FormMessage id="symptoms-message" />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Check Symptoms"}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {result && (
        <CardContent className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold text-primary">Information:</h3>
          <p className="text-sm text-foreground/80 whitespace-pre-wrap">{result.information}</p>
          <p className="mt-4 text-xs text-muted-foreground italic">{result.disclaimer}</p>
        </CardContent>
      )}
    </Card>
  );
}
