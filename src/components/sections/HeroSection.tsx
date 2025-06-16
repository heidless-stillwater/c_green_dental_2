
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import Link from 'next/link';

export function HeroSection() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <SectionWrapper id="home" className="pt-20 md:pt-24 lg:pt-32 w-[90%] mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tight text-primary">
            Bright Smiles, Healthy Life
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80">
            Experience exceptional dental care in a modern, comfortable environment. Our team is dedicated to your oral health and beautiful smile.
          </p>
          <div className="flex space-x-4 justify-center">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="#contact" onClick={scrollToContact}>Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="mx-auto md:mx-0">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://storage.googleapis.com/c_the_green_dental_bucket/dental-practice-0-live.jpg"
            alt="Modern dental clinic interior"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
            data-ai-hint="dental clinic modern"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
