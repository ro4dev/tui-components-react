export type AlertType = 'info' | 'warning' | 'danger' | 'success';
export type BadgeState = 'active' | 'warning' | 'error' | 'idle';
export type CardVariant = 'flat' | 'header' | 'dark' | 'stats';
export type DialogVariant = 'default' | 'dark';
export type TabVariant = 'strip' | 'pills';
export type ToggleVariant = 'ascii' | 'switch';
export type ProgressVariant = 'bar' | 'spinner' | 'steps';
export type BreadcrumbItem = { label: string; href?: string; active?: boolean };
export type Step = { label: string; completed?: boolean; active?: boolean };

export interface AlertData {
  type: AlertType;
  title: string;
  body: string;
  onDismiss?: () => void;
}
