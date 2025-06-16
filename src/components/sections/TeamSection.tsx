
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { StaffCard } from '@/components/StaffCard';

// Define the type for a staff member, aligning with StaffCardProps
interface StaffMember {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
  description?: string; // Optional: for data completeness, not directly used by StaffCard unless StaffCard is modified
}

export interface TeamSectionProps {
  staffMembers?: StaffMember[];
}

// Default team members if no prop is passed
const defaultTeamMembers: StaffMember[] = [
  {
    name: "Dr. Evelyn Reed",
    role: "Lead Dentist",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Dr. Evelyn Reed",
    dataAiHint: "female dentist",
    description: "With over 15 years of experience, Dr. Reed is passionate about providing comprehensive and compassionate dental care."
  },
  {
    name: "Mark Olsen", // Example, matching previous internal data structure
    role: "Dental Hygienist",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Mark Olsen",
    dataAiHint: "male hygienist",
    description: "Mark is dedicated to patient education and thorough cleanings."
  },
  {
    name: "Sarah Chen", // Example
    role: "Office Manager",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Sarah Chen",
    dataAiHint: "female manager",
    description: "Sarah ensures the clinic runs smoothly and efficiently."
  },
  {
    name: "Dr. Ben Carter", // Example
    role: "Associate Dentist",
    imageSrc: "https://placehold.co/200x200.png",
    imageAlt: "Portrait of Dr. Ben Carter",
    dataAiHint: "male dentist",
    description: "Dr. Carter provides a wide range of dental treatments with a gentle approach."
  },
];

export function TeamSection({ staffMembers }: TeamSectionProps) {
  const membersToDisplay = staffMembers && staffMembers.length > 0 ? staffMembers : defaultTeamMembers;

  return (
    <SectionWrapper id="team" className="w-[90%] mx-auto bg-secondary/30 dark:bg-card/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Our skilled and friendly team is dedicated to providing you with the best dental experience.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {membersToDisplay.map((member) => (
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
