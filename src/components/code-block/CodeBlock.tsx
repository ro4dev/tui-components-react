import { useState, type ReactNode } from 'react';
import './CodeBlock.css';

interface CodeBlockProps {
  filename?: string;
  code: string;
  language?: string;
}

export function CodeBlock({ filename, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lines = code.split('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback
    }
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-title">{filename ?? 'code'}</span>
        <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
          {copied ? '[✓] Copied!' : '[⎘] Copy'}
        </button>
      </div>
      <div className="code-block-body">
        <div className="line-numbers">
          {lines.map((_, i) => <span key={i}>{i + 1}</span>)}
        </div>
        <div className="code-content">{code}</div>
      </div>
    </div>
  );
}

interface InlineCodeProps {
  children: ReactNode;
}

export function InlineCode({ children }: InlineCodeProps) {
  return <code className="inline-code">{children}</code>;
}
