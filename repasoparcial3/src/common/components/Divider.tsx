// common/components/Divider.tsx
interface DividerProps {
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export default function Divider({ variant = 'horizontal', className = '' }: DividerProps) {
  if (variant === 'vertical') {
    return <div className={`divider divider-horizontal ${className}`}></div>;
  }
  return <div className={`divider ${className}`}></div>;
}