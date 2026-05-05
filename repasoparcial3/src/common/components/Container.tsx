// common/components/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}

const maxWidths = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full'
};

export default function Container({ 
  children, 
  maxWidth = 'xl', 
  className = '' 
}: ContainerProps) {
  return (
    <div className={`${maxWidths[maxWidth]} mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}