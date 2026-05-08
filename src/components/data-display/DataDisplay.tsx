import type { ReactNode } from 'react';
import './DataDisplay.css';

interface ListItemProps {
  bullet?: boolean;
  numbered?: boolean;
  index?: number;
  children: ReactNode;
}

export function ListItem({ bullet, numbered, index, children }: ListItemProps) {
  return (
    <div className="tui-list-item">
      {bullet && <span style={{ color: 'var(--mute)', width: 16 }}>[•]</span>}
      {numbered && <span style={{ color: 'var(--mute)', width: 16 }}>{index}.</span>}
      {children}
    </div>
  );
}

interface DefinitionPair {
  term: string;
  description: string;
}

interface DefinitionListProps {
  items: DefinitionPair[];
}

export function DefinitionList({ items }: DefinitionListProps) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>
          <div className="definition-term">{item.term}</div>
          <div className="definition-desc">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

interface TagProps {
  children: string;
  onRemove?: () => void;
}

export function Tag({ children, onRemove }: TagProps) {
  return (
    <span className="tag">
      {children}
      {onRemove && <button className="tag-remove" onClick={onRemove}>[×]</button>}
    </span>
  );
}
