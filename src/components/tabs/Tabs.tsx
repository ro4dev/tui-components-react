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
  fullWidth?: boolean;
}

export function Tabs({ tabs, variant = 'strip', defaultTab, fullWidth }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);

  const isStrip = variant === 'strip';
  const containerCls = isStrip
    ? `tab-strip${fullWidth ? ' tab-strip--full' : ''}`
    : `tab-pills${fullWidth ? ' tab-pills--full' : ''}`;

  return (
    <div>
      <div className={isStrip ? 'tab-strip' : 'tab-pills'}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={
              isStrip
                ? `tab-strip__item${active === tab.id ? ' tab-strip__item--active' : ''}${fullWidth ? ' tab-strip__item--full' : ''}`
                : `tab-pills__item${active === tab.id ? ' tab-pills__item--active' : ''}${fullWidth ? ' tab-pills__item--full' : ''}`
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
