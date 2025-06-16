
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ServiceCard } from '@/components/ServiceCard';
import { HeartPulse, Stethoscope, Smile, Microscope } from 'lucide-react'; // Example icons

const services = [
  {
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, fillings, and preventive care to maintain your oral health.",
    imageSrc: "https://placehold.co/300x200.png",
    imageAlt: "General Dentistry tools",
    Icon: HeartPulse,
    dataAiHint: "dental checkup"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with teeth whitening, veneers, bonding, and smile makeovers.",
    imageSrc: "https://placehold.co/300x200.png",
    imageAlt: "Cosmetic Dentistry example",
    Icon: Smile,
    dataAiHint: "teeth whitening"
  },
  {
    title: "Restorative Dentistry",
    description: "Repair and restore damaged teeth with crowns, bridges, dentures, and dental implants.",
    imageSrc: "https://placehold.co/300x200.png",
    imageAlt: "Dental crowns",
    Icon: Stethoscope, // Using Stethoscope as a placeholder for restoration concept
    dataAiHint: "dental implant"
  },
  {
    title: "Advanced Diagnostics",
    description: "Utilizing modern technology for precise diagnosis, including digital X-rays and 3D imaging.",
    imageSrc: "https://placehold.co/300x200.png",
    imageAlt: "Dental X-ray machine",
    Icon: Microscope,
    dataAiHint: "dental technology"
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-primary">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          We offer a comprehensive range of dental services to meet all your needs.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            Icon={service.Icon}
            dataAiHint={service.dataAiHint}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

