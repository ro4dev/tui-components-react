import { useState, type ReactNode } from 'react';
import './Accordion.css';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="marker">{open ? '−' : '+'}</span>
      </button>
      <div className={`accordion-content${open ? ' open' : ''}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div>{children}</div>;
}
