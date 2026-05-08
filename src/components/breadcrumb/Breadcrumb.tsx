import type { BreadcrumbItem } from '../types';
import './Breadcrumb.css';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (item: BreadcrumbItem) => void;
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="breadcrumb-separator">/</span>}
          <span
            className={`breadcrumb-item${item.active ? ' active' : ''}`}
            onClick={() => onNavigate?.(item)}
          >
            {item.label}
          </span>
        </span>
      ))}
    </div>
  );
}
