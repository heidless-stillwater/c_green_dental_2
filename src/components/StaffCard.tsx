
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface StaffCardProps {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
}

export function StaffCard({ name, role, imageSrc, imageAlt, dataAiHint }: StaffCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center pb-2">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary mb-4">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={dataAiHint || "professional portrait"}
          />
        </div>
        <CardTitle className="text-xl font-semibold text-primary">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{role}</p>
      </CardContent>
      {/* Optional: Add social links or short bio in CardFooter */}
    </Card>
  );
}
