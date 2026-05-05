import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'primary' | 'secondary';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary/5',
  secondary: 'bg-secondary/5'
};

const paddings = {
  sm: 'py-8',
  md: 'py-16',
  lg: 'py-24',
  none: 'py-0'
};

export default function Section({ 
  children, 
  background = 'white', 
  padding = 'md',
  className = ''
}: SectionProps) {
  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}