"use client";

import { toggleTheme } from "@/lib/theme";

export function ThemeToggle() {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Переключить тему"
      onClick={toggleTheme}
    >
      <svg
        className="theme-toggle__icon theme-toggle__icon--sun"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <line
          x1="10"
          y1="1"
          x2="10"
          y2="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="17"
          x2="10"
          y2="19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="10"
          x2="17"
          y2="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="10"
          x2="1"
          y2="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16.364"
          y1="3.636"
          x2="14.95"
          y2="5.05"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="5.05"
          y1="14.95"
          x2="3.636"
          y2="16.364"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16.364"
          y1="16.364"
          x2="14.95"
          y2="14.95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="5.05"
          y1="5.05"
          x2="3.636"
          y2="3.636"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="theme-toggle__icon theme-toggle__icon--moon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M17 10.5C16.1 13.7 13.1 16 9.5 16C5.4 16 2 12.6 2 8.5C2 4.9 4.3 1.9 7.5 1C7.2 1.6 7 2.3 7 3C7 6.3 9.7 9 13 9C13.7 9 14.4 8.8 15 8.5C15.6 9.1 16.4 9.7 17 10.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
