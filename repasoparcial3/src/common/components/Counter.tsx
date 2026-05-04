"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center gap-3">
            <button onClick={handleDecrease} className="btn btn-outline btn-sm">
                -
            </button>

            <span className="text-lg font-semibold">{count}</span>

            <button onClick={handleIncrease} className="btn btn-primary btn-sm">
                +
            </button>
        </div>
    );
}