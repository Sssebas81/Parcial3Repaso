// common/components/Grid.tsx
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 4 | 6 | 8;
  className?: string;
}

const columns = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6'
};

const gaps = {
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8'
};

export default function Grid({ children, cols = 4, gap = 6, className = '' }: GridProps) {
  return (
    <div className={`grid ${columns[cols]} ${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
}