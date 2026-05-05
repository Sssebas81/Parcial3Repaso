// common/components/Dropdown.tsx
'use client';

import { useState } from 'react';

interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
}

export default function Dropdown({ trigger, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown dropdown-end">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <ul className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-xl">
          {items.map((item, idx) => (
            <li key={idx}>
              <button onClick={() => { item.onClick(); setIsOpen(false); }} className="gap-2">
                {item.icon}
                {item.label}
              </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }