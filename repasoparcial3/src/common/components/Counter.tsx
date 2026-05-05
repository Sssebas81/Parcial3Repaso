'use client';

import { useState, useEffect } from 'react';

interface CounterProps {
  value: number;           // ← Asegura que se llame 'value'
  onChange: (value: number) => void;  // ← Asegura que se llame 'onChange'
  min?: number;
  max?: number;
}

export default function Counter({ value, onChange, min = 0, max = 10 }: CounterProps) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const increment = () => {
    if (count < max) {
      const newValue = count + 1;
      setCount(newValue);
      onChange(newValue);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newValue = count - 1;
      setCount(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={decrement} className="btn btn-sm btn-outline">-</button>
      <span className="text-xl w-12 text-center">{count}</span>
      <button onClick={increment} className="btn btn-sm btn-outline">+</button>
    </div>
  );
}