// common/components/PriceFilter.tsx
'use client';

interface PriceFilterProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export default function PriceFilter({ min, max, value, onChange }: PriceFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value[0]}
        onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
        className="range range-primary range-sm"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
        className="range range-primary range-sm"
      />
    </div>
  );
}