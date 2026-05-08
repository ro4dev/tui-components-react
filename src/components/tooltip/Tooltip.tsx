import type { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="tooltip-trigger" tabIndex={0}>
      {children}
      <span className="tooltip">{label}</span>
    </span>
  );
}
