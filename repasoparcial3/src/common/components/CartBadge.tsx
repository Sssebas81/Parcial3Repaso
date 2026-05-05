// common/components/CartBadge.tsx
'use client';

interface CartBadgeProps {
  count: number;
  onClick?: () => void;
}

export default function CartBadge({ count, onClick }: CartBadgeProps) {
  return (
    <button onClick={onClick} className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 15v6" />
        </svg>
        {count > 0 && (
          <span className="badge badge-primary badge-sm indicator-item">
            {count}
          </span>
        )}
      </div>
    </button>
  );
}