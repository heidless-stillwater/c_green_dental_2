
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  const features = [
    "State-of-the-art dental technology",
    "Experienced and compassionate staff",
    "Comprehensive range of dental services",
    "Comfortable and relaxing environment",
    "Personalized treatment plans"
  ];

  return (
    <SectionWrapper id="about" className="w-[90%] mx-auto bg-secondary/30 dark:bg-card/50">
 <div className="text-center mb-12 max-w-4xl mx-auto">
 <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
          About Green Dental
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          At Green Dental, we are committed to providing top-quality dental care tailored to your individual needs. Our mission is to help you achieve and maintain a healthy, beautiful smile for life.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Our Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              We believe in a patient-centered approach, focusing on preventive care and education. We strive to create a welcoming atmosphere where you feel informed and comfortable throughout your dental journey.
            </p>
            <p>
              Utilizing the latest advancements in dentistry, we offer a wide spectrum of services from routine check-ups to advanced cosmetic and restorative procedures.
            </p>
          </CardContent>
        </Card>
        <div className="space-y-4">
 <h3 className="text-2xl font-semibold text-primary text-center md:text-left">Why Choose Us?</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
