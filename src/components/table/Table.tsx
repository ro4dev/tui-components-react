import type { ReactNode } from 'react';
import './Table.css';

interface Column {
  key: string;
  label: string;
  numeric?: boolean;
}

interface TableProps {
  columns: Column[];
  rows: Record<string, ReactNode>[];
  compact?: boolean;
  bordered?: boolean;
}

export function Table({ columns, rows, compact, bordered }: TableProps) {
  const cls = [
    'tui-table',
    compact ? 'tui-table--compact' : '',
    bordered ? 'tui-table--bordered' : '',
  ].filter(Boolean).join(' ');

  return (
    <table className={cls}>
      <thead>
        <tr>
          {columns.map((col) => <th key={col.key}>{col.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key} className={col.numeric ? 'numeric' : ''}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
