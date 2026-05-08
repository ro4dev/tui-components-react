import type { ReactNode } from 'react';
import './Media.css';

interface ImageBlockProps {
  children?: ReactNode;
  caption?: string;
}

export function ImageBlock({ children, caption }: ImageBlockProps) {
  return (
    <div>
      <div className="media-block">{children}</div>
      {caption && <div className="media-caption">{caption}</div>}
    </div>
  );
}

export function VideoEmbed() {
  return (
    <div className="video-embed">
      <span className="video-embed__overlay">[▶]</span>
    </div>
  );
}

interface BlockquoteProps {
  children: ReactNode;
  cite?: string;
}

export function Blockquote({ children, cite }: BlockquoteProps) {
  return (
    <blockquote className="blockquote">
      <p>{children}</p>
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}
