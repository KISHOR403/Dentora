import React from 'react';

export const ToothIcon = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2C8 2 6 4.5 6 8.5C6 11 7 14 8 18C8.5 20 9.5 22 10.5 22C11.5 22 11.5 20 12 18C12.5 20 12.5 22 13.5 22C14.5 22 15.5 20 16 18C17 14 18 11 18 8.5C18 4.5 16 2 12 2Z" />
    <path d="M9.5 9C10.5 7.5 13.5 7.5 14.5 9" />
  </svg>
);

export const ImplantIcon = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Crown */}
    <path d="M7 3C7 2.45 7.45 2 8 2H16C16.55 2 17 2.45 17 3V7C17 8.5 15.5 10 14 10H10C8.5 10 7 8.5 7 7V3Z" />
    {/* Titanium Screw Base */}
    <line x1="12" y1="10" x2="12" y2="22" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9.5" y1="16" x2="14.5" y2="16" />
    <line x1="10" y1="19" x2="14" y2="19" />
  </svg>
);

export const SparkleIcon = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2L14.2 8.8L21 11L14.2 13.2L12 20L9.8 13.2L3 11L9.8 8.8L12 2Z" />
  </svg>
);

export const ShieldDentalIcon = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const BracesIcon = ({ className = 'w-6 h-6', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3" y="9" width="4" height="6" rx="1" />
    <rect x="10" y="9" width="4" height="6" rx="1" />
    <rect x="17" y="9" width="4" height="6" rx="1" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);
