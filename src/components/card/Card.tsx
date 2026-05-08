import type { ReactNode } from 'react';
import './Card.css';

interface CardFlatProps {
  title: string;
  children: ReactNode;
}

export function CardFlat({ title, children }: CardFlatProps) {
  return (
    <div className="card-flat">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function CardHeader({ title, actions, children }: CardHeaderProps) {
  return (
    <div className="card-header">
      <div className="card-header__head">
        <span>{title}</span>
        {actions}
      </div>
      <div className="card-header__body">{children}</div>
    </div>
  );
}

interface CardDarkProps {
  command?: string;
  children: ReactNode;
}

export function CardDark({ command, children }: CardDarkProps) {
  return (
    <div className="card-dark">
      {command && <div className="card-dark__cmd">{command}</div>}
      <div className="card-dark__line">{children}</div>
    </div>
  );
}

interface StatCell {
  number: number | string;
  label: string;
}

interface CardStatsProps {
  cells: StatCell[];
}

export function CardStats({ cells }: CardStatsProps) {
  return (
    <div className="card-stats">
      {cells.map((cell, i) => (
        <div className="card-stats__cell" key={i}>
          <div className="card-stats__number">{cell.number}</div>
          <div className="card-stats__label">{cell.label}</div>
        </div>
      ))}
    </div>
  );
}
