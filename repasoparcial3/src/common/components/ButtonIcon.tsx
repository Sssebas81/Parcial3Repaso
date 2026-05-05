// common/components/ButtonIcon.tsx
'use client';

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  outline: 'btn-outline'
};

const sizes = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg'
};

export default function ButtonIcon({ 
  icon, 
  onClick, 
  variant = 'ghost', 
  size = 'md',
  className = ''
}: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-circle ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon}
    </button>
  );
}