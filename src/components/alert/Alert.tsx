import { useState, type ReactNode } from 'react';
import type { AlertType } from '../types';
import './Alert.css';

interface AlertProps {
  type: AlertType;
  title: string;
  children: ReactNode;
  onDismiss?: () => void;
  inline?: boolean;
}

const icons: Record<AlertType, string> = {
  info: '[i]',
  warning: '[!]',
  danger: '[x]',
  success: '[✓]',
};

export function Alert({ type, title, children, onDismiss, inline }: AlertProps) {
  const [removing, setRemoving] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setRemoving(true);
    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 300);
  };

  const cls = [
    'alert',
    `alert-${type}`,
    inline ? 'alert-inline' : '',
    removing ? 'removing' : '',
  ].filter(Boolean).join(' ');

  if (!visible) return null;

  return (
    <div className={cls}>
      {!inline && (
        <button className="alert__close" onClick={handleDismiss}>[×]</button>
      )}
      <span className="alert__icon">{icons[type]}</span>
      <span className="alert__title">{title}</span>
      <span className="alert__body">{children}</span>
    </div>
  );
}
