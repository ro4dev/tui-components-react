import { useEffect, useState } from 'react';
import type { AlertType } from '../types';
import './Feedback.css';

interface ToastData {
  id: number;
  type: AlertType;
  message: string;
}

let toastId = 0;
const listeners: Array<(toast: ToastData) => void> = [];

export function toast(type: AlertType, message: string) {
  const t: ToastData = { id: ++toastId, type, message };
  listeners.forEach((fn) => fn(t));
}

interface ToastContainerProps {
  max?: number;
}

export function ToastContainer({ max = 5 }: ToastContainerProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  useEffect(() => {
    const handler = (t: ToastData) => {
      setToasts((prev) => {
        const next = [...prev, t];
        return next.length > max ? next.slice(next.length - max) : next;
      });
      if (t.type === 'info' || t.type === 'success') {
        setTimeout(() => {
          setToasts((prev) => prev.filter((x) => x.id !== t.id));
        }, 5000);
      }
    };
    listeners.push(handler);
    return () => {
      const idx = listeners.indexOf(handler);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, [max]);

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast--${t.type}`}>
          <button className="toast__close" onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}>[×]</button>
          {t.message}
        </div>
      ))}
    </div>
  );
}

interface SkeletonProps {
  variant?: 'text' | 'avatar' | 'thumbnail';
  width?: number | string;
}

export function Skeleton({ variant = 'text', width }: SkeletonProps) {
  const cls = `skeleton skeleton-${variant}`;
  return <div className={cls} style={width ? { width } : undefined} />;
}
