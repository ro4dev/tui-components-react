import type { ReactNode } from 'react';
import './Navigation.css';

interface SidebarItem {
  label: string;
  active?: boolean;
  nested?: boolean;
}

interface SidebarGroup {
  header: string;
  items: SidebarItem[];
}

interface SidebarNavProps {
  groups: SidebarGroup[];
}

export function SidebarNav({ groups }: SidebarNavProps) {
  return (
    <div className="sidebar-nav">
      {groups.map((group, gi) => (
        <div key={gi}>
          <div className="sidebar-group-header">{group.header}</div>
          {group.items.map((item, ii) => (
            <div
              key={ii}
              className={item.nested ? 'sidebar-nested' : `sidebar-item${item.active ? ' sidebar-item--active' : ''}`}
            >
              {item.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

interface PaginationProps {
  current: number;
  total: number;
  onChange?: (page: number) => void;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
  totalItems?: number;
}

export function Pagination({ current, total, onChange, pageSize, pageSizeOptions, onPageSizeChange, totalItems }: PaginationProps) {
  const pages: ReactNode[] = [];
  const addPage = (n: number, active?: boolean) => {
    pages.push(
      <button key={n} className={`page-btn${active ? ' page-btn--active' : ''}`} onClick={() => onChange?.(n)}>
        {n}
      </button>
    );
  };

  addPage(1, current === 1);
  if (current > 3) pages.push(<span key="e1" className="ellipsis">···</span>);
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    addPage(i, current === i);
  }
  if (current < total - 2) pages.push(<span key="e2" className="ellipsis">···</span>);
  if (total > 1) addPage(total, current === total);

  return (
    <div className="pagination">
      {pageSizeOptions && onPageSizeChange && (
        <div className="pagination__size">
          <select
            className="page-size-select"
            value={pageSize ?? pageSizeOptions[0]}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt} / page</option>
            ))}
          </select>
        </div>
      )}
      {totalItems != null && pageSize && (
        <span className="pagination__info">
          {(current - 1) * pageSize + 1}–{Math.min(current * pageSize, totalItems)} of {totalItems}
        </span>
      )}
      <button className="page-btn page-btn--nav" onClick={() => onChange?.(Math.max(1, current - 1))}>[←]</button>
      {pages}
      <button className="page-btn page-btn--nav" onClick={() => onChange?.(Math.min(total, current + 1))}>[→]</button>
    </div>
  );
}
