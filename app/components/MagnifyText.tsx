"use client";

interface MagnifyTextProps {
  text: string;
  className?: string;
}

export default function MagnifyText({ text, className = "" }: MagnifyTextProps) {
  return (
    <span className={className} style={{ display: 'inline-flex', gap: '0' }}>
      {text.split("").map((char, index) => (
        <span 
          key={index} 
          className="magnify-text"
          style={{ display: 'inline-block' }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
