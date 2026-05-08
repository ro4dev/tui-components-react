import './Layout.css';

interface DividerProps {
  strong?: boolean;
}

export function HorizontalDivider({ strong }: DividerProps) {
  return <hr className={`divider-horizontal${strong ? ' divider-horizontal--strong' : ''}`} />;
}

export function VerticalDivider() {
  return <span className="divider-vertical" />;
}
