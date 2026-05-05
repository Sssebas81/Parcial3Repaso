// common/components/Rating.tsx
'use client';

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'rating-sm',
  md: 'rating-md',
  lg: 'rating-lg'
};

export default function Rating({ value, onChange, readonly = false, size = 'md' }: RatingProps) {
  return (
    <div className={`rating ${sizes[size]} ${readonly ? 'rating-half' : ''}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <input
          key={star}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          checked={star === Math.round(value)}
          readOnly={readonly}
          onChange={() => onChange?.(star)}
        />
      ))}
    </div>
  );
}