// common/components/ButtonGroup.tsx
interface ButtonGroupProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function ButtonGroup({ 
  children, 
  orientation = 'horizontal',
  className = ''
}: ButtonGroupProps) {
  return (
    <div className={`join ${orientation === 'vertical' ? 'join-vertical' : ''} ${className}`}>
      {children}
    </div>
  );
}