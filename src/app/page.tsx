
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { AIToolsSection } from '@/components/sections/AIToolsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <AIToolsSection />
      <ContactSection />
    </>
  );
}
