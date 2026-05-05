// common/components/RadioGroup.tsx
'use client';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({ name, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label key={option.value} className="label cursor-pointer gap-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="radio radio-primary"
          />
          <span className="label-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
}