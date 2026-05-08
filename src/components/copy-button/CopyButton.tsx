import { useState } from 'react';
import './CopyButton.css';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <button className={`copy-button${copied ? ' copied' : ''}`} onClick={handleCopy}>
      {copied ? '[✓]' : '[⎘]'}
    </button>
  );
}
