// common/components/CardBasic.tsx
interface CardBasicProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function CardBasic({ children, className = '', hover = true }: CardBasicProps) {
  return (
    <div className={`card bg-base-100 shadow-xl ${hover ? 'hover:shadow-2xl transition-all duration-300' : ''} ${className}`}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}