import React from "react";

export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Stylized geometric CC monogram icon matching reference */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} text-zinc-900 shrink-0`}
      >
        <path
          d="M10 6C6.68629 6 4 8.68629 4 12V20C4 23.3137 6.68629 26 10 26H12"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M22 6C25.3137 6 28 8.68629 28 12V20C28 23.3137 25.3137 26 22 26H20"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M11 11C9.34315 11 8 12.3431 8 14V18C8 19.6569 9.34315 21 11 21H13"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M21 11C22.6569 11 24 12.3431 24 14V18C24 19.6569 22.6569 21 21 21H19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-bold text-lg sm:text-xl tracking-tight text-zinc-950">
        ClauseCraft
      </span>
    </div>
  );
}
