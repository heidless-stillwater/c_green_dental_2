
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MapEmbed } from '@/components/MapEmbed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="w-[90%] mx-auto bg-secondary/30 dark:bg-card/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          We&apos;re here to help with all your dental needs. Contact us today to schedule an appointment or ask any questions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <MapEmbed className="min-h-[300px] md:min-h-[400px]" center={{ lat: 51.5861, lng: -0.0795 }} zoom={15} />
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-foreground/80">200 W Green Rd, London N15 5AG</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <Link href="tel:+1234567890" className="text-foreground/80 hover:text-primary transition-colors">
                  0208 800 7373
                </Link>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <Link href="mailto:contact@greendental.com" className="text-foreground/80 hover:text-primary transition-colors">
                  contact@greendental.com
                </Link>
              </div>
            </div>
            <Button size="lg" className="w-full mt-4 shadow-md hover:shadow-primary/50 transition-shadow">
              Schedule an Appointment Online
            </Button>
             <p className="text-xs text-muted-foreground text-center"> (Booking functionality is illustrative) </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
