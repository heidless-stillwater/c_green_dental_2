
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('w-[95%] mx-auto py-12 md:py-16 lg:py-20', className)}>
      <div className="container px-0"> {/* Use container for max-width and padding control if needed, or remove for true 95% */}
        {children}
      </div>
    </section>
  );
}
