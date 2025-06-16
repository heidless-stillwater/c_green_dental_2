
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { StaffCard } from '@/components/StaffCard';

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Lead Dentist",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Dr. Evelyn Reed",
    dataAiHint: "female dentist"
  },
  {
    name: "Mark Olsen",
    role: "Dental Hygienist",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Mark Olsen",
    dataAiHint: "male hygienist"
  },
  {
    name: "Sarah Chen",
    role: "Office Manager",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Sarah Chen",
    dataAiHint: "female manager"
  },
  {
    name: "Dr. Ben Carter",
    role: "Associate Dentist",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Dr. Ben Carter",
    dataAiHint: "male dentist"
  },
];

export function TeamSection() {
  return (
    <SectionWrapper id="team" className="bg-secondary/30 dark:bg-card/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Our skilled and friendly team is dedicated to providing you with the best dental experience.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <StaffCard
            key={member.name}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            imageAlt={member.imageAlt}
            dataAiHint={member.dataAiHint}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
