
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateOralHealthTips, type OralHealthTipsOutput } from "@/ai/flows/ai-oral-health-tips";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const oralHealthTipsSchema = z.object({
  brushingFrequency: z.string().min(1, "Brushing frequency is required."),
  flossingFrequency: z.string().min(1, "Flossing frequency is required."),
  mouthwashUsage: z.string().min(1, "Mouthwash usage is required."),
  dentalVisits: z.string().min(1, "Dental visit frequency is required."),
  concerns: z.string().optional(),
});
type OralHealthTipsFormValues = z.infer<typeof oralHealthTipsSchema>;

export function OralHealthTipsForm() {
  const [result, setResult] = useState<OralHealthTipsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<OralHealthTipsFormValues>({
    resolver: zodResolver(oralHealthTipsSchema),
    defaultValues: {
      brushingFrequency: "",
      flossingFrequency: "",
      mouthwashUsage: "",
      dentalVisits: "",
      concerns: "",
    },
  });

  const onSubmit: SubmitHandler<OralHealthTipsFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateOralHealthTips({
        ...data,
        concerns: data.concerns || "None", // AI flow expects concerns
      });
      setResult(response);
    } catch (error) {
      console.error("Oral health tips error:", error);
      toast({
        title: "Error",
        description: "Failed to generate tips. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const frequencyOptions = [
    { value: "once_daily", label: "Once daily" },
    { value: "twice_daily", label: "Twice daily" },
    { value: "thrice_daily", label: "Thrice daily" },
    { value: "never", label: "Never" },
    { value: "rarely", label: "Rarely" },
  ];

  const dentalVisitOptions = [
    { value: "every_6_months", label: "Every 6 months" },
    { value: "once_a_year", label: "Once a year" },
    { value: "rarely", label: "Rarely" },
    { value: "only_when_problem", label: "Only when there's a problem" },
  ];
  
  const yesNoOptions = [
    { value: "yes_daily", label: "Yes, daily" },
    { value: "yes_sometimes", label: "Yes, sometimes" },
    { value: "no", label: "No" },
  ];


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-primary">AI Oral Health Tips</CardTitle>
        <CardDescription>Get personalized oral health tips based on your habits.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="brushingFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brushing Frequency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select frequency" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {frequencyOptions.filter(opt => opt.value !== 'never' && opt.value !== 'rarely').map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="flossingFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Flossing Frequency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select frequency" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {frequencyOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mouthwashUsage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mouthwash Usage</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select usage" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {yesNoOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dentalVisits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dental Visits</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select frequency" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dentalVisitOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="concerns"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="concerns">Specific Concerns (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      id="concerns"
                      placeholder="e.g., Gum bleeding, tooth sensitivity, bad breath"
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Get Tips"}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {result && (
        <CardContent className="mt-6 border-t pt-6">
          <h3 className="text-lg font-semibold text-primary">Your Personalized Tips:</h3>
          <p className="text-sm text-foreground/80 whitespace-pre-wrap">{result.tips}</p>
        </CardContent>
      )}
    </Card>
  );
}
