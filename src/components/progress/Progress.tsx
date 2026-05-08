import type { Step } from '../types';
import './Progress.css';

interface ProgressBarProps {
  value?: number;
}

export function ProgressBar({ value = 0 }: ProgressBarProps) {
  return (
    <div className="progress-bar-track">
      <div className="progress-bar-fill" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

interface SpinnerProps {
  label?: string;
}

export function Spinner({ label }: SpinnerProps) {
  return (
    <div className="spinner-row">
      <span className="spinner">⟳</span>
      {label && <span className="spinner-label">{label}</span>}
    </div>
  );
}

interface ProgressStepsProps {
  steps: Step[];
}

export function ProgressSteps({ steps }: ProgressStepsProps) {
  return (
    <div>
      <div className="steps">
        {steps.map((step, i) => (
          <span key={i}>
            {i > 0 && <span className={`step-connector${step.completed ? ' completed' : ''}`}>──</span>}
            <span className={`step${step.completed ? ' completed' : ''}${step.active ? ' active' : ''}`}>
              {step.completed ? '[x]' : `[${i + 1}]`}
            </span>
          </span>
        ))}
      </div>
      <div className="step-labels">
        {steps.map((step, i) => (
          <span key={i}>
            {i > 0 && <span className="step-label-spacer" />}
            <span className="step-label">{step.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
