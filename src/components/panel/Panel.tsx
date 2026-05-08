import type { ReactNode } from 'react';
import './Panel.css';

interface PanelProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export function Panel({ header, footer, children }: PanelProps) {
  return (
    <div className="panel">
      {header && <div className="panel__header">{header}</div>}
      <div className="panel__body">{children}</div>
      {footer && <div className="panel__footer">{footer}</div>}
    </div>
  );
}
