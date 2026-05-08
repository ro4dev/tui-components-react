import type { ReactNode } from 'react';
import './Avatar.css';

interface AvatarProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  size?: 'default' | 'compact';
}

export function Avatar({ children, src, alt, size = 'default' }: AvatarProps) {
  return (
    <div className={`avatar-circle ${size}`}>
      {src ? <img src={src} alt={alt ?? ''} /> : children}
    </div>
  );
}

interface UserPillProps {
  name: string;
  role: string;
  onRemove?: () => void;
}

export function UserPill({ name, role, onRemove }: UserPillProps) {
  return (
    <div className="user-pill">
      <Avatar size="compact">{name.charAt(0).toUpperCase()}</Avatar>
      <div className="user-info">
        <span className="user-name">{name}</span>
        <span className="user-role">{role}</span>
      </div>
      {onRemove && (
        <button className="pill-remove" onClick={onRemove}>[×]</button>
      )}
    </div>
  );
}
