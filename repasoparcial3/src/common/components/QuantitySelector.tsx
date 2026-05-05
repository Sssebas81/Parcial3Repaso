// common/components/QuantitySelector.tsx
'use client';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ 
  quantity, 
  onQuantityChange, 
  min = 1, 
  max = 99 
}: QuantitySelectorProps) {
  const decrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={decrease} className="btn btn-outline btn-sm" disabled={quantity <= min}>
        -
      </button>
      <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
      <button onClick={increase} className="btn btn-outline btn-sm" disabled={quantity >= max}>
        +
      </button>
    </div>
  );
}