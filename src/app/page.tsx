
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TeamSection, type TeamSectionProps } from '@/components/sections/TeamSection';
import { AIToolsSection } from '@/components/sections/AIToolsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const teamData: TeamSectionProps['staffMembers'] = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Lead Dentist',
    description:
      'With over 15 years of experience, Dr. Reed is passionate about providing comprehensive and compassionate dental care.',
    imageSrc: 'https://storage.googleapis.com/c_the_green_dental_bucket/headshot-0.jpg',
    imageAlt: 'Portrait of Dr. Evelyn Reed',
    dataAiHint: 'female dentist',
  },
  {
    name: 'Dr. Jon Snow',
    role: 'Dentist',
    description:
      'Dr. Chen specializes in creating beautiful smiles through advanced orthodontic treatments.',
    imageSrc: 'https://storage.googleapis.com/c_the_green_dental_bucket/headshot-2.jpg',
    imageAlt: 'Portrait of Dr. Michael Chen',
    dataAiHint: 'male orthodontist',
  },
  {
    name: 'Dr. Michaela Chen',
    role: 'Orthodontist',
    description:
      'Dr. Chen specializes in creating beautiful smiles through advanced orthodontic treatments.',
    imageSrc: 'https://storage.googleapis.com/c_the_green_dental_bucket/headshot-3.jpeg',

    imageAlt: 'Portrait of Dr. Michaela Chen',
    dataAiHint: 'male orthodontist',
  },
  {
    name: 'Sarah Adams, RDH',
    role: 'Dental Hygienist',
    description:
      'Sarah is dedicated to educating patients on oral hygiene and providing thorough cleanings.',
    imageSrc: 'https://storage.googleapis.com/c_the_green_dental_bucket/headshot-1.jpg',
    imageAlt: 'Portrait of Sarah Adams, RDH',
    dataAiHint: 'female hygienist',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection staffMembers={teamData} />
      <AIToolsSection />
      <ContactSection />
    </>
  );
}
