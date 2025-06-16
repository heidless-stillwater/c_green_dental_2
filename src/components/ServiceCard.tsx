
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react'; // For potential icon prop

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  Icon?: LucideIcon; // Optional icon component
  dataAiHint?: string;
}

export function ServiceCard({ title, description, imageSrc, imageAlt, Icon, dataAiHint }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          layout="fill" 
          objectFit="cover" 
          data-ai-hint={dataAiHint || "dental service"}
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
