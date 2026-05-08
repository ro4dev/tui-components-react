import type { ReactNode } from 'react';
import './EmptyState.css';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ icon = '[∅]', title, description, action }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>
      <div className="empty-state__title">{title}</div>
      <div className="empty-state__desc">{description}</div>
      {action}
    </div>
  );
}
