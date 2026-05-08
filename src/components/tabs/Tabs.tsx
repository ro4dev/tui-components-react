import { useState, type ReactNode } from 'react';
import type { TabVariant } from '../types';
import './Tabs.css';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  variant?: TabVariant;
  defaultTab?: string;
}

export function Tabs({ tabs, variant = 'strip', defaultTab }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);

  const isStrip = variant === 'strip';

  return (
    <div>
      <div className={isStrip ? 'tab-strip' : 'tab-pills'}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={
              isStrip
                ? `tab-strip__item${active === tab.id ? ' tab-strip__item--active' : ''}`
                : `tab-pills__item${active === tab.id ? ' tab-pills__item--active' : ''}`
            }
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={
            isStrip
              ? `tab-panel${active === tab.id ? ' tab-panel--active' : ''}`
              : `pill-panel${active === tab.id ? ' pill-panel--active' : ''}`
          }
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
