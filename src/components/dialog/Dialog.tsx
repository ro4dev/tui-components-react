import { useEffect, type ReactNode } from 'react';
import type { DialogVariant } from '../types';
import './Dialog.css';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  variant?: DialogVariant;
}

export function Dialog({ open, onClose, title, children, footer, variant = 'default' }: DialogProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className={`dialog-overlay${open ? ' active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`dialog${variant === 'dark' ? ' dialog-dark' : ''}`}>
        <div className="dialog__header">
          <span className="dialog__title">{title}</span>
          <button className="dialog__close" onClick={onClose}>[×]</button>
        </div>
        <div className="dialog__body">{children}</div>
        {footer && <div className="dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
