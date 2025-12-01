import React, { useState } from 'react'

export const FloatingInput: React.FC<{
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (v: string) => void;
    onEnter?: () => void;
}> = ({ id, label, type = "text", value, onChange, onEnter }) => {
    const [focused, setFocused] = useState(false);
    const shrink = focused || value.length > 0;

    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
                className="w-full px-4 py-2 leading-9 bg-transparent outline-none text-text-dark"
            />

            <label
                htmlFor={id}
                className={`absolute left-4 transition-all duration-150 pointer-events-none text-xs  text-text-gray ${shrink
                    ? "-top-2 bg-white px-1.5"
                    : "top-4.5"
                    }`}
            >
                {label}
            </label>
        </div>
    );
};