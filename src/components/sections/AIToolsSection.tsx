
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SymptomCheckerForm } from '@/components/ai/SymptomCheckerForm';
import { DentalFAQForm } from '@/components/ai/DentalFAQForm';
import { OralHealthTipsForm } from '@/components/ai/OralHealthTipsForm';
import { Bot, HelpCircle, Lightbulb } from 'lucide-react';

export function AIToolsSection() {
  return (
    <SectionWrapper id="ai-tools">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
          AI-Powered Dental Assistants
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore our intelligent tools designed to provide quick information and personalized advice.
        </p>
      </div>
      <Tabs defaultValue="symptom-checker" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="symptom-checker" className="text-xs sm:text-sm">
            <Bot className="w-4 h-4 mr-1 sm:mr-2" /> Symptom Checker
          </TabsTrigger>
          <TabsTrigger value="dental-faq" className="text-xs sm:text-sm">
            <HelpCircle className="w-4 h-4 mr-1 sm:mr-2" /> Dental FAQ
          </TabsTrigger>
          <TabsTrigger value="oral-health-tips" className="text-xs sm:text-sm">
            <Lightbulb className="w-4 h-4 mr-1 sm:mr-2" /> Health Tips
          </TabsTrigger>
        </TabsList>
        <TabsContent value="symptom-checker">
          <SymptomCheckerForm />
        </TabsContent>
        <TabsContent value="dental-faq">
          <DentalFAQForm />
        </TabsContent>
        <TabsContent value="oral-health-tips">
          <OralHealthTipsForm />
        </TabsContent>
      </Tabs>
    </SectionWrapper>
  );
}
