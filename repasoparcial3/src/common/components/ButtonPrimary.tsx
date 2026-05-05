'use client';

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function ButtonPrimary({ 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: ButtonPrimaryProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-primary ${className}`}
    >
      {children}
    </button>
  );
}