// common/components/Checkbox.tsx
'use client';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Checkbox({ label, checked, onChange, disabled }: CheckboxProps) {
  return (
    <label className="label cursor-pointer gap-3 justify-start">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="checkbox checkbox-primary"
      />
      <span className="label-text">{label}</span>
    </label>
  );
}