import type { ReactNode } from 'react';
import './Keyboard.css';

interface KbdProps {
  children: ReactNode;
  active?: boolean;
}

export function Kbd({ children, active }: KbdProps) {
  return <kbd className={`kbd${active ? ' kbd--active' : ''}`}>{children}</kbd>;
}
