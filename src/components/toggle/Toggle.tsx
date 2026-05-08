import { useState } from 'react';
import type { ToggleVariant } from '../types';
import './Toggle.css';

interface ToggleProps {
  label: string;
  description?: string;
  defaultOn?: boolean;
  variant?: ToggleVariant;
  onChange?: (on: boolean) => void;
}

export function Toggle({ label, description, defaultOn, variant = 'ascii', onChange }: ToggleProps) {
  const [on, setOn] = useState(defaultOn ?? false);

  const toggle = () => {
    setOn(!on);
    onChange?.(!on);
  };

  return (
    <div className="toggle-row">
      <div className="toggle-info">
        <span className="toggle-label">{label}</span>
        {description && <span className="toggle-desc">{description}</span>}
      </div>
      {variant === 'ascii' ? (
        <button className={`toggle-ascii${on ? ' active' : ''}`} onClick={toggle}>
          {on ? '[x]' : '[ ]'}
        </button>
      ) : (
        <button className={`toggle-switch${on ? ' active' : ''}`} onClick={toggle}>
          <div className="knob" />
        </button>
      )}
    </div>
  );
}
