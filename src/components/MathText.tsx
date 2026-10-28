import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
  inline?: boolean;
}

/**
 * Parses text containing inline LaTeX math expressions delimited by $...$ or $$...$$
 * or renders plain formatted text cleanly with KaTeX.
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = '', inline = true }) => {
  const renderedContent = useMemo(() => {
    if (!text) return '';

    // If text contains $...$ or $$...$$ delimiters
    if (text.includes('$')) {
      const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
      return parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2);
          try {
            const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} className="my-2 block text-center" />;
          } catch {
            return <span key={index} className="font-mono">{part}</span>;
          }
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1);
          try {
            const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
            return <span key={index} dangerouslySetInnerHTML={{ __html: html }} className="inline-block mx-0.5" />;
          } catch {
            return <span key={index} className="font-mono">{part}</span>;
          }
        }
        return <span key={index}>{part}</span>;
      });
    }

    return text;
  }, [text]);

  return <span className={className}>{renderedContent}</span>;
};
