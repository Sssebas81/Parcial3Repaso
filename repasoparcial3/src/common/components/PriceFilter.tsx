'use client';

import { useState, useEffect } from 'react';

interface PriceFilterProps {
  minPrice: number;      // ← Debe llamarse exactamente así
  maxPrice: number;      // ← Debe llamarse exactamente así
  onPriceChange: (min: number, max: number) => void;
  step?: number;
}

export default function PriceFilter({ 
  minPrice, 
  maxPrice, 
  onPriceChange, 
  step = 1000 
}: PriceFilterProps) {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  useEffect(() => {
    setMinValue(minPrice);
    setMaxValue(maxPrice);
  }, [minPrice, maxPrice]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= maxValue - step) {
      setMinValue(value);
      onPriceChange(value, maxValue);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= minValue + step) {
      setMaxValue(value);
      onPriceChange(minValue, value);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <h3 className="font-semibold text-lg mb-4">💰 Filter by Price</h3>
      
      <div className="flex justify-between mb-4">
        <span>Min: ${minValue.toLocaleString()}</span>
        <span>Max: ${maxValue.toLocaleString()}</span>
      </div>
      
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={minValue}
        onChange={handleMinChange}
        step={step}
        className="range range-primary range-sm"
      />
      
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={maxValue}
        onChange={handleMaxChange}
        step={step}
        className="range range-primary range-sm mt-4"
      />

      <button
        onClick={() => {
          setMinValue(minPrice);
          setMaxValue(maxPrice);
          onPriceChange(minPrice, maxPrice);
        }}
        className="btn btn-outline btn-sm mt-4"
      >
        Reset
      </button>
    </div>
  );
}