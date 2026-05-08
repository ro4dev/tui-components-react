import type { BadgeState } from '../types';
import './Badge.css';

interface StatusBadgeProps {
  state: BadgeState;
  label?: string;
}

const labels: Record<BadgeState, string> = {
  active: 'Active',
  warning: 'Warning',
  error: 'Error',
  idle: 'Idle',
};

export function StatusBadge({ state, label }: StatusBadgeProps) {
  return <span className={`badge badge-${state}`}>{label ?? labels[state]}</span>;
}

interface LabelBadgeProps {
  children: string;
  accent?: boolean;
}

export function LabelBadge({ children, accent }: LabelBadgeProps) {
  return <span className={`badge ${accent ? 'badge-accent' : 'badge-label'}`}>{children}</span>;
}

interface CounterBadgeProps {
  count: number | string;
}

export function CounterBadge({ count }: CounterBadgeProps) {
  return <span className="badge-counter">{count}</span>;
}
